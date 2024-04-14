export interface Journal {
  Message: string;
  Date: number;
  Title: string;
  Mood: MoodEnum;
  UserID: string;
  Privacy: PrivacyEnum;
}

export enum PrivacyEnum {
  Public = 'Public',
  Private = 'Private',
}

export enum MoodEnum {
  Happy = '😄 Happy',
  Sad = '😢 Sad',
  Angry = '😠 Angry',
  Scared = '😨 Scared',
  Bored = '😑 Bored',
  Tired = '😩 Tired',
  Anxious = '😰 Anxious',
  Depressed = '😞 Depressed',
  Calm = '😌 Calm',
  Relaxed = '😌 Relaxed',
  Content = '😊 Content',
  Grateful = '🙏 Grateful',
  Frustrated = '😤 Frustrated',
  Guilty = '😔 Guilty',
  Lonely = '😔 Lonely',
  Disappointed = '😞 Disappointed',
  Jealous = '😒 Jealous',
  Insecure = '😕 Insecure',
  Nervous = '😬 Nervous',
  Irritated = '😠 Irritated',
  Indifferent = '😐 Indifferent',
  Pessimistic = '😞 Pessimistic',
  Envious = '😒 Envious',
  Hopeless = '😞 Hopeless',
  Desperate = '😟 Desperate',
  Panicked = '😱 Panicked',
  Ecstatic = '😁 Ecstatic',
  Blissful = '😌 Blissful',
  Peaceful = '🕊️ Peaceful',
  Serene = '😌 Serene',
  Relieved = '😅 Relieved',
  Satisfied = '😊 Satisfied',
  Pleased = '😊 Pleased',
  Proud = '😊 Proud',
  Confident = '😎 Confident',
  Courageous = '💪 Courageous',
  Brave = '🦸 Brave',
  Bold = '🔥 Bold',
  Fearless = '😎 Fearless',
  Optimistic = '😄 Optimistic',
  Hopeful = '🤞 Hopeful',
  Enthusiastic = '🤩 Enthusiastic',
  Energetic = '🚀 Energetic',
  Excited = '😃 Excited',
  Thrilled = '😁 Thrilled',
  Overwhelmed = '😳 Overwhelmed',
  Overjoyed = '😄 Overjoyed',
  Joyful = '😄 Joyful',
  Cheerful = '😄 Cheerful',
  Playful = '😜 Playful',
}
