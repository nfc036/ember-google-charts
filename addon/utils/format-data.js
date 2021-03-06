export default function formatData(data) {
  const { google: { visualization } } = window;
  const isDataTable = data instanceof visualization.DataTable;

  return isDataTable ? data : visualization.arrayToDataTable(data);
}
