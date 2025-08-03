const Footer = ({ items }) => {
  const totalItems = items.length;
  const completedItems = items.filter((item) => item.packed).length;
  const percentage = (completedItems / totalItems) * 100 || 0;
  return (
    <div className="footerWrapper">
      {percentage === 100 ? (
        <span>Shoping done</span>
      ) : (
        <span>
          {completedItems} of {totalItems} items packed ({percentage.toFixed(2)}
          %)
        </span>
      )}
    </div>
  );
};

export default Footer;
