import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  useGetStaticArtistsQuery,
  useGetArtistsQuery,
  TArtistsResponse,
} from "@/entities/artists";
import { ThemeContext } from "@/features/theme";
import { Card } from "@/shared/ui/Card";
import { GridLayout } from "@/shared/ui/Layouts/GridLayout";
import { Skeleton } from "@/shared/ui/Skeleton";

interface IArtistsList {
  isAuth: boolean;
  filters: object;
}

const ArtistsList: React.FC<IArtistsList> = ({ isAuth, filters }) => {
  const { theme } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(1);
  const { data: staticData, isLoading: isStaticLoading } =
    useGetStaticArtistsQuery(undefined, { skip: isAuth });
  const {
    data: {
      data,
      meta: { count = 0, perPage = 0 } = {},
    } = {} as TArtistsResponse,
    isLoading,
  } = useGetArtistsQuery(
    {
      filters: { ...filters, pageNumber },
    },
    { skip: !isAuth },
  );
  const { ref, inView } = useInView({ rootMargin: "400px", threshold: 1 });

  useEffect(() => {
    if (inView && isAuth && pageNumber <= Math.ceil(count / perPage)) {
      setPageNumber((prev) => prev + 1);
    }
  }, [inView, pageNumber, count, perPage, isAuth]);

  const artists = data ?? staticData;
  const isArtistsLoading = isLoading || isStaticLoading;

  if (isArtistsLoading) {
    return (
      <GridLayout>
        {Array.from({ length: 6 }, (_, key) => (
          <Skeleton key={key} theme={theme} />
        ))}
      </GridLayout>
    );
  }

  if (artists.length === 0) return <div>No data</div>;

  return (
    <>
      <GridLayout>
        {artists.map(({ _id, name, yearsOfLife, mainPainting }) => {
          return (
            <Card
              key={_id}
              to={_id}
              title={name}
              year={yearsOfLife}
              image={mainPainting?.image}
              theme={theme}
            />
          );
        })}
      </GridLayout>
      <div ref={ref} />
    </>
  );
};

export default ArtistsList;
