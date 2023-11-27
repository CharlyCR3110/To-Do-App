import '../styles/TaskItem.css'

export function TaskItem({ children }) {
  return (
    <div className="item">
        <input type="checkbox" className="item-done-check" name="item-done-check"/>
        <label htmlFor="item-done-check" className="item-label">{children}</label>
    </div>
  )
}