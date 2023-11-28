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
  const { selectedFilters, handleSelect } = useSelectedFilters(filters);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  const handleResult = () => setFilters(selectedFilters);

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
              <FilterAccordion.Header theme={theme} title="Genres" />
              <FilterAccordion.Body>
                {genres &&
                  genres.map(({ _id, name }) => (
                    <FilterAccordion.Text
                      key={_id}
                      theme={theme}
                      forceActive={!!filters.genres?.includes(_id)}
                      onClick={() =>
                        handleSelect({ type: "genres", genre: _id })
                      }
                    >
                      {name}
                    </FilterAccordion.Text>
                  ))}
              </FilterAccordion.Body>
            </FilterAccordion.Item>
            <FilterAccordion.Item>
              <FilterAccordion.Header theme={theme} title="Sort by" />
              <FilterAccordion.Body>
                {sortBy.map(({ filter, type, name }) => {
                  const forceActive = !selectedFilters.orderBy
                    ? type === ""
                    : selectedFilters.orderBy === type;

                  return (
                    <FilterAccordion.Text
                      key={type + name}
                      theme={theme}
                      variant="radio"
                      forceActive={forceActive}
                      onClick={() => handleSelect({ [filter]: type })}
                    >
                      {name}
                    </FilterAccordion.Text>
                  );
                })}
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
