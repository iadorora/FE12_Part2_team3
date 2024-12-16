import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import IdolBox from './../components/IdolBox';
import useIdolApi from './../hooks/useIdolApi';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';

const Swpbox = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  > .interestIdol_swp {
    margin: 0;
    .swiper-slide {
      width: 100px;
    }
  }
`;

const InterestIdol = () => {
  const {
    data: data,
    loading: loading,
    error: error,
    setOptions: setOptions,
  } = useIdolApi('pageSize=20');

  return (
    <>
      {!loading ? (
        <Swpbox>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={22}
            freeMode={{
              enabled: true,
              momentumRatio: 0.1,
            }}
            modules={[FreeMode]}
            className="interestIdol_swp"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <IdolBox item={item} type="my" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Swpbox>
      ) : (
        <div style={{ color: 'white' }}>Loading</div>
      )}
    </>
  );
};

export default InterestIdol;