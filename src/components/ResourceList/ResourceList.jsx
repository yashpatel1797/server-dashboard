import React, { useState } from 'react';

import ResourceItem from './ResourceItem';
import SearchInput from '../Search/SearchInput';
import { mockResources } from '../../utils/mockData';
import { filterResources } from '../../utils/resourceUtils';

const ResourceList = () => {
  const [resources, setResources] = useState(mockResources);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState({
    status: '',
    name: '',
    account: '',
    region: '',
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredResources = filterResources(mockResources, term, filterCriteria);
    setResources(filteredResources);
  };

  const handleFilterChange = (criteria, value) => {
    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      [criteria]: value,
    }));

    const filteredResources = filterResources(mockResources, searchTerm, {
      ...filterCriteria,
      [criteria]: value,
    });

    setResources(filteredResources);
  };

  return (
    <div className="resource-list">
      <SearchInput onSearch={handleSearch} />
      <div className="filters flex items-center mb-4">
        <label className="mr-4">
          Status:
          <select
            value={filterCriteria.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="ml-2 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="Running">Running</option>
            <option value="Stopped">Stopped</option>
            <option value="Active">Active</option>
          </select>
        </label>

        <label className="mr-4">
          Name:
          <input
            type="text"
            value={filterCriteria.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
            className="ml-2 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="mr-4">
          Account:
          <input
            type="text"
            value={filterCriteria.account}
            onChange={(e) => handleFilterChange('account', e.target.value)}
            className="ml-2 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="mr-4">
          Region:
          <input
            type="text"
            value={filterCriteria.region}
            onChange={(e) => handleFilterChange('region', e.target.value)}
            className="ml-2 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      <div className="resource-list-items">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> 
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Region
                </th>
                <th scope="col" class="px-6 py-3">
                    Account
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
          <tbody className="text-blue-600 text-sm font-light">
            {resources.map((resource) => (
              <ResourceItem key={resource.id} resource={resource} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceList;