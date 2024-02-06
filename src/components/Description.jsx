import React, { useState, useEffect } from "react";
import { fetchDescription } from "../utils";

function Description() {
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log("I run once when the component mounts!");
  }, []);

  return <p>{description}</p>;
}
