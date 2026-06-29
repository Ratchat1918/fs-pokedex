import { TextEncoder, TextDecoder } from 'util'
import global from 'global'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
