import { useMemo, useState } from "react";
import { FilterFormProps } from "./Types";
import FilterComponentWrapper from "../FilterComponentWrapper";
import { filterOptions } from "../../constants/filterContstats";
import { useFilterHooks } from "../../hooks/useFilterHooks";

import Accordion from "../Accordion";

const FilterForm = (props: FilterFormProps) => {
  const { clasName } = props;
  /* Filtros não implementados const { categoy, tier } = useClientHook();
  
  */
  const { handleFilterChange, handleDynamcValue, handleResetFilter } =
    useFilterHooks();

  // filter setters

  /*const tierCheckboxes = useMemo(
    () =>
      tier_list?.map((option, optionIdx) => (
        <Type key={optionIdx} option={option} />
      )),
    [modalities]
  );*/

  {
    /*const categoryCheckboxes = useMemo(
    () =>
      course_categories?.map((option, optionIdx) => (
        <Category key={optionIdx} option={option} />
      )),
    [categories]
      );*/
  }

  const accordionSections = useMemo(
    () =>
      filterOptions.map((section) => (
        <Accordion key={section.id} section={section}>
          <FilterComponentWrapper
            key={section.id}
            {...section}
            value={handleDynamcValue(section.id) as string}
            onChange={handleFilterChange}
          />
        </Accordion>
      )),
    [handleDynamcValue, handleFilterChange]
  );

  return (
    <>
      <form className={clasName}>
        <h4 className="text-md font-semibold text-gray-700 mb-4">
          Escolha um tier
        </h4>
        <ul
          role="list"
          className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
        >
          {/*tierCheckboxes*/}
        </ul>

        <h4 className="text-md font-semibold text-gray-700 mb-4 mt-3">
          Escolha uma categoria
        </h4>
        <ul
          role="list"
          className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
        >
          {/*categoryCheckboxes*/}
        </ul>

        {accordionSections}

        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            onClick={handleResetFilter}
          >
            Resetar Filtro
          </button>
        </div>
      </form>
    </>
  );
};

export default FilterForm;
