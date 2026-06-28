import React from 'react';
import RepoItem from './RepoItem';

function RepoList({ repositories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repositories.map((repo) => (
        <RepoItem key={repo.name} repo={repo} />
      ))}
    </div>
  );
}

export default RepoList;