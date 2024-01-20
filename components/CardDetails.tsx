import { CarProps } from '@/types';
import React from 'react'

interface CardDetailsProps{
  isOpen: boolean;
  closeModal: ()=> void
  car: CarProps
}


const CardDetails = () => {
  return (
    <div>CardDetails</div>
  )
}

export default CardDetails