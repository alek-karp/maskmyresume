'use client'

import { useState, ChangeEvent } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';

const UploadResume = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    // Simulate file upload logic here
    console.log('Uploading file:', file.name);

    // Simulate upload delay
    setTimeout(() => {
      setUploading(false);
      alert('Resume uploaded successfully!');
    }, 2000);
  };

  return (
    <div className="text-center">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mx-auto size-12 text-gray-400"
      >
        <path
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h3 className="mt-2 text-sm font-semibold text-gray-900">Upload Your Resume</h3>
      <p className="mt-1 text-sm text-gray-500">Upload your resume to get started with anonymization.</p>

      <div className="mt-6">
        {!file ? (
          <>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
              Choose Resume
            </label>
          </>
        ) : (
          <div>
            <p className="mt-2 text-sm text-gray-600">Selected File: {file.name}</p>
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {uploading ? 'Uploading...' : 'Upload Resume'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
