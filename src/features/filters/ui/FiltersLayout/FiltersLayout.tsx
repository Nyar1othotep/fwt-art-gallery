import cn from "classnames/bind";
import React, { useContext, useState } from "react";

import { useGetGenresQuery } from "@/entities/genres";
import { ThemeContext } from "@/features/theme";
import { Button } from "@/shared/ui/Button";
import { Sidebar } from "@/shared/ui/Sidebar";

import { sortBy } from "../../config";
import { FiltersContext } from "../../lib/FiltersProvider";
import { useSelectedFilters } from "../../lib/useSelectedFilters";
import { ReactComponent as IconFilter } from "../assets/filter_icon.svg";
import { FilterAccordion } from "../FilterAccordion";

import styles from "./FiltersLayout.module.scss";

const cx = cn.bind(styles);

const FiltersLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { filters, setFilters, clearFilters } = useContext(FiltersContext);
  const { data: genres } = useGetGenresQuery();
  const [isShow, setIsShow] = useState(false);
  const { selectedGengres, handleSelect } = useSelectedFilters(filters);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  const handleResult = () =>
    setFilters({ ...filters, genres: selectedGengres });

  const handleClear = () => clearFilters();

  return (
    <div className={cx("filters-layout")}>
      <div className={cx("filters-layout__search")}>search</div>
      <Button theme={theme} variant="icon" onClick={handleShow}>
        <IconFilter />
      </Button>
      <Sidebar theme={theme} isShow={isShow} onClose={handleClose}>
        <div
          className={cx("filters-layout__sidebar-content", "sidebar-content")}
        >
          <FilterAccordion className={cx("sidebar-content__accordion")}>
            <FilterAccordion.Item>
              <FilterAccordion.Header title="Genres" />
              <FilterAccordion.Body>
                {genres &&
                  genres.map(({ _id, name }) => (
                    <FilterAccordion.Text
                      key={_id}
                      theme={theme}
                      forceActive={!!filters.genres?.includes(_id)}
                      onClick={() => handleSelect(_id)}
                    >
                      {name}
                    </FilterAccordion.Text>
                  ))}
              </FilterAccordion.Body>
            </FilterAccordion.Item>
            <FilterAccordion.Item>
              <FilterAccordion.Header title="Sort by" />
              <FilterAccordion.Body>
                {sortBy.map(({ type, name }) => (
                  <FilterAccordion.Text
                    key={type + name}
                    theme={theme}
                    // TODO: Refactor this shit to 'type'
                    forceActive={!!filters.genres?.includes(type)}
                    onClick={() => handleSelect(type)}
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
