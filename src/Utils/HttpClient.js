import { reactLocalStorage } from "reactjs-localstorage";

export const BASE_URL = "http://43.205.232.125:8005/api/v1/";
export const IMG_URL = "https://skychat.easytodb.com/Bookswali/public/images/";
export const BRAND_IMG_URL = "https://skychat.easytodb.com/Bookswali/public/brand_image/";
export const BANNER_IMG_URL = "https://skychat.easytodb.com/Bookswali/public/banner_image/"
export const STATIC_IMG_URL = "https://skychat.easytodb.com/Bookswali/public/staticbanner_image/"
export const SIDE_IMG_URL = "https://skychat.easytodb.com/Bookswali/public/sidebanner_image/"
export const PROFILE_IMG_URL = "http://skychat.easytodb.com/Bookswali/public/profile_image/" 

export async function requestData(url, method, params = {}) {
  let token = "";
  let user = reactLocalStorage.getObject("adminData");
  if (user && user != null && Object.keys(user).length > 0) {
    token = user.token;
    console.log(token);
  }
  let apiUrl = BASE_URL + url;
  var myHeaders = new Headers();
  if (token != "") {
    myHeaders.append("Authorization", token);

  }
  myHeaders.append("userType", "Admin");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "http://43.205.232.125:8005/api/v1/");
  var raw = JSON.stringify(params);

  var requestOptions = {};
  if (method === "POST") {
    requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  } else if (method === "PUT") {
    requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  } else {
    requestOptions = {
      method: method,
      headers: myHeaders,
      // body: raw,
      redirect: "follow",
    };
  }

  return await fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.log("error", error));
}



export async function fileUplode(
  url,
  method,
  file,
  object_get = {},
  tokenCustom = null
) {
  // let token = "";
  let user = reactLocalStorage.getObject("adminData");
  // if (user && user != null && Object.keys(user).length > 0) {
  //   token = user.token;
  // }
  let bash_url = "https://skychat.easytodb.com/Bookswali/api/";
  let apiUrl = bash_url + url;
  // let data = new FormData();
  // data.append("image", file);
  // Object.keys(object_get).forEach(function (key) {
  //   let ddd = object_get[key];
  //   data.append(key, ddd);
  // });
  // if (token != "") {
  //   var toooo = token;
  // }
  //  console.log("tokenn",toooo);
  let headers = {
    // 'Accept': 'application/json',
    // "Content-Type": "multipart/form-data",
    // "Access-Control-Allow-Origin": "http://128.199.25.86:5008",
    // authorization: toooo,
    userType: "Admin",
    // 'Authorization': 'Bearer ' + login_status,
  };

  // Display the key/value pairs
  // for (var pair of file.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }

  return await fetch(apiUrl, {
    method: method,
    body: file,
    redirect: "follow",
    headers: headers,
  })
    .then((response) => {
      // console.log("responseee", response, headers);
      return response.json();
    })
    .then(
      (result) => {
        // console.log(result);
        return result;
      },
      (error) => {
        return error;
      }
    );
}

// async function fileUplode(
//   url,
//   method,
//   file,
//   option,
//   object_get = {},
//   tokenCustom = null
// ) {
//   let token = "";
//   let user = reactLocalStorage.getObject("userData");
//   if (user && user != null && Object.keys(user).length > 0) {
//     token = user.token;
//   }
//   let bash_url = "http://128.199.25.86:5008/v1/user/";
//   let apiUrl = bash_url + url;
//   const data = new FormData();
//   if (option == "Single") {
//     data.append("image", file);
//   } else {
//     let i = 0;
//     Object.keys(file).forEach(function (key) {
//       data.append("image", file[i]);
//       i++;
//     });
//   }

//   Object.keys(object_get).forEach(function (key) {
//     let ddd = object_get[key];
//     if (key == "dynamic_fields") {
//       ddd = JSON.stringify(object_get[key]);
//     }
//     console.log(key, ddd);
//     data.append(key, ddd);
//   });

//   // for (var pair of data.entries()) {
//   //     console.log(pair[0]+ ', ' + pair[1]);
//   // }

//   // console.log('data',data);
//   if (token != "") {
//    var toooo=token;
//   }
//   let headers = {
//     // 'Accept': 'application/json',
//     // 'Content-Type': 'multipart/form-data',
//     "Access-Control-Allow-Origin": "http://128.199.25.86:5008",
//     "userType":"Admin",
//     "authorization":toooo

//     // 'Authorization': 'Bearer ' + login_status,
//   };
//   console.log("data", data);

//   return await fetch(apiUrl, {
//     method: method,
//     headers: headers,
//     body: data,
//   })
//     .then((response) => response.json())
//     .then(
//       (result) => {
//         console.log(result);
//         return result;
//       },
//       (error) => {
//         return error;
//       }
//     );
// }

// export default {
//   requestData,
//   fileUplode,
//   BASE_URL,
//   IMG_URL
//   // get,
//   // post,
//   // put,
//   // // delete,
//   // upload,
// };
