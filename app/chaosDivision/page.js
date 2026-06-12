import Link from "next/link";

export default function GenesisProtocol() {
  return (
    <div className="min-h-screen bg-black text-white p-10 font-mono">

      <Link href="/archiveMap"  className="text-cyan-400">
        ← Back to Archive Map
      </Link>

      <h1 className="text-4xl mt-6">
  Unpredictability & Ragebait Division
</h1>

      <p className="mt-6">
        Archive data is currently being reconstructed.
      </p>

      <p className="mt-4">
        Additional records will be uploaded soon.
      </p>

      <p className="mt-8 text-gray-400">
        🧾 Researcher Observation: Subject data remains under investigation.
      </p>

      <div className="mt-8 border border-gray-700 p-4">
        🎖 Badge Status: Pending
      </div>

    </div>
  );
}