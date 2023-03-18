import _ from "lodash"

export default function paginate(itemArr, pageNumber, pageSize) {
 const startIndex = (pageNumber - 1) * pageSize;
 return _(itemArr).slice(startIndex).take(pageSize).value();
}
