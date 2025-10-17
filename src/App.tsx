

export default function App() {
  const appName = typeof window !== 'undefined' && window.api ? window.api.appName : 'App';
  const appVersion = typeof window !== 'undefined' && window.api ? window.api.appVersion : '';
  const ping = typeof window !== 'undefined' && window.api ? window.api.ping() : '';
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-blue-500">
          LIBROSYNC Admin
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <button className="block w-full text-left hover:bg-blue-500 rounded px-2 py-1">
            Dashboard
          </button>
          <button className="block w-full text-left hover:bg-blue-500 rounded px-2 py-1">
            Books
          </button>
          <button className="block w-full text-left hover:bg-blue-500 rounded px-2 py-1">
            Students
          </button>
          <button className="block w-full text-left hover:bg-blue-500 rounded px-2 py-1">
            Reports
          </button>
          <button className="block w-full text-left hover:bg-blue-500 rounded px-2 py-1">
            Settings
          </button>
        </nav>
        <div className="p-4 border-t border-blue-500">
          <button className="bg-red-500 hover:bg-red-600 w-full py-1 rounded">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-baseline justify-between mb-4">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <div className="text-sm text-gray-500">{appName} {appVersion} • {ping}</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">Books</h2>
            <p className="text-2xl font-bold text-blue-600">120</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">Students</h2>
            <p className="text-2xl font-bold text-blue-600">350</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">Borrowed</h2>
            <p className="text-2xl font-bold text-blue-600">45</p>
          </div>
        </div>
      </main>
    </div>
  );
}
