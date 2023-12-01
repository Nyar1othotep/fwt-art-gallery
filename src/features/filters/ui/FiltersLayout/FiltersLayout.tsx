import cn from "classnames/bind";
import React, { useContext } from "react";

import { useGetGenresQuery } from "@/entities/genres";
import { ThemeContext } from "@/features/theme";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Button } from "@/shared/ui/Button";
import { Sidebar } from "@/shared/ui/Sidebar";

import { sortBy } from "../../config";
import { FiltersContext } from "../../lib/FiltersProvider";
import { useSelectedFilters } from "../../lib/useSelectedFilters";
import { ReactComponent as IconFilter } from "../assets/filter_icon.svg";
import { FilterAccordion } from "../FilterAccordion";
import { FilterSearch } from "../FilterSearch";

import styles from "./FiltersLayout.module.scss";

const cx = cn.bind(styles);

const FiltersLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { filters, setFilters, clearFilters } = useContext(FiltersContext);
  const { data: genres } = useGetGenresQuery();
  const {
    selectedGenresArray,
    selectedSort,
    handleSelectGenres,
    handleSelectSort,
  } = useSelectedFilters(filters);
  const selectedGenres = selectedGenresArray.toString();
  const [isSidebar, { on: handleSidebarOpen, off: handleSidebarClose }] =
    useBoolean(false);

  const handleResult = () =>
    setFilters({
      ...filters,
      genres: selectedGenres,
      orderBy: selectedSort,
    });

  const handleClear = () => clearFilters();

  return (
    <div className={cx("filters-layout")}>
      <div className={cx("filters-layout__search")}>
        <FilterSearch />
      </div>
      <Button theme={theme} variant="icon" onClick={handleSidebarOpen}>
        <IconFilter />
      </Button>
      <Sidebar theme={theme} isShow={isSidebar} onClose={handleSidebarClose}>
        <div
          className={cx("filters-layout__sidebar-content", "sidebar-content")}
        >
          <FilterAccordion
            className={cx("sidebar-content__accordion")}
            theme={theme}
          >
            {genres && (
              <FilterAccordion.Item>
                <FilterAccordion.Header
                  title={`Genres(${selectedGenresArray.length})`}
                />
                <FilterAccordion.Body>
                  {genres?.map(({ _id, name }) => (
                    <FilterAccordion.Text
                      key={_id}
                      forceActive={!!selectedGenres.includes(_id)}
                      onClick={handleSelectGenres(_id)}
                    >
                      {name}
                    </FilterAccordion.Text>
                  ))}
                </FilterAccordion.Body>
              </FilterAccordion.Item>
            )}
            <FilterAccordion.Item>
              <FilterAccordion.Header title="Sort by" />
              <FilterAccordion.Body>
                {sortBy.map(({ filter, name }) => (
                  <FilterAccordion.Text
                    key={filter + name}
                    variant="radio"
                    forceActive={selectedSort === filter}
                    onClick={handleSelectSort(filter)}
                  >
                    {name}
                  </FilterAccordion.Text>
                ))}
              </FilterAccordion.Body>
            </FilterAccordion.Item>
          </FilterAccordion>
          <div className={cx("sidebar-content__controls")}>
            <Button theme={theme} variant="text" onClick={handleResult}>
              Show the result
            </Button>
            <Button theme={theme} variant="text" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default FiltersLayout;
