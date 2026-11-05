import { moods } from '../data/moods';
import MoodButton from './MoodButton';

export default function MoodSelector({ selectedMood, onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 md:mb-10">
      {moods.map((mood) => (
        <MoodButton
          key={mood.id}
          mood={mood}
          isSelected={selectedMood?.id === mood.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}