import React, { FC } from 'react';
import { Interface } from 'readline';
import { Cell } from '../models/Cell';
import { Figure, FigureNames } from '../models/figures/Figure';

interface LostFiguresProps {
    title: String;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <div className='lost'>
      <h3>{title}</h3>
      {figures.map(figure => 
        <div key={figure.id}>
            {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} />}
        </div>
        )}
    </div>
  );
};

export default LostFigures;
