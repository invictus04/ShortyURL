import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { CopyToClipboard } from "react-copy-to-clipboard"; // Import CopyToClipboard


function ShortenCard() {
  const [url, setUrl] = useState(""); // State to store the entered URL
  const [shortenedUrl, setShortenedUrl] = useState(""); // State to store the shortened URL
  
  const handleShortenUrl = async() => {

    if (url) {
      try {
        const response = await axios.post(`http://localhost:8000/url`, null, {
          params: { url }, 
        });
        setShortenedUrl(response.data.shortUrl);
        console.log("Request has been sent to ", response.data.shortUrl);
      } catch (error) {
      console.error("Error shortening the URL:", error);
      alert("Failed to shorten the URL. Please try again.");
      }
    } else {
      alert("Please enter a URL.");
  }
};


  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="App-title mb-5">Shorty: The URL Shortener</h1>
      <Card body className="dark mb-5" style={{ width: "40rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <h2 className="mb-3" style={{ color: "#353839" }}>Paste your URL</h2>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter your link"
          value={url}
          onChange={(e) => setUrl(e.target.value)} // Update the URL state
        />

        <Button variant="primary" size="lg" className="mt-4" onClick={handleShortenUrl}>
          Shorten URL
        </Button>

        {/* Show the shortened URL if available */}
        {shortenedUrl && (
          <div className="mt-4">
            <h4>Shortened URL:</h4>
            <div className="d-flex align-items-center">
              <span style={{ wordBreak: "break-all" }}>{shortenedUrl}</span>
              <CopyToClipboard text={shortenedUrl}>
                <Button variant="outline-primary" className="ml-2">Copy</Button>
              </CopyToClipboard>
            </div>
          </div>
        )}

        <p className="mt-3 text-muted">
          ShortyURL is a <b>free tool to shorten URLs</b> and generate short links. <br />
          URL shortener allows you to <b>create a shortened link</b> making it easy to share.
        </p>
      </Card>
    </div>
  );
}

export default ShortenCard;

