const checklimitOffset = (obj) => {
  if ('offset' in obj || 'limit' in obj) {
    return 'offset' in obj && 'limit' in obj;
  }
  return true;
};

const filterCountries = (obj, datas) => {
  // result
  // {isFilterSuccess:true,result:[]}
  // {isFilterSuccess:flase,message:''}

  const optionToFilter = ['nameinclude', 'capital', 'region', 'subregion', 'limit', 'offset', 'field'];

  // Check key in option
  for (let key in obj) {
    if (!optionToFilter.includes(key)) {
      return { isFilterSuccess: false, message: 'ค่า Filter ที่ส่งมาไม่มีอยู่ใน Option' };
    }
  }

  // Check Have limit offset
  if (!checklimitOffset(obj)) {
    return { isFilterSuccess: false, message: 'ค่า Filter ที่ส่งมา ต้องมีค่า limit และ offset ที่มาพร้อมกัน' };
  }

  if (obj.limit < 1 || obj.offset < 1) {
    return { isFilterSuccess: false, message: 'limit or offset is invalid' };
  }

  // Pass All condition
  const {
    nameinclude = '',
    capital: capitalFilter,
    region: regionFilter,
    subregion: subregionFilter,
    limit,
    offset,
    field,
  } = obj;

  // filter
  const filter = datas.filter((data) => {
    const {
      name: { common },
      capital,
      region,
      subregion,
    } = data;
    // console.log(typeof capital);

    return (
      common.toLowerCase().includes(nameinclude.toLowerCase()) &&
      (capitalFilter && capital ? capital.includes(capitalFilter) : !capital ? false : true) &&
      (regionFilter && region ? region === regionFilter : true) &&
      (subregionFilter && subregion ? subregion === subregionFilter : true)
    );
  });

  // slice
  const resultSlice = offset > 0 && limit > 0 ? filter.slice(+offset, +offset + +limit) : filter;

  // field
  if (field) {
    const arrayField = field.split(',');
    const resultField = resultSlice.map((item) => {
      const clone = { ...item };
      const result = {};
      for (let key in clone) {
        if (arrayField.includes(key)) {
          result[key] = clone[key];
        }
      }
      return result;
    });

    return { isFilterSuccess: true, result: resultField };
  }

  return { isFilterSuccess: true, result: resultSlice };
};

module.exports = { filterCountries };
