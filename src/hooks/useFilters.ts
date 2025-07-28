import { useState } from "react";

export type Filters = {
  label: string;
  value: string;
  paramName?: string;
} & { [key: string]: string | number | boolean };

type UseFilterProps = {
  filters?: Filters;
  replaceFiltersOnCheck?: boolean;
} | void;

export const useFilters = ({
  filters,
  replaceFiltersOnCheck = false,
}: UseFilterProps = {}) => {
  const [selectedFilters, setSelectedFilters] = useState<Filters[]>([]);

  const addFilter = (filter: Filters, replace?: boolean) => {
    let newSelectedFilters = [...selectedFilters];

    if (replace) {
      newSelectedFilters = selectedFilters.filter(
        (selected) => filter.value !== selected.value
      );
    }

    setSelectedFilters([...newSelectedFilters, filter]);
  };

  const removeFilter = (filter: Filters) => {
    const newSelectedFilters = selectedFilters.filter(
      (selected) => filter.value !== selected.value
    );
    setSelectedFilters(newSelectedFilters);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const toggle = (filter: Filters, isChecked: boolean) => {
    if (isChecked) {
      addFilter(filter, replaceFiltersOnCheck);
    } else {
      removeFilter(filter);
    }
  };

  const filterParams = selectedFilters.reduce<
    Record<string, string | number | boolean>
  >((acc, filter) => {
    acc[filter.paramName || filter.value] = filter.value;

    return acc;
  }, {});

  return {
    filters,
    selectedFilters,
    filterParams,
    addFilter,
    removeFilter,
    clearFilters,
    toggle,
  };
};
