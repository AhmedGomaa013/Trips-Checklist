import { useMemo, useState } from 'react'

const initialItems = [
  { id: 1, item: 'Socks', quantity: 4, packed: false },
  { id: 2, item: 'Cap', quantity: 1, packed: false },
  { id: 3, item: 'Anti-sweet', quantity: 1, packed: false },
  { id: 4, item: 'Sunscreen', quantity: 1, packed: false },
  { id: 5, item: 'Protein bars', quantity: 7, packed: false },
  { id: 6, item: 'Yogurts', quantity: 3, packed: false },
  { id: 7, item: 'Tuna', quantity: 1, packed: false },
  { id: 8, item: 'Nuts', quantity: 1, packed: false },
  { id: 9, item: 'Peanut butter', quantity: 1, packed: false },
  { id: 10, item: 'Banana', quantity: 1, packed: false },
  { id: 11, item: 'Wipes', quantity: 1, packed: false },
  { id: 12, item: 'Handkerchief', quantity: 1, packed: false },
  { id: 13, item: 'Crocks', quantity: 1, packed: false },
  { id: 14, item: 'Power bank', quantity: 1, packed: false },
  { id: 15, item: 'Charger', quantity: 1, packed: false },
  { id: 16, item: 'Buzzer', quantity: 1, packed: false },
]

function ChecklistPage() {
  const [items, setItems] = useState(initialItems)
  const [activeTab, setActiveTab] = useState('todo')

  const packedCount = useMemo(
    () => items.filter((item) => item.packed).length,
    [items],
  )

  const todoItems = items.filter((item) => !item.packed)
  const packedItems = items.filter((item) => item.packed)
  const visibleItems = activeTab === 'todo' ? todoItems : packedItems

  const toggleItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    )
  }

  return (
    <section className="checklist-card">
      <header className="checklist-header">
        <p className="eyebrow">Trip Essentials</p>
        <h1>Trips Checklist</h1>
        <p className="summary">
          {packedCount} of {items.length} packed
        </p>
      </header>

      <div className="tabs" role="tablist" aria-label="Packing tabs">
        <button
          type="button"
          className={activeTab === 'todo' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('todo')}
          aria-selected={activeTab === 'todo'}
        >
          To-do
        </button>
        <button
          type="button"
          className={activeTab === 'packed' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('packed')}
          aria-selected={activeTab === 'packed'}
        >
          Packed
        </button>
      </div>

      <ul className="checklist">
        {visibleItems.length > 0 ? (
          visibleItems.map(({ id, item, quantity, packed }) => (
            <li key={id} className={packed ? 'packed' : ''}>
              <label className="checklist-item">
                <input
                  type="checkbox"
                  checked={packed}
                  onChange={() => toggleItem(id)}
                />
                <span className="item-name">{item}</span>
                <span className="item-quantity">x{quantity}</span>
              </label>
            </li>
          ))
        ) : (
          <li className="empty-state-item">
            {activeTab === 'todo'
              ? 'No items left to pack.'
              : 'No items packed yet.'}
          </li>
        )}
      </ul>
    </section>
  )
}

export default ChecklistPage
