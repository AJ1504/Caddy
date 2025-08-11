"use client";

import React, { useState } from "react";
import { callResearchApi } from "../lib/api";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await callResearchApi(query);
      setResults(data);
    } catch (err) {
      setError("Failed to fetch research results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto" }}>
      <h2>Research Query</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter research topic or query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          required
        />
        <button type="submit" disabled={loading || !query.trim()}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {results && (
        <section style={{ marginTop: "2rem" }}>
          <h3>Summary</h3>
          <p>{results.summary}</p>

          <h3>Papers</h3>
          <ul>
            {results.papers.map((paper: any, idx: number) => (
              <li key={idx}>
                <a href={paper.url} target="_blank" rel="noreferrer">
                  {paper.title}
                </a>
                : {paper.summary}
              </li>
            ))}
          </ul>

          <h3>Components</h3>
          <ul>
            {results.components.map((comp: any, idx: number) => (
              <li key={idx}>
                {comp.component} from {comp.supplier} —{" "}
                <a href={comp.datasheet} target="_blank" rel="noreferrer">
                  Datasheet
                </a>
              </li>
            ))}
          </ul>

          <h3>Standards</h3>
          <p>{results.standards}</p>
        </section>
      )}
    </div>
  );
}
