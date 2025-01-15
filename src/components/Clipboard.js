import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const Clipboard = ({ solutionCode }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(solutionCode).catch((err) => {
      console.error("Failed to copy code: ", err);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-zinc-500 text-white p-2 rounded hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-400"
    >
      <FontAwesomeIcon icon={faClipboard} className="w-6 h-6" />
    </button>
  );
};

Clipboard.propTypes = {
  solutionCode: PropTypes.string.isRequired,
};

export default Clipboard;
