interface WidgetProps {
    type: "primary" | "info" | "warning" | "danger";
    iconClass: string;
    title: string;
    value: number | string;
  }
  
  // Component cho widget
  const Widget: React.FC<WidgetProps> = ({ type, iconClass, title, value }) => (
    <div className={`widget-small ${type} coloured-icon`}>
      <i className={`icon ${iconClass} fs-1`}></i>
      <div className="info">
        <h4>{title}</h4>
        <p><b>{value}</b></p>
      </div>
    </div>
  );
  
  export default Widget;