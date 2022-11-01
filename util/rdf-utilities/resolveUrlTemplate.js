import currentUser from '../../user/currentUser.js'

export default function (uriTemplate: string) {
  return uriTemplate.replace('{uid}', currentUser().uid)
}