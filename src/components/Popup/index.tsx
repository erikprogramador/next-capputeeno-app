'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

type PopupProps = {
  title: string;
  children: React.ReactNode;
  confirmationText: string;
  isOpen: boolean;
  onConfirm: () => void;
};

export default function Popup({
  title,
  confirmationText,
  children,
  isOpen = false,
  onConfirm,
}: PopupProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => onConfirm()}
      className="fixed bg-black/50 inset-0 flex items-center justify-center"
    >
      <Dialog.Panel className="bg-white shadow-lg p-6 rounded-lg">
        <Dialog.Title className="font-bold text-gray-800">{title}</Dialog.Title>
        <Dialog.Description className="text-gray-600 my-4">
          {children}
        </Dialog.Description>

        <button
          onClick={() => onConfirm()}
          className="bg-indigo-600 text-white px-8 py-2 rounded-lg"
        >
          {confirmationText}
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
