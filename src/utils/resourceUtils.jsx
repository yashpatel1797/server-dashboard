const filterResources = (resources, searchTerm, filterCriteria) => {
  if (!searchTerm && !Object.values(filterCriteria).some(value => value.trim())) {
    return resources;
  }

  const searchTermLower = searchTerm.toLowerCase();
  const filteredResources = resources.filter((resource) => {
    const { name, type, status, region, account } = resource;
    const matchesSearch =
      name.toLowerCase().includes(searchTermLower) ||
      type.toLowerCase().includes(searchTermLower) ||
      status.toLowerCase().includes(searchTermLower) ||
      region.toLowerCase().includes(searchTermLower) ||
      (account && typeof account === 'string' && account.trim().toLowerCase().includes(searchTermLower));

    const matchesFilters =
      (filterCriteria.status === '' || status === filterCriteria.status) &&
      (filterCriteria.name === '' || name.toLowerCase().includes(filterCriteria.name)) &&
      (filterCriteria.account === '' || account.includes(filterCriteria.account)) &&
      (filterCriteria.region === '' || region.includes(filterCriteria.region));

    return matchesSearch && matchesFilters;
  });

  return filteredResources;
};

export { filterResources };