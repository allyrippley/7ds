const delay = 1000

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const links = [
  {
    id: 1,
    textValue: 'Home'
  },
  {
    id: 2,
    textValue: 'Blog'
  },
  {
    id: 3,
    textValue: 'About'
  }
]

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (link) => {
  return link.textValue.toLowerCase()
}

class LinkApi {
  static getAllLinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], links))
      }, delay)
    })
  }

  static saveLink(link) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minLinkNameLength = 3
        if (link.textValue.length < minLinkNameLength) {
          reject(`First Name must be at least ${minLinkNameLength} characters.`)
        }

        if (link.id) {
          const existingLinkIndex = links.findIndex(a => a.id == link.id)
          links.splice(existingLinkIndex, 1, link)
        } else {
          //Just simulating creation here.
          //The server would generate ids for new links in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          link.id = generateId(link)
          links.push(link)
        }

        resolve(Object.assign({}, link))
      }, delay)
    })
  }

  static deleteLink(linkId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfLinkToDelete = links.findIndex(link => {
          link.linkId == linkId
        })
        links.splice(indexOfLinkToDelete, 1)
        resolve()
      }, delay)
    })
  }
}

export default LinkApi
