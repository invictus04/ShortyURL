import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function ShortenCard() {
  const [url, setUrl] = useState(""); 
  const [shortenedUrl, setShortenedUrl] = useState(""); 

  const handleShortenUrl = async () => {
    if (url) {
      try {
        const response = await axios.post(`https://successful-adena-invictus04-e0d9f500.koyeb.app/url`, null, {
          params: { url },
        });
        setShortenedUrl(response.data);
        // console.log("Request has been sent to ", response.data.shortUrl);
      } catch (error) {
        // console.error("Error shortening the URL:", error);
        alert("Failed to shorten the URL. Please try again.");
      }
    } else {
      alert("Please enter a URL.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="App-title mb-5">Shorty: The URL Shortener</h1>
      <Card
        body
        className="dark mb-5"
        style={{ width: "40rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <h2 className="mb-3" style={{ color: "#353839" }}>
          Paste your URL
        </h2>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter your link"
          value={url}
          onChange={(e) => setUrl(e.target.value)} 
        />

        <Button
          variant="primary"
          size="lg"
          className="mt-4"
          onClick={handleShortenUrl}
        >
          Shorten URL
        </Button>

        {shortenedUrl && (
  <div className="mt-4 text-center">
    <h4>Shortened URL:</h4>
    <div className="d-flex justify-content-center align-items-center">
      <a 
        href="#"
        onClick={async (e) => {
          e.preventDefault(); 
          try {
            const hashValue = shortenedUrl.split('/').pop();
            const response = await axios.get(`https://successful-adena-invictus04-e0d9f500.koyeb.app/url`, {
              params: { value: hashValue },
            });
            // if (response.data && response.data.value) {
            //   console.log(response.data.value);
            //   // window.open(response.data.value, "_blank"); 
            // } else {
            //   console.log(response.data);
            //   console.log(response.data.value);
            //   window.open(response.data, "_blank"); 
            //   alert("Failed to fetch the original URL.");
            // }
            window.open(response.data, "_blank");
          } catch (error) {
            // console.error("Error fetching the shortened URL:", error);
            alert("Failed to fetch the original URL. Please try again.");
          }
        }}
      >
        {shortenedUrl}
      </a>
    </div>
  </div>
)}


        <p className="mt-3 text-muted">
          ShortyURL is a <b>free tool to shorten URLs</b> and generate short
          links. <br />
          URL shortener allows you to <b>create a shortened link</b> making it
          easy to share.
        </p>
      </Card>
    </div>
  );
}

export default ShortenCard;
