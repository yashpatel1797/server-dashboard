import React from 'react';

const ResourceItem = ({ resource }) => {
  const { name, status, type, account, region } = resource;

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="px-6 py-4">
        {name}
      </td>
      <td class="px-6 py-4">
          {type}
      </td>
      <td class="px-6 py-4">
          {region}
      </td>
      <td class="px-6 py-4">
          {account}
      </td>
      <td class="px-6 py-4">
          {status}
      </td>
    </tr>
  );
};

export default ResourceItem;