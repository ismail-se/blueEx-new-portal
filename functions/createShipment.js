var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=7m16hct15dva3nv7b5gbe9epg1");

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow",
};

const createShipment = async (
  prodValue,
  saleDiscount,
  conName,
  conAdd,
  conCont,
  conMail,
  cbc,
  origCity,
  destCountry,
  destCity,
  insur,
  coment,
  prodDetail,
  serviceCode,
  ptype,
  pcs,
  wgt,
  fragile,
  custRef,
  shpName,
  shpAdd,
  shpCont,
  shpMail,
  storeId,
  bookingType,
  insurValue,
  acno,
  status,
  message,
  cnno
) => {
  let data;
  console.log("Orig", origCity);
  console.log(
    `http://benefitx.blue-ex.com/api/customerportal/booking_new.php?prod_value=${prodValue}&salediscount=${saleDiscount}&con_name=${conName}&con_add=${conAdd}&con_cont=${conCont}&con_mail=${conMail}&cbc=${cbc}&orig_city=${origCity}&dest_country=${destCountry}&dest_city=${destCity}&insur=${insur}&coment=${coment}&prod_detail=${prodDetail}&service_code=${serviceCode}&ptype=${ptype}&pcs=${pcs}&wgt=${wgt}&fragile=${fragile}&cust_ref=${custRef}&shp_name=${shpName}&shp_add=${shpAdd}&shp_cont=${shpCont}&shp_mail=${shpMail}&storeid=${storeId}&booking_type=${bookingType}&insur_value=${insurValue}&acno=${acno}`
  );
  // "http://benefitx.blue-ex.com/api/customerportal/booking_new.php?prod_value=${prodValue}&salediscount=${saleDiscount}&con_name=${conName}&con_add=${conAdd}&con_cont=${conCont}&con_mail=${conMail}&cbc=${cbc}&orig_city=${origCity}&dest_country=${destCountry}&dest_city=${destCity}&insur=${insur}&coment=${coment}&prod_detail=${prodDetail}&service_code=${serviceCode}&ptype=${ptype}&pcs=${pcs}&wgt=${wgt}&fragile=${fragile}&cust_ref=${custRef}&shp_name=${shpName}&shp_add=${shpAdd}&shp_cont=${shpCont}&shp_mail=${shpMail}&storeid=${storeId}&booking_type=${bookingType}&insur_value=${insurValue}&acno=${acno}"
  await fetch(
    // `http://benefitx.blue-ex.com/api/customerportal/booking_new.php?prod_value=${prodValue}&salediscount=${saleDiscount}&con_name=${conName}&con_add=${conAdd}&con_cont=${conCont}&con_mail=${conMail}&cbc=${cbc}&orig_city=${origCity}&dest_country=PK&dest_city=${destCity}&insur=${insur}&coment=${coment}&prod_detail=${prodDetail}&service_code=${serviceCode}&ptype=${ptype}&pcs=${pcs}&wgt=${wgt}&fragile=${fragile}&cust_ref=${custRef}&shp_name=${shpName}&shp_add=${shpAdd}&shp_cont=${shpCont}&shp_mail=${shpMail}&storeid=${storeId}&booking_type=${bookingType}&insur_value=${insurValue}&acno=${acno}`,
    `http://benefitx.blue-ex.com/api/customerportal/booking_new.php?prod_value=${prodValue}&salediscount=${saleDiscount}&con_name=${conName}&con_add=${conAdd}&con_cont=${conCont}&con_mail=${conMail}&cbc=${cbc}&orig_city=${origCity}&dest_country=PK&dest_city=KHI&insur=N&coment&prod_detail=pd&service_code=BE&ptype=D&pcs=2&wgt=1&fragile=N&cust_ref=20000000038&shp_name=Igor Baranov&shp_add=add&shp_cont=375292520508&shp_mail=ihar@ewave.com&storeid&booking_type=SB&insur_value=&acno=KHI-00114`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => (data = result.record[0]))
    .catch((error) => console.log("error", error));

  return data;
};

export default createShipment;
