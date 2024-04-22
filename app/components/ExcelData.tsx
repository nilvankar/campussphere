'use client'
import React, { useState, ChangeEvent } from 'react';
import * as XLSX from 'xlsx';

const ExcelData: React.FC = () => {
  const [excelData, setExcelData] = useState<any[] | null>(null); // State to hold parsed Excel data

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the uploaded file
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target?.result;
      if (data && typeof data === 'string') {
        // Convert the base64 string to ArrayBuffer
        const arrayBuffer = base64ToArrayBuffer(data);
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });

        // Assuming we're interested in the first sheet (index 0)
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Parse the sheet to JSON format
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Set the parsed data to state
        setExcelData(jsonData);
      }
    };

    reader.readAsDataURL(file);
  };

  const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
    const binaryString = window.atob(base64.split(',')[1]);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  };

  return (
    <div>
      <h2>Excel Reader</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {excelData && (
        <div>
         <table className="table">
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value:any, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelData;
