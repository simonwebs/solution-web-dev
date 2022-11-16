import XCircleIcon from '@heroicons/react/20/solid/XCircleIcon';
import React from 'react';

export const ErrorAlert = ({ message }) => (
  <div className="rounded-md bg-red-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <XCircleIcon
          className="h-5 w-5 text-red-400 dark:text-red-700"
          aria-hidden="true"
        />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800 dark:text-red-700">
          {message}
        </h3>
      </div>
    </div>
  </div>
);
