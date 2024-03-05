// AddParticipantModal.tsx
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

interface AddParticipantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddParticipant: (participant: { id: number; email: string }) => void;
}

const AddParticipantModal: React.FC<AddParticipantModalProps> = ({ isOpen, onClose, onAddParticipant }) => {
  const [email, setEmail] = useState<string>('');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Participant">
      <input
        type="email"
        placeholder="User email"
        className="text-black mt-4 px-2 py-1 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={() => {
          onAddParticipant({ id: Date.now(), email }); // Simplified example
          setEmail('');
          onClose();
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        save
      </button>
    </Modal>
  );
};

export default AddParticipantModal;
