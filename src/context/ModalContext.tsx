import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isOpen: boolean;
  selectedCar: string;
  openModal: (carName?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');

  const openModal = (carName = '') => {
    setSelectedCar(carName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCar('');
  };

  return (
    <ModalContext.Provider value={{ isOpen, selectedCar, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
