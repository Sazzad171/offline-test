function OfflineScreen({ currentPath }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">🚫 No Internet</h1>
      <p className="text-gray-500 mt-2">
        You tried to visit <code>{currentPath}</code>, but you’re offline.
      </p>
    </div>
  );
}

export default OfflineScreen;