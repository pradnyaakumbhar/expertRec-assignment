import React from 'react';

const WordFrequencyTable = ({ words }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Word</th>
            <th className="border px-4 py-2">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {words.map(([word, frequency], index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{word}</td>
              <td className="border px-4 py-2 text-center">{frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordFrequencyTable;
