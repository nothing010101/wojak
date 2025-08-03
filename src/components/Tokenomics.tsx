export function Tokenomics() {
  return (
    <div className="text-center p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-500 text-white p-4 rounded">
          <div className="text-2xl font-bold">90%</div>
          <div>Fairlaunchpad/LP</div>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded">
          <div className="text-2xl font-bold">5%</div>
          <div>Team</div>
        </div>
        <div className="bg-red-500 text-white p-4 rounded">
          <div className="text-2xl font-bold">5%</div>
          <div>Burn</div>
        </div>
      </div>
      <p className="mt-4 text-green-600 font-semibold">
        ✅ LP & Contract Safe from Apestore
      </p>
    </div>
  )
}
