
<h1 class="text-2xl font-semibold mt-8 mb-4">Phishing Probability Tester</h1>
  <div class="container mx-auto p-10">
    <div class="bg-yellow-300 text-center font-bold text-yellow-900 p-6 rounded shadow-lg">
      💡This project is a <strong>Proof of Concept (PoC)</strong> created solely for demonstration and educational purposes. It is not intended for production use or as a substitute for professional phishing detection systems.
    </div>
  </div>
<h2 class="text-2xl font-semibold mt-8 mb-4">📂 Project Structure</h2>
<table class="table-auto w-full mb-6">
  <thead>
    <tr>
      <th class="px-4 py-2 border">Folder/File</th>
      <th class="px-4 py-2 border">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border px-4 py-2">services/openPhish.js</td><td class="border px-4 py-2">Fetches and updates phishing URLs from OpenPhish feed every 30 minutes.</td></tr>
    <tr><td class="border px-4 py-2">services/phishingDetect.js</td><td class="border px-4 py-2">Detects phishing based on keywords, misspellings, and extracted URLs.</td></tr>
    <tr><td class="border px-4 py-2">routes/analyzeRoute.js</td><td class="border px-4 py-2">API endpoint to analyze incoming email content and return risks.</td></tr>
    <tr><td class="border px-4 py-2">App.js (React Frontend)</td><td class="border px-4 py-2">User interface for email input and displaying phishing analysis results.</td></tr>
  </tbody>
</table>

<h2 class="text-2xl font-semibold mt-8 mb-4">🖥️ Interactive Workflow</h2>
<ol class="list-decimal pl-6 mb-6">
  <li>Paste email content in the text box.</li>
  <li>Click <strong>Submit</strong>.</li>
  <li>Instantly view phishing keywords, suspicious spelling mistakes, and malicious URLs detected.</li>
  <li>Use the <strong>Reset</strong> button to clear results.</li>
</ol>

<h2 class="text-2xl font-semibold mt-8 mb-4">🚀 Quick Start</h2>



<pre class="bg-gray-200">
<p class="font-semibold">Backend Setup:</p>
cd backend
npm install
node index.js

<p class="font-semibold">Frontend Setup:</p>
cd frontend
npm install
npm start


<h2 class="text-2xl font-semibold mt-8">🎯 Key Features</h2>
<ul class="list-disc pl-6 mb-2">
  <li>Real-time phishing detection</li>
  <li>Automatic URL updates via OpenPhish feed</li>
  <li>Spelling-based suspicion detection</li>
  <li>Interactive frontend UI</li>
</ul>

<h2 class="text-2xl font-semibold mt-8 mb-4">🌟 Planned Future Upgrades</h2>
<ul class="list-disc pl-6 mb-6">
  <li>ML-based content classification</li>
  <li>Risk score visualization charts</li>
  <li>URL disguise and shortening detection</li>
  <li>Email header analysis support</li>
  <li>Cloud deployment with HTTPS</li>
  <li>Progress bars and UI animations</li>
</ul>
