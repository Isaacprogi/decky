// ParticipantsList.tsx
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

interface Participant {
  id: number;
  email: string;
}

interface ParticipantsListProps {
  participants: Participant[];
  onRemoveParticipant: (participant: Participant) => void;
}

const ParticipantsList: React.FC<ParticipantsListProps> = ({ participants=[], onRemoveParticipant }) => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);

  const handleRemoveClick = (participant: Participant) => {
    setSelectedParticipant(participant);
    setShowConfirmModal(true);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-100">Participants</h3>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id} className="flex items-center justify-between bg-gray-600 text-white p-2 rounded mt-2">
            <span>{participant.email}</span>
            <button
              onClick={() => handleRemoveClick(participant)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Remove Participant"
      >
        <p className="text-white">Are you sure you want to remove {selectedParticipant?.email}?</p>
        <button
          onClick={() => {
            if (selectedParticipant) onRemoveParticipant(selectedParticipant);
            setShowConfirmModal(false);
          }}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Proceed
        </button>
      </Modal>
    </div>
  );
};

export default ParticipantsList;
