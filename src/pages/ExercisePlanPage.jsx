const toKg = (value) => `${Number(value).toFixed(1).replace(/\.0$/, '')} kg`

const MAX_WEIGHT_FACTOR = 0.7

const getWeightedSets = (
  maxWeight,
  minPercent,
  maxPercent,
  setCount = 3,
  factor = MAX_WEIGHT_FACTOR,
) => {
  const effectiveMaxWeight = maxWeight * factor
  const minWeight = effectiveMaxWeight * minPercent
  const maxWeightForSet = effectiveMaxWeight * maxPercent
  const step = (maxWeightForSet - minWeight) / Math.max(setCount - 1, 1)

  return Array.from({ length: setCount }, (_, index) =>
    toKg(minWeight + step * index),
  )
}

const exerciseDays = [
  {
    id: 'day-1',
    title: 'Day 1',
    warmup: [
      { name: 'Deadbug', sets: '2 x 13', video: null },
      {
        name: 'Banded Fire Hydrant',
        sets: '3 x 10-12',
        video: 'https://youtube.com/shorts/VtgLTY_051M?si=ezdjvcUXOs88iycD',
      },
      { name: 'Adductor Band Raises', sets: '2 x 12', video: null },
      { name: 'Front & Back Raises', sets: '2 x 13', video: null },
    ],
    workout: [
      {
        name: 'Ankle Mobility',
        sets: '2 x 8 for each ankle',
        video: 'https://youtube.com/shorts/OmJ6vNfZwYQ?si=AT0OfURbiHoZL4E2',
      },
      {
        name: 'Deadlift',
        sets: '3 x 3-5 (95-99%)',
        note: 'Rest 3-5 min',
        weightBreakdown: getWeightedSets(72.5, 0.95, 0.99),
      },
      {
        name: 'Squat Barbell',
        sets: '3 x 3-5 (95-99%)',
        note: 'Rest 3-5 min',
        weightBreakdown: getWeightedSets(50, 0.95, 0.99),
      },
      {
        name: 'Hip Trust',
        sets: '3 x 15 (60-75%)',
        note: 'Rest 1 - 1:30 min',
        weightBreakdown: getWeightedSets(70, 0.6, 0.75),
      },
      {
        name: 'Leg Extension',
        sets: '3 x 15 (60-70%)',
        note: 'Rest 1 - 1:30 min',
        weightBreakdown: getWeightedSets(66, 0.6, 0.7),
      },
      {
        name: 'Leg Curl',
        sets: '3 x 15 (60-70%)',
        note: 'Rest 1 - 1:30 min',
        weightBreakdown: getWeightedSets(44, 0.6, 0.7),
      },
      {
        name: 'Calves Raises',
        sets: '3 x 15-20 (70-80%)',
        note: 'Rest 1 - 1:30 min',
        weightBreakdown: getWeightedSets(40, 0.7, 0.8),
      },
      { name: 'Wall Sit', sets: '3 x 40 - 60 sec', note: 'Rest 30 sec' },
    ],
    stretching: 'Stretching',
  },
  {
    id: 'day-2',
    title: 'Day 2',
    warmup: [
      { name: 'BearDog', sets: '2 x 13', video: null },
      { name: 'Chest Press Band Raises', sets: '2 x 13', video: null },
      { name: 'Lat pull down Band Raises', sets: '2 x 13', video: null },
      { name: 'Side Walk Band', sets: '2 x 10', video: null },
    ],
    workout: [
      {
        name: 'Isometric bench Press Barbell',
        sets: '3 x hold 7-11 sec',
        note: 'Rest 2:30 - 3 min',
      },
      {
        name: 'Isometric Deadlift',
        sets: '3 x hold 7-11 sec',
        note: 'Rest 2:30 - 3 min (Pull from back more than the legs)',
      },
      { name: 'Bent over', sets: '3 x 15 (65-75%)', note: 'Rest 1: 1:30 min' },
      {
        name: 'Middle Back Barbell Row on chest',
        sets: '3 x 15 (65 - 75%)',
        note: 'Rest 1: 1:30 min',
      },
      { name: 'Chest press Dumbbell', sets: '3 x 15 (60 - 70%)', note: 'Rest 1 : 1:30 min' },
      { name: 'Lateral Rises Dumbbell', sets: '3 x 13 (50 - 60%)', note: 'Rest 1 : 1:30 min' },
      { name: 'Copenhagen Plank', sets: '3 x 40-50 sec', note: 'Rest 35 sec' },
    ],
    stretching: 'Stretching',
  },
]

function ExercisePlanPage() {
  return (
    <section className="plan-card">
      <header className="plan-header">
        <p className="eyebrow">Fitness Routine</p>
        <h1>Exercise Plan</h1>
        <p className="summary">Strength training and mobility routine</p>
      </header>

      <div className="plan-layout">
        {exerciseDays.map((day) => (
          <article key={day.id} className="day-card">
            <h2>{day.title}</h2>

            <div className="plan-section">
              <p className="section-label">Warm-Up: Mobility</p>
              <ul className="exercise-list">
                {day.warmup.map((exercise) => (
                  <li key={`${day.id}-${exercise.name}`} className="exercise-item">
                    <span className="exercise-name">{exercise.name}</span>
                    <span className="exercise-sets">{exercise.sets}</span>
                    {exercise.video ? (
                      <a
                        href={exercise.video}
                        target="_blank"
                        rel="noreferrer"
                        className="video-link"
                      >
                        Video
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="plan-section">
              <p className="section-label">Workout</p>
              <ul className="exercise-list">
                {day.workout.map((exercise) => (
                  <li key={`${day.id}-${exercise.name}`} className="exercise-item">
                    <div className="exercise-meta">
                      <span className="exercise-name">{exercise.name}</span>
                      <span className="exercise-sets">{exercise.sets}</span>
                    </div>
                    {exercise.note ? <span className="exercise-note">{exercise.note}</span> : null}
                    {exercise.weightBreakdown ? (
                      <ul className="weight-breakdown">
                        {exercise.weightBreakdown.map((setWeight, index) => (
                          <li key={`${exercise.name}-set-${index}`}>
                            Set {index + 1}: {setWeight}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {exercise.video ? (
                      <a
                        href={exercise.video}
                        target="_blank"
                        rel="noreferrer"
                        className="video-link"
                      >
                        Video
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="stretching-block">
              <span className="section-label">Stretching</span>
              <p>{day.stretching}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExercisePlanPage
