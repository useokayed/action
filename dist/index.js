import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/conventions.js"(exports2) {
    "use strict";
    function find(list2, predicate, ac) {
      if (ac === void 0) {
        ac = Array.prototype;
      }
      if (list2 && typeof ac.find === "function") {
        return ac.find.call(list2, predicate);
      }
      for (var i = 0; i < list2.length; i++) {
        if (Object.prototype.hasOwnProperty.call(list2, i)) {
          var item = list2[i];
          if (predicate.call(void 0, item, i, list2)) {
            return item;
          }
        }
      }
    }
    function freeze(object, oc) {
      if (oc === void 0) {
        oc = Object;
      }
      return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
    }
    function assign(target, source) {
      if (target === null || typeof target !== "object") {
        throw new TypeError("target is not an object");
      }
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
      return target;
    }
    var MIME_TYPE = freeze({
      /**
       * `text/html`, the only mime type that triggers treating an XML document as HTML.
       *
       * @see DOMParser.SupportedType.isHTML
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
       */
      HTML: "text/html",
      /**
       * Helper method to check a mime type if it indicates an HTML document
       *
       * @param {string} [value]
       * @returns {boolean}
       *
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
      isHTML: function(value) {
        return value === MIME_TYPE.HTML;
      },
      /**
       * `application/xml`, the standard mime type for XML documents.
       *
       * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
       * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_APPLICATION: "application/xml",
      /**
       * `text/html`, an alias for `application/xml`.
       *
       * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
       * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_TEXT: "text/xml",
      /**
       * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
       * but is parsed as an XML document.
       *
       * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
       * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
       */
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      /**
       * `image/svg+xml`,
       *
       * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
       * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
       * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
       */
      XML_SVG_IMAGE: "image/svg+xml"
    });
    var NAMESPACE = freeze({
      /**
       * The XHTML namespace.
       *
       * @see http://www.w3.org/1999/xhtml
       */
      HTML: "http://www.w3.org/1999/xhtml",
      /**
       * Checks if `uri` equals `NAMESPACE.HTML`.
       *
       * @param {string} [uri]
       *
       * @see NAMESPACE.HTML
       */
      isHTML: function(uri) {
        return uri === NAMESPACE.HTML;
      },
      /**
       * The SVG namespace.
       *
       * @see http://www.w3.org/2000/svg
       */
      SVG: "http://www.w3.org/2000/svg",
      /**
       * The `xml:` namespace.
       *
       * @see http://www.w3.org/XML/1998/namespace
       */
      XML: "http://www.w3.org/XML/1998/namespace",
      /**
       * The `xmlns:` namespace
       *
       * @see https://www.w3.org/2000/xmlns/
       */
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    var nameStartChar2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar2 = new RegExp("[\\-\\.0-9" + nameStartChar2.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar2.source + nameChar2.source + "*(?::" + nameStartChar2.source + nameChar2.source + "*)?$");
    exports2.assign = assign;
    exports2.find = find;
    exports2.freeze = freeze;
    exports2.MIME_TYPE = MIME_TYPE;
    exports2.NAMESPACE = NAMESPACE;
    exports2.nameStartChar = nameStartChar2;
    exports2.nameChar = nameChar2;
    exports2.tagNamePattern = tagNamePattern;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/dom.js"(exports2) {
    "use strict";
    var conventions = require_conventions();
    var find = conventions.find;
    var NAMESPACE = conventions.NAMESPACE;
    var tagNamePattern = conventions.tagNamePattern;
    function notEmptyString(input) {
      return input !== "";
    }
    function splitOnASCIIWhitespace(input) {
      return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
    }
    function orderedSetReducer(current, element2) {
      if (!current.hasOwnProperty(element2)) {
        current[element2] = true;
      }
      return current;
    }
    function toOrderedSet(input) {
      if (!input) return [];
      var list2 = splitOnASCIIWhitespace(input);
      return Object.keys(list2.reduce(orderedSetReducer, {}));
    }
    function arrayIncludes(list2) {
      return function(element2) {
        return list2 && list2.indexOf(element2) !== -1;
      };
    }
    function copy(src, dest) {
      for (var p in src) {
        if (Object.prototype.hasOwnProperty.call(src, p)) {
          dest[p] = src[p];
        }
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function() {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        copy(pt, t2);
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknown Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message) this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      /**
       * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
       * @standard level1
       */
      length: 0,
      /**
       * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
       * @standard level1
       * @param index  unsigned long
       *   Index into the collection.
       * @return Node
       * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
       */
      item: function(index) {
        return index >= 0 && index < this.length ? this[index] : null;
      },
      toString: function(isHTML, nodeFilter, options) {
        var requireWellFormed = !!options && !!options.requireWellFormed;
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter, null, requireWellFormed);
        }
        return buf.join("");
      },
      /**
       * @private
       * @param {function (Node):boolean} predicate
       * @returns {Node[]}
       */
      filter: function(predicate) {
        return Array.prototype.filter.call(this, predicate);
      },
      /**
       * @private
       * @param {Node} item
       * @returns {number}
       */
      indexOf: function(item) {
        return Array.prototype.indexOf.call(this, item);
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list2) {
      var inc = list2._node._inc || list2._node.ownerDocument._inc;
      if (list2._inc !== inc) {
        var ls = list2._refresh(list2._node);
        __set__(list2, "length", ls.length);
        if (!list2.$$length || ls.length < list2.$$length) {
          for (var i = ls.length; i in list2; i++) {
            if (Object.prototype.hasOwnProperty.call(list2, i)) {
              delete list2[i];
            }
          }
        }
        copy(ls, list2);
        list2._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i] || null;
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
      this._nameIndex = /* @__PURE__ */ Object.create(null);
    }
    function _findNodeIndex(list2, node) {
      var i = list2.length;
      while (i--) {
        if (list2[i] === node) {
          return i;
        }
      }
    }
    function _nnmIndexAdd(list2, attr) {
      list2._nameIndex[attr.nodeName] = attr;
    }
    function _nnmIndexRemove(list2, attr) {
      if (list2._nameIndex[attr.nodeName] === attr) {
        delete list2._nameIndex[attr.nodeName];
      }
    }
    function _addNamedNode(el, list2, newAttr, oldAttr) {
      if (oldAttr) {
        list2[_findNodeIndex(list2, oldAttr)] = newAttr;
        _nnmIndexRemove(list2, oldAttr);
      } else {
        list2[list2.length++] = newAttr;
      }
      _nnmIndexAdd(list2, newAttr);
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list2, attr) {
      var i = _findNodeIndex(list2, attr);
      if (i >= 0) {
        var lastIndex = list2.length - 1;
        while (i < lastIndex) {
          list2[i] = list2[++i];
        }
        list2.length = lastIndex;
        _nnmIndexRemove(list2, attr);
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function(key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this._nameIndex[attr.nodeName];
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
      //for level2
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation() {
    }
    DOMImplementation.prototype = {
      /**
       * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
       * The different implementations fairly diverged in what kind of features were reported.
       * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
       *
       * @deprecated It is deprecated and modern browsers return true in all cases.
       *
       * @param {string} feature
       * @param {string} [version]
       * @returns {boolean} always true
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
       * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
       */
      hasFeature: function(feature, version2) {
        return true;
      },
      /**
       * Creates an XML Document object of the specified type with its document element.
       *
       * __It behaves slightly different from the description in the living standard__:
       * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
       * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string|null} namespaceURI
       * @param {string} qualifiedName
       * @param {DocumentType=null} doctype
       * @returns {Document}
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      /**
       * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
       *
       * __This implementation differs from the specification:__
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * Note: `internalSubset` can only be introduced via a direct property write to `node.internalSubset` after creation.
       * Creation-time validation of `publicId`, `systemId` is not enforced.
       * The serializer-level check covers all mutation vectors, including direct property writes.
       * `internalSubset` is only serialized as `[ ... ]` when both `publicId` and `systemId` are
       * absent (empty or `'.'`) — if either external identifier is present, `internalSubset` is
       * silently omitted from the serialized output.
       *
       * @param {string} qualifiedName
       * @param {string} [publicId]
       * The external subset public identifier. Stored verbatim including surrounding quotes.
       * When serialized with `requireWellFormed: true` (via the 4th-parameter options object),
       * throws `DOMException` with code `INVALID_STATE_ERR` if the value is non-empty and does
       * not match the XML `PubidLiteral` production (W3C DOM Parsing §3.2.1.3; XML 1.0 [12]).
       * @param {string} [systemId]
       * The external subset system identifier. Stored verbatim including surrounding quotes.
       * When serialized with `requireWellFormed: true`, throws `DOMException` with code
       * `INVALID_STATE_ERR` if the value is non-empty and does not match the XML `SystemLiteral`
       * production (W3C DOM Parsing §3.2.1.3; XML 1.0 [11]).
       * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
       * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        return node;
      }
    };
    function Node() {
    }
    Node.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      // Modified in DOM Level 2:
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      // Modified in DOM Level 2:
      /**
       * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
       * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
       *
       * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
       * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
       * nodes.
       *
       * This method iteratively traverses all child nodes to normalize all descendant nodes within
       * the subtree.
       *
       * @throws {DOMException}
       * May throw a DOMException if operations within removeChild or appendData (which are
       * potentially invoked in this method) do not meet their specific constraints.
       * @see {@link Node.removeChild}
       * @see {@link CharacterData.appendData}
       * @see ../docs/walk-dom.md.
       */
      normalize: function() {
        walkDOM(this, null, {
          enter: function(node) {
            var child = node.firstChild;
            while (child) {
              var next = child.nextSibling;
              if (next !== null && next.nodeType === TEXT_NODE && child.nodeType === TEXT_NODE) {
                var tail = [];
                var sibling = next;
                while (sibling !== null && sibling.nodeType === TEXT_NODE) {
                  tail.push(sibling.data);
                  sibling = sibling.nextSibling;
                }
                var removed = child.nextSibling;
                while (removed !== sibling) {
                  var following = removed.nextSibling;
                  removed.parentNode = null;
                  removed.previousSibling = null;
                  removed.nextSibling = null;
                  removed = following;
                }
                child.nextSibling = sibling;
                if (sibling !== null) {
                  sibling.previousSibling = child;
                } else {
                  node.lastChild = child;
                }
                child.appendData(tail.join(""));
                _onUpdateChild(node.ownerDocument, node);
                child = sibling;
              } else {
                child = next;
              }
            }
            return true;
          }
        });
      },
      // Introduced in DOM Level 2:
      isSupported: function(feature, version2) {
        return this.ownerDocument.implementation.hasFeature(feature, version2);
      },
      // Introduced in DOM Level 2:
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      /**
       * Look up the prefix associated to the given namespace URI, starting from this node.
       * **The default namespace declarations are ignored by this method.**
       * See Namespace Prefix Lookup for details on the algorithm used by this method.
       *
       * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
       *
       * @param {string | null} namespaceURI
       * @returns {string | null}
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
       * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
       * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
       * @see https://github.com/xmldom/xmldom/issues/322
       */
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (Object.prototype.hasOwnProperty.call(map, prefix)) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c2) {
      return c2 == "<" && "&lt;" || c2 == ">" && "&gt;" || c2 == "&" && "&amp;" || c2 == '"' && "&quot;" || "&#" + c2.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    function _visitNode(node, callback) {
      return walkDOM(node, null, { enter: function(n) {
        return callback(n) ? walkDOM.STOP : true;
      } }) === walkDOM.STOP;
    }
    function walkDOM(node, context, callbacks) {
      var stack = [{ node, context, phase: walkDOM.ENTER }];
      while (stack.length > 0) {
        var frame = stack.pop();
        if (frame.phase === walkDOM.ENTER) {
          var childContext = callbacks.enter(frame.node, frame.context);
          if (childContext === walkDOM.STOP) {
            return walkDOM.STOP;
          }
          stack.push({ node: frame.node, context: childContext, phase: walkDOM.EXIT });
          if (childContext === null || childContext === void 0) {
            continue;
          }
          var child = frame.node.lastChild;
          while (child) {
            stack.push({ node: child, context: childContext, phase: walkDOM.ENTER });
            child = child.previousSibling;
          }
        } else {
          if (callbacks.exit) {
            callbacks.exit(frame.node, frame.context);
          }
        }
      }
    }
    walkDOM.STOP = Symbol("walkDOM.STOP");
    walkDOM.ENTER = 0;
    walkDOM.EXIT = 1;
    function Document() {
      this.ownerDocument = this;
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
          delete cs[cs.length];
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      child.parentNode = null;
      child.previousSibling = null;
      child.nextSibling = null;
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function hasValidParentNodeType(node) {
      return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
    }
    function hasInsertableNodeType(node) {
      return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
    }
    function isDocTypeNode(node) {
      return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
    }
    function isElementNode(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }
    function isTextNode(node) {
      return node && node.nodeType === Node.TEXT_NODE;
    }
    function isElementInsertionPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function isElementReplacementPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      function hasElementChildThatIsNotChild(node) {
        return isElementNode(node) && node !== child;
      }
      if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function assertPreInsertionValidity1to5(parent, node, child) {
      if (!hasValidParentNodeType(parent)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
      }
      if (child && child.parentNode !== parent) {
        throw new DOMException(NOT_FOUND_ERR, "child not in parent");
      }
      if (
        // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
        !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
        // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
        // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
        // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
        isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
      ) {
        throw new DOMException(
          HIERARCHY_REQUEST_ERR,
          "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
        );
      }
    }
    function assertPreInsertionValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        if (find(parentChildNodes, isDocTypeNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
        if (!child && parentElementChild) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
        }
      }
    }
    function assertPreReplacementValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        let hasDoctypeChildThatIsNotChild2 = function(node2) {
          return isDocTypeNode(node2) && node2 !== child;
        };
        var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
        if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
      }
    }
    function _insertBefore(parent, node, child, _inDocumentAssertion) {
      assertPreInsertionValidity1to5(parent, node, child);
      if (parent.nodeType === Node.DOCUMENT_NODE) {
        (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
      }
      var cp = node.parentNode;
      if (cp) {
        cp.removeChild(node);
      }
      if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = node.firstChild;
        if (newFirst == null) {
          return node;
        }
        var newLast = node.lastChild;
      } else {
        newFirst = newLast = node;
      }
      var pre = child ? child.previousSibling : parent.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = child;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parent.firstChild = newFirst;
      }
      if (child == null) {
        parent.lastChild = newLast;
      } else {
        child.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parent;
        var targetDoc = parent.ownerDocument || parent;
        _updateOwnerDocument(newFirst, targetDoc);
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parent.ownerDocument || parent, parent);
      if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
        node.firstChild = node.lastChild = null;
      }
      return node;
    }
    function _updateOwnerDocument(node, newOwnerDocument) {
      if (node.ownerDocument === newOwnerDocument) {
        return;
      }
      node.ownerDocument = newOwnerDocument;
      if (node.nodeType === ELEMENT_NODE && node.attributes) {
        for (var i = 0; i < node.attributes.length; i++) {
          var attr = node.attributes.item(i);
          if (attr) {
            attr.ownerDocument = newOwnerDocument;
          }
        }
      }
      var child = node.firstChild;
      while (child) {
        _updateOwnerDocument(child, newOwnerDocument);
        child = child.nextSibling;
      }
    }
    function _appendSingleChild(parentNode, newChild) {
      if (newChild.parentNode) {
        newChild.parentNode.removeChild(newChild);
      }
      newChild.parentNode = parentNode;
      newChild.previousSibling = parentNode.lastChild;
      newChild.nextSibling = null;
      if (newChild.previousSibling) {
        newChild.previousSibling.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      var targetDoc = parentNode.ownerDocument || parentNode;
      _updateOwnerDocument(newChild, targetDoc);
      return newChild;
    }
    Document.prototype = {
      //implementation : null,
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      /**
       * The DocumentType node of the document.
       *
       * @readonly
       * @type DocumentType
       */
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        _insertBefore(this, newChild, refChild);
        _updateOwnerDocument(newChild, this);
        if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        _updateOwnerDocument(newChild, this);
        if (oldChild) {
          this.removeChild(oldChild);
        }
        if (isElementNode(newChild)) {
          this.documentElement = newChild;
        }
      },
      // Introduced in DOM Level 2:
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      // Introduced in DOM Level 2:
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      /**
       * The `getElementsByClassName` method of `Document` interface returns an array-like object
       * of all child elements which have **all** of the given class name(s).
       *
       * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
       *
       *
       * Warning: This is a live LiveNodeList.
       * Changes in the DOM will reflect in the array as the changes occur.
       * If an element selected by this array no longer qualifies for the selector,
       * it will automatically be removed. Be aware of this for iteration purposes.
       *
       * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
       * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
       */
      getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
          var ls = [];
          if (classNamesSet.length > 0) {
            _visitNode(base.documentElement, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE) {
                var nodeClassNames = node.getAttribute("class");
                if (nodeClassNames) {
                  var matches = classNames === nodeClassNames;
                  if (!matches) {
                    var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                    matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                  }
                  if (matches) {
                    ls.push(node);
                  }
                }
              }
            });
          }
          return ls;
        });
      },
      //document factory method:
      createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function(data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      /**
       * Returns a new CDATASection node whose data is `data`.
       *
       * __This implementation differs from the specification:__
       * - calling this method on an HTML document does not throw `NotSupportedError`.
       *
       * @param {string} data
       * @returns {CDATASection}
       * @throws DOMException with code `INVALID_CHARACTER_ERR` if `data` contains `"]]>"`.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection
       * @see https://dom.spec.whatwg.org/#dom-document-createcdatasection
       */
      createCDATASection: function(data) {
        if (data.indexOf("]]>") !== -1) {
          throw new DOMException(INVALID_CHARACTER_ERR, 'data contains "]]>"');
        }
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      /**
       * Returns a ProcessingInstruction node whose target is target and data is data.
       *
       * __This implementation differs from the specification:__
       * - it does not do any input validation on the arguments and doesn't throw "InvalidCharacterError".
       *
       * Note: When the resulting document is serialized with `requireWellFormed: true`, the
       * serializer throws with code `INVALID_STATE_ERR` if `.target` is not a valid XML `NCName`
       * (a `Name` with no colon) or is an ASCII case-insensitive match for `"xml"`, or if `.data`
       * contains `?>` (W3C DOM Parsing §3.2.1.7). Without that option the target and data are
       * emitted verbatim.
       *
       * @param {string} target
       * @param {string} data
       * @returns {ProcessingInstruction}
       * @see https://developer.mozilla.org/docs/Web/API/Document/createProcessingInstruction
       * @see https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction
       * @see https://www.w3.org/TR/DOM-Parsing/#dfn-concept-serialize-xml §3.2.1.7
       */
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.nodeName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      /**
       * Creates an EntityReference object, serialized as `&name;`.
       *
       * The `name` is validated against the XML `Name` production at creation time; an invalid name
       * throws a `DOMException` with code `INVALID_CHARACTER_ERR`. When the resulting node is
       * serialized with `requireWellFormed: true`, the serializer re-validates `nodeName` and throws
       * a `DOMException` with code `INVALID_STATE_ERR` if a later `nodeName` mutation made it invalid;
       * without that option the name is emitted verbatim.
       *
       * Note: xmldom does not expand entities — the parser resolves entity references inline and never
       * constructs `EntityReference` nodes, so this method is the only producer.
       *
       * @param {string} name The name of the entity to reference.
       * @returns {EntityReference}
       * @throws {DOMException} With code `INVALID_CHARACTER_ERR` when `name` is not a valid XML `Name`.
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE
       */
      createEntityReference: function(name) {
        if (!tagNamePattern.test(name)) {
          throw new DOMException(INVALID_CHARACTER_ERR, 'not a valid xml name "' + name + '"');
        }
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      // Introduced in DOM Level 2:
      createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      // Introduced in DOM Level 2:
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node);
    function Element() {
      this._nsMap = {};
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      //four real opeartion method
      appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      //get real attribute name,and remove it by removeAttributeNode
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
      },
      appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node);
    function Text() {
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter, options) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter, options);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter, options) {
      var requireWellFormed = !!options && !!options.requireWellFormed;
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
            //{namespace:uri,prefix:''}
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces, requireWellFormed);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!uri) {
        return false;
      }
      if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix === prefix) {
          return ns.namespace !== uri;
        }
      }
      return true;
    }
    function addSerializedAttribute(buf, qualifiedName, value, requireWellFormed) {
      if (requireWellFormed && !tagNamePattern.test(qualifiedName)) {
        throw new DOMException(INVALID_STATE_ERR, 'The attribute name "' + qualifiedName + '" is not a valid XML QName');
      }
      buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces, requireWellFormed) {
      if (!visibleNamespaces) {
        visibleNamespaces = [];
      }
      walkDOM(node, { ns: visibleNamespaces, isHTML }, {
        enter: function(n, ctx) {
          var ns = ctx.ns;
          var html = ctx.isHTML;
          if (nodeFilter) {
            n = nodeFilter(n);
            if (n) {
              if (typeof n == "string") {
                buf.push(n);
                return null;
              }
            } else {
              return null;
            }
          }
          switch (n.nodeType) {
            case ELEMENT_NODE:
              var attrs = n.attributes;
              var len = attrs.length;
              var nodeName = n.tagName;
              html = NAMESPACE.isHTML(n.namespaceURI) || html;
              var prefixedNodeName = nodeName;
              if (!html && !n.prefix && n.namespaceURI) {
                var defaultNS;
                for (var ai = 0; ai < attrs.length; ai++) {
                  if (attrs.item(ai).name === "xmlns") {
                    defaultNS = attrs.item(ai).value;
                    break;
                  }
                }
                if (!defaultNS) {
                  for (var nsi = ns.length - 1; nsi >= 0; nsi--) {
                    var nsEntry = ns[nsi];
                    if (nsEntry.prefix === "" && nsEntry.namespace === n.namespaceURI) {
                      defaultNS = nsEntry.namespace;
                      break;
                    }
                  }
                }
                if (defaultNS !== n.namespaceURI) {
                  for (var nsi = ns.length - 1; nsi >= 0; nsi--) {
                    var nsEntry = ns[nsi];
                    if (nsEntry.namespace === n.namespaceURI) {
                      if (nsEntry.prefix) {
                        prefixedNodeName = nsEntry.prefix + ":" + nodeName;
                      }
                      break;
                    }
                  }
                }
              }
              if (requireWellFormed && !tagNamePattern.test(prefixedNodeName)) {
                throw new DOMException(INVALID_STATE_ERR, 'The element name "' + prefixedNodeName + '" is not a valid XML QName');
              }
              buf.push("<", prefixedNodeName);
              var childNs = ns.slice();
              for (var i = 0; i < len; i++) {
                var attr = attrs.item(i);
                if (attr.prefix == "xmlns") {
                  childNs.push({ prefix: attr.localName, namespace: attr.value });
                } else if (attr.nodeName == "xmlns") {
                  childNs.push({ prefix: "", namespace: attr.value });
                }
              }
              for (var i = 0; i < len; i++) {
                var attr = attrs.item(i);
                if (needNamespaceDefine(attr, html, childNs)) {
                  var attrPrefix = attr.prefix || "";
                  var uri = attr.namespaceURI;
                  addSerializedAttribute(buf, attrPrefix ? "xmlns:" + attrPrefix : "xmlns", uri, requireWellFormed);
                  childNs.push({ prefix: attrPrefix, namespace: uri });
                }
                var filteredAttr = nodeFilter ? nodeFilter(attr) : attr;
                if (filteredAttr) {
                  if (typeof filteredAttr === "string") {
                    buf.push(filteredAttr);
                  } else {
                    addSerializedAttribute(buf, filteredAttr.name, filteredAttr.value, requireWellFormed);
                  }
                }
              }
              if (nodeName === prefixedNodeName && needNamespaceDefine(n, html, childNs)) {
                var nodePrefix = n.prefix || "";
                var uri = n.namespaceURI;
                addSerializedAttribute(buf, nodePrefix ? "xmlns:" + nodePrefix : "xmlns", uri, requireWellFormed);
                childNs.push({ prefix: nodePrefix, namespace: uri });
              }
              var child = n.firstChild;
              if (child || html && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
                buf.push(">");
                if (html && /^script$/i.test(nodeName)) {
                  while (child) {
                    if (child.data) {
                      buf.push(child.data);
                    } else {
                      serializeToString(child, buf, html, nodeFilter, childNs.slice(), requireWellFormed);
                    }
                    child = child.nextSibling;
                  }
                  buf.push("</", nodeName, ">");
                  return null;
                }
                return { ns: childNs, isHTML: html, tag: prefixedNodeName };
              } else {
                buf.push("/>");
                return null;
              }
            case DOCUMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              return { ns: ns.slice(), isHTML: html, tag: null };
            case ATTRIBUTE_NODE:
              addSerializedAttribute(buf, n.name, n.value, requireWellFormed);
              return null;
            case TEXT_NODE:
              buf.push(n.data.replace(/[<&>]/g, _xmlEncoder));
              return null;
            case CDATA_SECTION_NODE:
              if (requireWellFormed && n.data.indexOf("]]>") !== -1) {
                throw new DOMException(INVALID_STATE_ERR, 'The CDATASection data contains "]]>"');
              }
              buf.push("<![CDATA[", n.data.replace(/]]>/g, "]]]]><![CDATA[>"), "]]>");
              return null;
            case COMMENT_NODE:
              if (requireWellFormed && n.data.indexOf("-->") !== -1) {
                throw new DOMException(INVALID_STATE_ERR, 'The comment node data contains "-->"');
              }
              buf.push("<!--", n.data, "-->");
              return null;
            case DOCUMENT_TYPE_NODE:
              if (requireWellFormed) {
                if (!tagNamePattern.test(n.name)) {
                  throw new DOMException(INVALID_STATE_ERR, 'The doctype name "' + n.name + '" is not a valid XML Name');
                }
                if (n.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(n.publicId)) {
                  throw new DOMException(INVALID_STATE_ERR, "DocumentType publicId is not a valid PubidLiteral");
                }
                if (n.systemId && !/^("[^"]*"|'[^']*')$/.test(n.systemId)) {
                  throw new DOMException(INVALID_STATE_ERR, "DocumentType systemId is not a valid SystemLiteral");
                }
                if (n.internalSubset && n.internalSubset.indexOf("]>") !== -1) {
                  throw new DOMException(INVALID_STATE_ERR, 'DocumentType internalSubset contains "]>"');
                }
              }
              var pubid = n.publicId;
              var sysid = n.systemId;
              buf.push("<!DOCTYPE ", n.name);
              if (pubid) {
                buf.push(" PUBLIC ", pubid);
                if (sysid && sysid != ".") {
                  buf.push(" ", sysid);
                }
                buf.push(">");
              } else if (sysid && sysid != ".") {
                buf.push(" SYSTEM ", sysid, ">");
              } else {
                var sub = n.internalSubset;
                if (sub) {
                  buf.push(" [", sub, "]");
                }
                buf.push(">");
              }
              return null;
            case PROCESSING_INSTRUCTION_NODE:
              if (requireWellFormed) {
                if (!tagNamePattern.test(n.target) || n.target.indexOf(":") !== -1 || n.target.toLowerCase() === "xml") {
                  throw new DOMException(
                    INVALID_STATE_ERR,
                    'The processing instruction target "' + n.target + '" is not a valid XML NCName or is reserved'
                  );
                }
                if (n.data.indexOf("?>") !== -1) {
                  throw new DOMException(INVALID_STATE_ERR, 'The ProcessingInstruction data contains "?>"');
                }
              }
              buf.push("<?", n.target, " ", n.data, "?>");
              return null;
            case ENTITY_REFERENCE_NODE:
              if (requireWellFormed && !tagNamePattern.test(n.nodeName)) {
                throw new DOMException(
                  INVALID_STATE_ERR,
                  'The entity reference name "' + n.nodeName + '" is not a valid XML Name'
                );
              }
              buf.push("&", n.nodeName, ";");
              return null;
            //case ENTITY_NODE:
            //case NOTATION_NODE:
            default:
              buf.push("??", n.nodeName);
              return null;
          }
        },
        exit: function(n, childCtx) {
          if (childCtx && childCtx.tag) {
            buf.push("</", childCtx.tag, ">");
          }
        }
      });
    }
    function importNode(doc, node, deep) {
      var destRoot;
      walkDOM(node, null, {
        enter: function(srcNode, destParent) {
          var destNode = srcNode.cloneNode(false);
          destNode.ownerDocument = doc;
          destNode.parentNode = null;
          if (destParent === null) {
            destRoot = destNode;
          } else {
            destParent.appendChild(destNode);
          }
          var shouldDeep = srcNode.nodeType === ATTRIBUTE_NODE || deep;
          return shouldDeep ? destNode : null;
        }
      });
      return destRoot;
    }
    function cloneNode(doc, node, deep) {
      var destRoot;
      walkDOM(node, null, {
        enter: function(srcNode, destParent) {
          var destNode = new srcNode.constructor();
          for (var n in srcNode) {
            if (Object.prototype.hasOwnProperty.call(srcNode, n)) {
              var v = srcNode[n];
              if (typeof v != "object") {
                if (v != destNode[n]) {
                  destNode[n] = v;
                }
              }
            }
          }
          if (srcNode.childNodes) {
            destNode.childNodes = new NodeList();
          }
          destNode.ownerDocument = doc;
          var shouldDeep = deep;
          switch (destNode.nodeType) {
            case ELEMENT_NODE:
              var attrs = srcNode.attributes;
              var attrs2 = destNode.attributes = new NamedNodeMap();
              var len = attrs.length;
              attrs2._ownerElement = destNode;
              for (var i = 0; i < len; i++) {
                destNode.setAttributeNode(cloneNode(doc, attrs.item(i), true));
              }
              break;
            case ATTRIBUTE_NODE:
              shouldDeep = true;
          }
          if (destParent !== null) {
            destParent.appendChild(destNode);
          } else {
            destRoot = destNode;
          }
          return shouldDeep ? destNode : null;
        }
      });
      return destRoot;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            if (this.nodeType === ELEMENT_NODE || this.nodeType === DOCUMENT_FRAGMENT_NODE) {
              var buf = [];
              walkDOM(this, null, {
                enter: function(n) {
                  if (n.nodeType === ELEMENT_NODE || n.nodeType === DOCUMENT_FRAGMENT_NODE) {
                    return true;
                  }
                  if (n.nodeType === PROCESSING_INSTRUCTION_NODE || n.nodeType === COMMENT_NODE) {
                    return null;
                  }
                  buf.push(n.nodeValue);
                }
              });
              return buf.join("");
            }
            return this.nodeValue;
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    exports2.DocumentType = DocumentType;
    exports2.DOMException = DOMException;
    exports2.DOMImplementation = DOMImplementation;
    exports2.Element = Element;
    exports2.Node = Node;
    exports2.NodeList = NodeList;
    exports2.walkDOM = walkDOM;
    exports2.XMLSerializer = XMLSerializer;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/entities.js"(exports2) {
    "use strict";
    var freeze = require_conventions().freeze;
    exports2.XML_ENTITIES = freeze({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    });
    exports2.HTML_ENTITIES = freeze({
      Aacute: "\xC1",
      aacute: "\xE1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xC2",
      acirc: "\xE2",
      acute: "\xB4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xC6",
      aelig: "\xE6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xC0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      AMP: "&",
      amp: "&",
      And: "\u2A53",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apacir: "\u2A6F",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xC5",
      aring: "\xE5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xC3",
      atilde: "\xE3",
      Auml: "\xC4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      Barwed: "\u2306",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      Because: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxDL: "\u2557",
      boxDl: "\u2556",
      boxdL: "\u2555",
      boxdl: "\u2510",
      boxDR: "\u2554",
      boxDr: "\u2553",
      boxdR: "\u2552",
      boxdr: "\u250C",
      boxH: "\u2550",
      boxh: "\u2500",
      boxHD: "\u2566",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxhd: "\u252C",
      boxHU: "\u2569",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxUL: "\u255D",
      boxUl: "\u255C",
      boxuL: "\u255B",
      boxul: "\u2518",
      boxUR: "\u255A",
      boxUr: "\u2559",
      boxuR: "\u2558",
      boxur: "\u2514",
      boxV: "\u2551",
      boxv: "\u2502",
      boxVH: "\u256C",
      boxVh: "\u256B",
      boxvH: "\u256A",
      boxvh: "\u253C",
      boxVL: "\u2563",
      boxVl: "\u2562",
      boxvL: "\u2561",
      boxvl: "\u2524",
      boxVR: "\u2560",
      boxVr: "\u255F",
      boxvR: "\u255E",
      boxvr: "\u251C",
      bprime: "\u2035",
      Breve: "\u02D8",
      breve: "\u02D8",
      brvbar: "\xA6",
      Bscr: "\u212C",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      Cap: "\u22D2",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xC7",
      ccedil: "\xE7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xB8",
      Cedilla: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      CenterDot: "\xB7",
      centerdot: "\xB7",
      Cfr: "\u212D",
      cfr: "\u{1D520}",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      cir: "\u25CB",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xAE",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      Colon: "\u2237",
      colon: ":",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      Conint: "\u222F",
      conint: "\u222E",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      copf: "\u{1D554}",
      coprod: "\u2210",
      Coproduct: "\u2210",
      COPY: "\xA9",
      copy: "\xA9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      Cross: "\u2A2F",
      cross: "\u2717",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      Cup: "\u22D3",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      CupCap: "\u224D",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      Dagger: "\u2021",
      dagger: "\u2020",
      daleth: "\u2138",
      Darr: "\u21A1",
      dArr: "\u21D3",
      darr: "\u2193",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      DD: "\u2145",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xB0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      Diamond: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xA8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      downarrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xC9",
      eacute: "\xE9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      ecir: "\u2256",
      Ecirc: "\xCA",
      ecirc: "\xEA",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      eDot: "\u2251",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xC8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp: "\u2003",
      emsp13: "\u2004",
      emsp14: "\u2005",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      Escr: "\u2130",
      escr: "\u212F",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xD0",
      eth: "\xF0",
      Euml: "\xCB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      ExponentialE: "\u2147",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      ForAll: "\u2200",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      Fscr: "\u2131",
      fscr: "\u{1D4BB}",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      gE: "\u2267",
      ge: "\u2265",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      Gg: "\u22D9",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gl: "\u2277",
      gla: "\u2AA5",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gnE: "\u2269",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      Gt: "\u226B",
      GT: ">",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      hArr: "\u21D4",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      Hfr: "\u210C",
      hfr: "\u{1D525}",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      Hopf: "\u210D",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xCD",
      iacute: "\xED",
      ic: "\u2063",
      Icirc: "\xCE",
      icirc: "\xEE",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      Ifr: "\u2111",
      ifr: "\u{1D526}",
      Igrave: "\xCC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Im: "\u2111",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      Int: "\u222C",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      Iscr: "\u2110",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xCF",
      iuml: "\xEF",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      Lang: "\u27EA",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xAB",
      Larr: "\u219E",
      lArr: "\u21D0",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      lAtail: "\u291B",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lBarr: "\u290E",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      lE: "\u2266",
      le: "\u2264",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      leftarrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      Ll: "\u22D8",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lnE: "\u2268",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftarrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      Lscr: "\u2112",
      lscr: "\u{1D4C1}",
      Lsh: "\u21B0",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      Lt: "\u226A",
      LT: "<",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      Mscr: "\u2133",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      nearhk: "\u2924",
      neArr: "\u21D7",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlarr: "\u219A",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nLeftarrow: "\u21CD",
      nleftarrow: "\u219A",
      nLeftrightarrow: "\u21CE",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      nopf: "\u{1D55F}",
      Not: "\u2AEC",
      not: "\xAC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nRightarrow: "\u21CF",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xD1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nvDash: "\u22AD",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwArr: "\u21D6",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xD3",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      Ocirc: "\xD4",
      ocirc: "\xF4",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xD2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      Or: "\u2A54",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xD8",
      oslash: "\xF8",
      osol: "\u2298",
      Otilde: "\xD5",
      otilde: "\xF5",
      Otimes: "\u2A37",
      otimes: "\u2297",
      otimesas: "\u2A36",
      Ouml: "\xD6",
      ouml: "\xF6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      Popf: "\u2119",
      popf: "\u{1D561}",
      pound: "\xA3",
      Pr: "\u2ABB",
      pr: "\u227A",
      prap: "\u2AB7",
      prcue: "\u227C",
      prE: "\u2AB3",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      Prime: "\u2033",
      prime: "\u2032",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportion: "\u2237",
      Proportional: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      Qopf: "\u211A",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      QUOT: '"',
      quot: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      Rang: "\u27EB",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      rAtail: "\u291C",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      RBarr: "\u2910",
      rBarr: "\u290F",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      Re: "\u211C",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      REG: "\xAE",
      reg: "\xAE",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      Rfr: "\u211C",
      rfr: "\u{1D52F}",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      rightarrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      Ropf: "\u211D",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      Rscr: "\u211B",
      rscr: "\u{1D4C7}",
      Rsh: "\u21B1",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      Sc: "\u2ABC",
      sc: "\u227B",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      sccue: "\u227D",
      scE: "\u2AB4",
      sce: "\u2AB0",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      searhk: "\u2925",
      seArr: "\u21D8",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xAD",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      Square: "\u25A1",
      square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      Sub: "\u22D0",
      sub: "\u2282",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      Subset: "\u22D0",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      sum: "\u2211",
      sung: "\u266A",
      Sup: "\u22D1",
      sup: "\u2283",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      Supset: "\u22D1",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swArr: "\u21D9",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      Therefore: "\u2234",
      therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      thinsp: "\u2009",
      ThinSpace: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xDE",
      thorn: "\xFE",
      Tilde: "\u223C",
      tilde: "\u02DC",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      TRADE: "\u2122",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xDA",
      uacute: "\xFA",
      Uarr: "\u219F",
      uArr: "\u21D1",
      uarr: "\u2191",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xDB",
      ucirc: "\xFB",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xD9",
      ugrave: "\xF9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xA8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      uparrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      updownarrow: "\u2195",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      upsi: "\u03C5",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xDC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      vArr: "\u21D5",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      Vbar: "\u2AEB",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      VDash: "\u22AB",
      Vdash: "\u22A9",
      vDash: "\u22A8",
      vdash: "\u22A2",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      Verbar: "\u2016",
      verbar: "|",
      Vert: "\u2016",
      vert: "|",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      Wedge: "\u22C0",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      Xi: "\u039E",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xDD",
      yacute: "\xFD",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xA5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      Yuml: "\u0178",
      yuml: "\xFF",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      Zfr: "\u2128",
      zfr: "\u{1D537}",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      Zopf: "\u2124",
      zopf: "\u{1D56B}",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    });
    exports2.entityMap = exports2.HTML_ENTITIES;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/sax.js"(exports2) {
    "use strict";
    var NAMESPACE = require_conventions().NAMESPACE;
    var tagNamePattern = require_conventions().tagNamePattern;
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype = new Error();
    ParseError.prototype.name = ParseError.name;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse(
          source,
          defaultNSMap,
          entityMap,
          domBuilder,
          this.errorHandler
        );
        domBuilder.endDocument();
      }
    };
    function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (Object.hasOwnProperty.call(entityMap, k)) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source))) {
          lineStart = m.index;
          lineEnd = lineStart + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!source.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source.substr(start));
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 3);
              var tagName = source.substring(tagStart + 2, end).replace(/^([\s\S]*?[^ \t\n\r])?[ \t\n\r]*$/, "$1");
              var config = parseStack.pop();
              if (end < 0) {
                tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              } else if (/[ \t\n\r]/.test(tagName) && tagNamePattern.test(tagName.split(/[ \t\n\r]/)[0])) {
                errorHandler.error('end tag name is followed by whitespace and trailing content: "' + tagName + '"');
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                      domBuilder.endPrefixMapping(prefix);
                    }
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack.push(config);
              }
              end++;
              break;
            // end elment
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
      function addAttribute(qname, value2, startIndex) {
        if (el.attributeNames.hasOwnProperty(qname)) {
          errorHandler.fatalError("Attribute " + qname + " redefined");
        }
        el.addValue(
          qname,
          // @see https://www.w3.org/TR/xml/#AVNormalize
          // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
          // - recursive replacement of (DTD) entity references
          // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
          value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
          startIndex
        );
      }
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c2 = source.charAt(p);
        if (s === S_TAG && c2 === "<") {
          throw new Error("unexpected < in tag name: " + source.slice(start, p));
        }
        switch (c2) {
          case "=":
            if (s === S_ATTR) {
              attrName = source.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p);
              }
              start = p + 1;
              p = source.indexOf(c2, start);
              if (p > 0) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c2 + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c2 + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                break;
              case S_ATTR_SPACE:
                el.closed = true;
                break;
              //case S_EQ:
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              //normal
              case S_ATTR_NOQUOT_VALUE:
              //Compatible state
              case S_ATTR:
                value = source.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value, start);
                } else {
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p;
          /*xml space '\x20' | #x9 | #xD | #xA; */
          case "\x80":
            c2 = " ";
          default:
            if (c2 <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                //case S_TAG:void();break;
                //case S_ATTR:void();break;
                //case S_ATTR_NOQUOT_VALUE:void();break;
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            currentNSMap = Object.create(currentNSMap);
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = NAMESPACE.XMLNS;
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = NAMESPACE.XML;
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
              domBuilder.endPrefixMapping(prefix);
            }
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
          text = text.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source, target) {
      for (var n in source) {
        if (Object.prototype.hasOwnProperty.call(source, n)) {
          target[n] = source[n];
        }
      }
    }
    function parseDCC(source, start, domBuilder, errorHandler) {
      var next = source.charAt(start + 2);
      switch (next) {
        case "-":
          if (source.charAt(start + 3) === "-") {
            var end = source.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source.substr(start + 3, 6) == "CDATA[") {
            var end = source.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = false;
            var sysid = false;
            if (len > 3) {
              if (/^public$/i.test(matchs[2][0])) {
                pubid = matchs[3][0];
                sysid = len > 4 && matchs[4][0];
              } else if (/^system$/i.test(matchs[2][0])) {
                sysid = matchs[3][0];
              }
            }
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(name, pubid, sysid);
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source, start, domBuilder) {
      var end = source.indexOf("?>", start);
      if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes() {
      this.attributeNames = {};
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
      //	,getIndex:function(uri, localName)){
      //		if(localName){
      //
      //		}else{
      //			var qName = uri
      //		}
      //	},
      //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
      //	getType:function(uri,localName){}
      //	getType:function(i){},
    };
    function split(source, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source);
      while (match = reg.exec(source)) {
        buf.push(match);
        if (match[1]) return buf;
      }
    }
    exports2.XMLReader = XMLReader;
    exports2.ParseError = ParseError;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports2) {
    "use strict";
    var conventions = require_conventions();
    var dom = require_dom();
    var entities = require_entities();
    var sax = require_sax();
    var DOMImplementation = dom.DOMImplementation;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = sax.ParseError;
    var XMLReader = sax.XMLReader;
    function normalizeLineEndings(input) {
      return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
    }
    function DOMParser(options) {
      this.options = options || { locator: {} };
    }
    DOMParser.prototype.parseFromString = function(source, mimeType) {
      var options = this.options;
      var sax2 = new XMLReader();
      var domBuilder = options.domBuilder || new DOMHandler();
      var errorHandler = options.errorHandler;
      var locator = options.locator;
      var defaultNSMap = options.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax2.domBuilder = options.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = NAMESPACE.HTML;
      }
      defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
      var normalize = options.normalizeLineEndings || normalizeLineEndings;
      if (source && typeof source === "string") {
        sax2.parse(
          normalize(source),
          defaultNSMap,
          entityMap
        );
      } else {
        sax2.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function(msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      //LexicalHandler
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
          this.doc.doctype = dt;
        }
      },
      /**
       * @see org.xml.sax.ErrorHandler
       * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       */
      warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function(error) {
        throw new ParseError(error, this.locator);
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
      DOMHandler.prototype[key] = function() {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    exports2.__DOMHandler = DOMHandler;
    exports2.normalizeLineEndings = normalizeLineEndings;
    exports2.DOMParser = DOMParser;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.15/node_modules/@xmldom/xmldom/lib/index.js"(exports2) {
    "use strict";
    var dom = require_dom();
    exports2.DOMImplementation = dom.DOMImplementation;
    exports2.XMLSerializer = dom.XMLSerializer;
    exports2.DOMParser = require_dom_parser().DOMParser;
  }
});

// ../../node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/parse.js"(exports2) {
    "use strict";
    var { DOMParser } = require_lib();
    exports2.parse = parse;
    var TEXT_NODE = 3;
    var CDATA_NODE = 4;
    var COMMENT_NODE = 8;
    function shouldIgnoreNode(node) {
      return node.nodeType === TEXT_NODE || node.nodeType === COMMENT_NODE || node.nodeType === CDATA_NODE;
    }
    function isEmptyNode(node) {
      if (!node.childNodes || node.childNodes.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    function invariant(test, message) {
      if (!test) {
        throw new Error(message);
      }
    }
    function parse(xml) {
      var doc = new DOMParser().parseFromString(xml);
      invariant(
        doc.documentElement.nodeName === "plist",
        "malformed document. First element should be <plist>"
      );
      var plist3 = parsePlistXML(doc.documentElement);
      if (plist3.length == 1) plist3 = plist3[0];
      return plist3;
    }
    function parsePlistXML(node) {
      var i, new_obj, key, val, new_arr, res, counter, type;
      if (!node)
        return null;
      if (node.nodeName === "plist") {
        new_arr = [];
        if (isEmptyNode(node)) {
          return new_arr;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (!shouldIgnoreNode(node.childNodes[i])) {
            new_arr.push(parsePlistXML(node.childNodes[i]));
          }
        }
        return new_arr;
      } else if (node.nodeName === "dict") {
        new_obj = {};
        key = null;
        counter = 0;
        if (isEmptyNode(node)) {
          return new_obj;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (shouldIgnoreNode(node.childNodes[i])) continue;
          if (counter % 2 === 0) {
            invariant(
              node.childNodes[i].nodeName === "key",
              "Missing key while parsing <dict/>."
            );
            key = parsePlistXML(node.childNodes[i]);
          } else {
            invariant(
              node.childNodes[i].nodeName !== "key",
              'Unexpected key "' + parsePlistXML(node.childNodes[i]) + '" while parsing <dict/>.'
            );
            new_obj[key] = parsePlistXML(node.childNodes[i]);
          }
          counter += 1;
        }
        if (counter % 2 === 1) {
          new_obj[key] = "";
        }
        return new_obj;
      } else if (node.nodeName === "array") {
        new_arr = [];
        if (isEmptyNode(node)) {
          return new_arr;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (!shouldIgnoreNode(node.childNodes[i])) {
            res = parsePlistXML(node.childNodes[i]);
            if (null != res) new_arr.push(res);
          }
        }
        return new_arr;
      } else if (node.nodeName === "#text") {
      } else if (node.nodeName === "key") {
        if (isEmptyNode(node)) {
          return "";
        }
        invariant(
          node.childNodes[0].nodeValue !== "__proto__",
          "__proto__ keys can lead to prototype pollution. More details on CVE-2022-22912"
        );
        return node.childNodes[0].nodeValue;
      } else if (node.nodeName === "string") {
        res = "";
        if (isEmptyNode(node)) {
          return res;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          var type = node.childNodes[i].nodeType;
          if (type === TEXT_NODE || type === CDATA_NODE) {
            res += node.childNodes[i].nodeValue;
          }
        }
        return res;
      } else if (node.nodeName === "integer") {
        invariant(
          !isEmptyNode(node),
          'Cannot parse "" as integer.'
        );
        return parseInt(node.childNodes[0].nodeValue, 10);
      } else if (node.nodeName === "real") {
        invariant(
          !isEmptyNode(node),
          'Cannot parse "" as real.'
        );
        res = "";
        for (i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].nodeType === TEXT_NODE) {
            res += node.childNodes[i].nodeValue;
          }
        }
        return parseFloat(res);
      } else if (node.nodeName === "data") {
        res = "";
        if (isEmptyNode(node)) {
          return Buffer.from(res, "base64");
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].nodeType === TEXT_NODE) {
            res += node.childNodes[i].nodeValue.replace(/\s+/g, "");
          }
        }
        return Buffer.from(res, "base64");
      } else if (node.nodeName === "date") {
        invariant(
          !isEmptyNode(node),
          'Cannot parse "" as Date.'
        );
        return new Date(node.childNodes[0].nodeValue);
      } else if (node.nodeName === "null") {
        return null;
      } else if (node.nodeName === "true") {
        return true;
      } else if (node.nodeName === "false") {
        return false;
      } else {
        throw new Error("Invalid PLIST tag " + node.nodeName);
      }
    }
  }
});

// ../../node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "../../node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js"(exports2) {
    "use strict";
    exports2.byteLength = byteLength;
    exports2.toByteArray = toByteArray;
    exports2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num2) {
      return lookup[num2 >> 18 & 63] + lookup[num2 >> 12 & 63] + lookup[num2 >> 6 & 63] + lookup[num2 & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/Utility.js
var require_Utility = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/Utility.js"(exports2, module) {
    "use strict";
    (function() {
      var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
      assign = function(target, ...sources) {
        var i, key, len, source;
        if (isFunction(Object.assign)) {
          Object.assign.apply(null, arguments);
        } else {
          for (i = 0, len = sources.length; i < len; i++) {
            source = sources[i];
            if (source != null) {
              for (key in source) {
                if (!hasProp.call(source, key)) continue;
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
      isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === "[object Function]";
      };
      isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === "function" || ref === "object");
      };
      isArray = function(val) {
        if (isFunction(Array.isArray)) {
          return Array.isArray(val);
        } else {
          return Object.prototype.toString.call(val) === "[object Array]";
        }
      };
      isEmpty = function(val) {
        var key;
        if (isArray(val)) {
          return !val.length;
        } else {
          for (key in val) {
            if (!hasProp.call(val, key)) continue;
            return false;
          }
          return true;
        }
      };
      isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
      };
      getValue = function(obj) {
        if (isFunction(obj.valueOf)) {
          return obj.valueOf();
        } else {
          return obj;
        }
      };
      module.exports.assign = assign;
      module.exports.isFunction = isFunction;
      module.exports.isObject = isObject;
      module.exports.isArray = isArray;
      module.exports.isEmpty = isEmpty;
      module.exports.isPlainObject = isPlainObject;
      module.exports.getValue = getValue;
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMImplementation.js
var require_XMLDOMImplementation = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMImplementation.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLDOMImplementation;
      module.exports = XMLDOMImplementation = class XMLDOMImplementation {
        // Tests if the DOM implementation implements a specific feature.
        // `feature` package name of the feature to test. In Level 1, the
        //           legal values are "HTML" and "XML" (case-insensitive).
        // `version` version number of the package name to test. 
        //           In Level 1, this is the string "1.0". If the version is 
        //           not specified, supporting any version of the feature will 
        //           cause the method to return true.
        hasFeature(feature, version2) {
          return true;
        }
        // Creates a new document type declaration.
        // `qualifiedName` qualified name of the document type to be created
        // `publicId` public identifier of the external subset
        // `systemId` system identifier of the external subset
        createDocumentType(qualifiedName, publicId, systemId) {
          throw new Error("This DOM method is not implemented.");
        }
        // Creates a new document.
        // `namespaceURI` namespace URI of the document element to create
        // `qualifiedName` the qualified name of the document to be created
        // `doctype` the type of document to be created or null
        createDocument(namespaceURI, qualifiedName, doctype) {
          throw new Error("This DOM method is not implemented.");
        }
        // Creates a new HTML document.
        // `title` document title
        createHTMLDocument(title) {
          throw new Error("This DOM method is not implemented.");
        }
        // Returns a specialized object which implements the specialized APIs 
        // of the specified feature and version.
        // `feature` name of the feature requested.
        // `version` version number of the feature to test
        getFeature(feature, version2) {
          throw new Error("This DOM method is not implemented.");
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
var require_XMLDOMErrorHandler = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLDOMErrorHandler;
      module.exports = XMLDOMErrorHandler = class XMLDOMErrorHandler {
        // Initializes a new instance of `XMLDOMErrorHandler`
        constructor() {
        }
        // Called on the error handler when an error occurs.
        // `error` the error message as a string
        handleError(error) {
          throw new Error(error);
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMStringList.js
var require_XMLDOMStringList = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMStringList.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLDOMStringList;
      module.exports = XMLDOMStringList = (function() {
        class XMLDOMStringList2 {
          // Initializes a new instance of `XMLDOMStringList`
          // This is just a wrapper around an ordinary
          // JS array.
          // `arr` the array of string values
          constructor(arr) {
            this.arr = arr || [];
          }
          // Returns the indexth item in the collection.
          // `index` index into the collection
          item(index) {
            return this.arr[index] || null;
          }
          // Test if a string is part of this DOMStringList.
          // `str` the string to look for
          contains(str5) {
            return this.arr.indexOf(str5) !== -1;
          }
        }
        ;
        Object.defineProperty(XMLDOMStringList2.prototype, "length", {
          get: function() {
            return this.arr.length;
          }
        });
        return XMLDOMStringList2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
var require_XMLDOMConfiguration = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
      XMLDOMErrorHandler = require_XMLDOMErrorHandler();
      XMLDOMStringList = require_XMLDOMStringList();
      module.exports = XMLDOMConfiguration = (function() {
        class XMLDOMConfiguration2 {
          constructor() {
            var clonedSelf;
            this.defaultParams = {
              "canonical-form": false,
              "cdata-sections": false,
              "comments": false,
              "datatype-normalization": false,
              "element-content-whitespace": true,
              "entities": true,
              "error-handler": new XMLDOMErrorHandler(),
              "infoset": true,
              "validate-if-schema": false,
              "namespaces": true,
              "namespace-declarations": true,
              "normalize-characters": false,
              "schema-location": "",
              "schema-type": "",
              "split-cdata-sections": true,
              "validate": false,
              "well-formed": true
            };
            this.params = clonedSelf = Object.create(this.defaultParams);
          }
          // Gets the value of a parameter.
          // `name` name of the parameter
          getParameter(name) {
            if (this.params.hasOwnProperty(name)) {
              return this.params[name];
            } else {
              return null;
            }
          }
          // Checks if setting a parameter to a specific value is supported.
          // `name` name of the parameter
          // `value` parameter value
          canSetParameter(name, value) {
            return true;
          }
          // Sets the value of a parameter.
          // `name` name of the parameter
          // `value` new value or null if the user wishes to unset the parameter
          setParameter(name, value) {
            if (value != null) {
              return this.params[name] = value;
            } else {
              return delete this.params[name];
            }
          }
        }
        ;
        Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
          get: function() {
            return new XMLDOMStringList(Object.keys(this.defaultParams));
          }
        });
        return XMLDOMConfiguration2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/NodeType.js
var require_NodeType = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/NodeType.js"(exports2, module) {
    "use strict";
    (function() {
      module.exports = {
        Element: 1,
        Attribute: 2,
        Text: 3,
        CData: 4,
        EntityReference: 5,
        EntityDeclaration: 6,
        ProcessingInstruction: 7,
        Comment: 8,
        Document: 9,
        DocType: 10,
        DocumentFragment: 11,
        NotationDeclaration: 12,
        // Numeric codes up to 200 are reserved to W3C for possible future use.
        // Following are types internal to this library:
        Declaration: 201,
        Raw: 202,
        AttributeDeclaration: 203,
        ElementDeclaration: 204,
        Dummy: 205
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLAttribute.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLAttribute, XMLNode;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module.exports = XMLAttribute = (function() {
        class XMLAttribute2 {
          // Initializes a new instance of `XMLAttribute`
          // `parent` the parent node
          // `name` attribute target
          // `value` attribute value
          constructor(parent, name, value) {
            this.parent = parent;
            if (this.parent) {
              this.options = this.parent.options;
              this.stringify = this.parent.stringify;
            }
            if (name == null) {
              throw new Error("Missing attribute name. " + this.debugInfo(name));
            }
            this.name = this.stringify.name(name);
            this.value = this.stringify.attValue(value);
            this.type = NodeType.Attribute;
            this.isId = false;
            this.schemaTypeInfo = null;
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
          }
          // Returns debug string for this node
          debugInfo(name) {
            name = name || this.name;
            if (name == null) {
              return "parent: <" + this.parent.name + ">";
            } else {
              return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
            }
          }
          isEqualNode(node) {
            if (node.namespaceURI !== this.namespaceURI) {
              return false;
            }
            if (node.prefix !== this.prefix) {
              return false;
            }
            if (node.localName !== this.localName) {
              return false;
            }
            if (node.value !== this.value) {
              return false;
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "specified", {
          get: function() {
            return true;
          }
        });
        return XMLAttribute2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
var require_XMLNamedNodeMap = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLNamedNodeMap;
      module.exports = XMLNamedNodeMap = (function() {
        class XMLNamedNodeMap2 {
          // Initializes a new instance of `XMLNamedNodeMap`
          // This is just a wrapper around an ordinary
          // JS object.
          // `nodes` the object containing nodes.
          constructor(nodes) {
            this.nodes = nodes;
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return this.nodes = null;
          }
          // DOM Level 1
          getNamedItem(name) {
            return this.nodes[name];
          }
          setNamedItem(node) {
            var oldNode;
            oldNode = this.nodes[node.nodeName];
            this.nodes[node.nodeName] = node;
            return oldNode || null;
          }
          removeNamedItem(name) {
            var oldNode;
            oldNode = this.nodes[name];
            delete this.nodes[name];
            return oldNode || null;
          }
          item(index) {
            return this.nodes[Object.keys(this.nodes)[index]] || null;
          }
          // DOM level 2 functions to be implemented later
          getNamedItemNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
          }
          setNamedItemNS(node) {
            throw new Error("This DOM method is not implemented.");
          }
          removeNamedItemNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
          }
        }
        ;
        Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
          get: function() {
            return Object.keys(this.nodes).length || 0;
          }
        });
        return XMLNamedNodeMap2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLElement.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, hasProp = {}.hasOwnProperty;
      ({ isObject, isFunction, getValue } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLAttribute = require_XMLAttribute();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module.exports = XMLElement = (function() {
        class XMLElement2 extends XMLNode {
          // Initializes a new instance of `XMLElement`
          // `parent` the parent node
          // `name` element name
          // `attributes` an object containing name/value pairs of attributes
          constructor(parent, name, attributes) {
            var child, j, len, ref;
            super(parent);
            if (name == null) {
              throw new Error("Missing element name. " + this.debugInfo());
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.Element;
            this.attribs = {};
            this.schemaTypeInfo = null;
            if (attributes != null) {
              this.attribute(attributes);
            }
            if (parent.type === NodeType.Document) {
              this.isRoot = true;
              this.documentObject = parent;
              parent.rootObject = this;
              if (parent.children) {
                ref = parent.children;
                for (j = 0, len = ref.length; j < len; j++) {
                  child = ref[j];
                  if (child.type === NodeType.DocType) {
                    child.name = this.name;
                    break;
                  }
                }
              }
            }
          }
          // Creates and returns a deep clone of `this`
          clone() {
            var att, attName, clonedSelf, ref;
            clonedSelf = Object.create(this);
            if (clonedSelf.isRoot) {
              clonedSelf.documentObject = null;
            }
            clonedSelf.attribs = {};
            ref = this.attribs;
            for (attName in ref) {
              if (!hasProp.call(ref, attName)) continue;
              att = ref[attName];
              clonedSelf.attribs[attName] = att.clone();
            }
            clonedSelf.children = [];
            this.children.forEach(function(child) {
              var clonedChild;
              clonedChild = child.clone();
              clonedChild.parent = clonedSelf;
              return clonedSelf.children.push(clonedChild);
            });
            return clonedSelf;
          }
          // Adds or modifies an attribute
          // `name` attribute name
          // `value` attribute value
          attribute(name, value) {
            var attName, attValue;
            if (name != null) {
              name = getValue(name);
            }
            if (isObject(name)) {
              for (attName in name) {
                if (!hasProp.call(name, attName)) continue;
                attValue = name[attName];
                this.attribute(attName, attValue);
              }
            } else {
              if (isFunction(value)) {
                value = value.apply();
              }
              if (this.options.keepNullAttributes && value == null) {
                this.attribs[name] = new XMLAttribute(this, name, "");
              } else if (value != null) {
                this.attribs[name] = new XMLAttribute(this, name, value);
              }
            }
            return this;
          }
          // Removes an attribute
          // `name` attribute name
          removeAttribute(name) {
            var attName, j, len;
            if (name == null) {
              throw new Error("Missing attribute name. " + this.debugInfo());
            }
            name = getValue(name);
            if (Array.isArray(name)) {
              for (j = 0, len = name.length; j < len; j++) {
                attName = name[j];
                delete this.attribs[attName];
              }
            } else {
              delete this.attribs[name];
            }
            return this;
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          // `options.allowEmpty` do not self close empty element tags
          toString(options) {
            return this.options.writer.element(this, this.options.writer.filterOptions(options));
          }
          // Aliases
          att(name, value) {
            return this.attribute(name, value);
          }
          a(name, value) {
            return this.attribute(name, value);
          }
          // DOM Level 1
          getAttribute(name) {
            if (this.attribs.hasOwnProperty(name)) {
              return this.attribs[name].value;
            } else {
              return null;
            }
          }
          setAttribute(name, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getAttributeNode(name) {
            if (this.attribs.hasOwnProperty(name)) {
              return this.attribs[name];
            } else {
              return null;
            }
          }
          setAttributeNode(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          removeAttributeNode(oldAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagName(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM Level 2
          getAttributeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setAttributeNS(namespaceURI, qualifiedName, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          removeAttributeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getAttributeNodeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setAttributeNodeNS(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagNameNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          hasAttribute(name) {
            return this.attribs.hasOwnProperty(name);
          }
          hasAttributeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM Level 3
          setIdAttribute(name, isId) {
            if (this.attribs.hasOwnProperty(name)) {
              return this.attribs[name].isId;
            } else {
              return isId;
            }
          }
          setIdAttributeNS(namespaceURI, localName, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setIdAttributeNode(idAttr, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM Level 4
          getElementsByTagName(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagNameNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByClassName(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isEqualNode(node) {
            var i, j, ref;
            if (!super.isEqualNode(node)) {
              return false;
            }
            if (node.namespaceURI !== this.namespaceURI) {
              return false;
            }
            if (node.prefix !== this.prefix) {
              return false;
            }
            if (node.localName !== this.localName) {
              return false;
            }
            if (node.attribs.length !== this.attribs.length) {
              return false;
            }
            for (i = j = 0, ref = this.attribs.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
              if (!this.attribs[i].isEqualNode(node.attribs[i])) {
                return false;
              }
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLElement2.prototype, "tagName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "id", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "className", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "classList", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "attributes", {
          get: function() {
            if (!this.attributeMap || !this.attributeMap.nodes) {
              this.attributeMap = new XMLNamedNodeMap(this.attribs);
            }
            return this.attributeMap;
          }
        });
        return XMLElement2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCharacterData.js
var require_XMLCharacterData = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCharacterData.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLCharacterData, XMLNode;
      XMLNode = require_XMLNode();
      module.exports = XMLCharacterData = (function() {
        class XMLCharacterData2 extends XMLNode {
          // Initializes a new instance of `XMLCharacterData`
          constructor(parent) {
            super(parent);
            this.value = "";
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // DOM level 1 functions to be implemented later
          substringData(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          appendData(arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          insertData(offset, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          deleteData(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          replaceData(offset, count, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isEqualNode(node) {
            if (!super.isEqualNode(node)) {
              return false;
            }
            if (node.data !== this.data) {
              return false;
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLCharacterData2.prototype, "data", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "length", {
          get: function() {
            return this.value.length;
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        return XMLCharacterData2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCData.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLCData, XMLCharacterData;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLCData = class XMLCData extends XMLCharacterData {
        // Initializes a new instance of `XMLCData`
        // `text` CDATA text
        constructor(parent, text) {
          super(parent);
          if (text == null) {
            throw new Error("Missing CDATA text. " + this.debugInfo());
          }
          this.name = "#cdata-section";
          this.type = NodeType.CData;
          this.value = this.stringify.cdata(text);
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLComment.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLCharacterData, XMLComment;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLComment = class XMLComment extends XMLCharacterData {
        // Initializes a new instance of `XMLComment`
        // `text` comment text
        constructor(parent, text) {
          super(parent);
          if (text == null) {
            throw new Error("Missing comment text. " + this.debugInfo());
          }
          this.name = "#comment";
          this.type = NodeType.Comment;
          this.value = this.stringify.comment(text);
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.comment(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDeclaration.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDeclaration, XMLNode, isObject;
      ({ isObject } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDeclaration = class XMLDeclaration extends XMLNode {
        // Initializes a new instance of `XMLDeclaration`
        // `parent` the document object
        // `version` A version number string, e.g. 1.0
        // `encoding` Encoding declaration, e.g. UTF-8
        // `standalone` standalone document declaration: true or false
        constructor(parent, version2, encoding, standalone) {
          super(parent);
          if (isObject(version2)) {
            ({ version: version2, encoding, standalone } = version2);
          }
          if (!version2) {
            version2 = "1.0";
          }
          this.type = NodeType.Declaration;
          this.version = this.stringify.xmlVersion(version2);
          if (encoding != null) {
            this.encoding = this.stringify.xmlEncoding(encoding);
          }
          if (standalone != null) {
            this.standalone = this.stringify.xmlStandalone(standalone);
          }
        }
        // Converts to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDAttList.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDTDAttList, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDAttList = class XMLDTDAttList extends XMLNode {
        // Initializes a new instance of `XMLDTDAttList`
        // `parent` the parent `XMLDocType` element
        // `elementName` the name of the element containing this attribute
        // `attributeName` attribute name
        // `attributeType` type of the attribute
        // `defaultValueType` default value type (either #REQUIRED, #IMPLIED,
        //                    #FIXED or #DEFAULT)
        // `defaultValue` default value of the attribute
        //                (only used for #FIXED or #DEFAULT)
        constructor(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          super(parent);
          if (elementName == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (attributeName == null) {
            throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
          }
          if (!attributeType) {
            throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
          }
          if (!defaultValueType) {
            throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
          }
          if (defaultValueType.indexOf("#") !== 0) {
            defaultValueType = "#" + defaultValueType;
          }
          if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
            throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
            throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          this.elementName = this.stringify.name(elementName);
          this.type = NodeType.AttributeDeclaration;
          this.attributeName = this.stringify.name(attributeName);
          this.attributeType = this.stringify.dtdAttType(attributeType);
          if (defaultValue) {
            this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
          }
          this.defaultValueType = defaultValueType;
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDEntity.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDTDEntity, XMLNode, isObject;
      ({ isObject } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDEntity = (function() {
        class XMLDTDEntity2 extends XMLNode {
          // Initializes a new instance of `XMLDTDEntity`
          // `parent` the parent `XMLDocType` element
          // `pe` whether this is a parameter entity or a general entity
          //      defaults to `false` (general entity)
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          // `value.nData` notation declaration
          constructor(parent, pe, name, value) {
            super(parent);
            if (name == null) {
              throw new Error("Missing DTD entity name. " + this.debugInfo(name));
            }
            if (value == null) {
              throw new Error("Missing DTD entity value. " + this.debugInfo(name));
            }
            this.pe = !!pe;
            this.name = this.stringify.name(name);
            this.type = NodeType.EntityDeclaration;
            if (!isObject(value)) {
              this.value = this.stringify.dtdEntityValue(value);
              this.internal = true;
            } else {
              if (!value.pubID && !value.sysID) {
                throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
              }
              if (value.pubID && !value.sysID) {
                throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
              }
              this.internal = false;
              if (value.pubID != null) {
                this.pubID = this.stringify.dtdPubID(value.pubID);
              }
              if (value.sysID != null) {
                this.sysID = this.stringify.dtdSysID(value.sysID);
              }
              if (value.nData != null) {
                this.nData = this.stringify.dtdNData(value.nData);
              }
              if (this.pe && this.nData) {
                throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
              }
            }
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
          }
        }
        ;
        Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
          get: function() {
            return this.nData || null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
          get: function() {
            return null;
          }
        });
        return XMLDTDEntity2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDElement.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDTDElement, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDElement = class XMLDTDElement extends XMLNode {
        // Initializes a new instance of `XMLDTDElement`
        // `parent` the parent `XMLDocType` element
        // `name` element name
        // `value` element content (defaults to #PCDATA)
        constructor(parent, name, value) {
          super(parent);
          if (name == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (!value) {
            value = "(#PCDATA)";
          }
          if (Array.isArray(value)) {
            value = "(" + value.join(",") + ")";
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.ElementDeclaration;
          this.value = this.stringify.dtdElementValue(value);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDNotation.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDTDNotation, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDNotation = (function() {
        class XMLDTDNotation2 extends XMLNode {
          // Initializes a new instance of `XMLDTDNotation`
          // `parent` the parent `XMLDocType` element
          // `name` the name of the notation
          // `value` an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          constructor(parent, name, value) {
            super(parent);
            if (name == null) {
              throw new Error("Missing DTD notation name. " + this.debugInfo(name));
            }
            if (!value.pubID && !value.sysID) {
              throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.NotationDeclaration;
            if (value.pubID != null) {
              this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
              this.sysID = this.stringify.dtdSysID(value.sysID);
            }
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
          }
        }
        ;
        Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        return XMLDTDNotation2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocType.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject;
      ({ isObject } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module.exports = XMLDocType = (function() {
        class XMLDocType2 extends XMLNode {
          // Initializes a new instance of `XMLDocType`
          // `parent` the document object
          // `pubID` public identifier of the external subset
          // `sysID` system identifier of the external subset
          constructor(parent, pubID, sysID) {
            var child, i, len, ref;
            super(parent);
            this.type = NodeType.DocType;
            if (parent.children) {
              ref = parent.children;
              for (i = 0, len = ref.length; i < len; i++) {
                child = ref[i];
                if (child.type === NodeType.Element) {
                  this.name = child.name;
                  break;
                }
              }
            }
            this.documentObject = parent;
            if (isObject(pubID)) {
              ({ pubID, sysID } = pubID);
            }
            if (sysID == null) {
              [sysID, pubID] = [pubID, sysID];
            }
            if (pubID != null) {
              this.pubID = this.stringify.dtdPubID(pubID);
            }
            if (sysID != null) {
              this.sysID = this.stringify.dtdSysID(sysID);
            }
          }
          // Creates an element type declaration
          // `name` element name
          // `value` element content (defaults to #PCDATA)
          element(name, value) {
            var child;
            child = new XMLDTDElement(this, name, value);
            this.children.push(child);
            return this;
          }
          // Creates an attribute declaration
          // `elementName` the name of the element containing this attribute
          // `attributeName` attribute name
          // `attributeType` type of the attribute (defaults to CDATA)
          // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
          //                    #DEFAULT) (defaults to #IMPLIED)
          // `defaultValue` default value of the attribute
          //                (only used for #FIXED or #DEFAULT)
          attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var child;
            child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.children.push(child);
            return this;
          }
          // Creates a general entity declaration
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          // `value.nData` notation declaration
          entity(name, value) {
            var child;
            child = new XMLDTDEntity(this, false, name, value);
            this.children.push(child);
            return this;
          }
          // Creates a parameter entity declaration
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          pEntity(name, value) {
            var child;
            child = new XMLDTDEntity(this, true, name, value);
            this.children.push(child);
            return this;
          }
          // Creates a NOTATION declaration
          // `name` the name of the notation
          // `value` an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          notation(name, value) {
            var child;
            child = new XMLDTDNotation(this, name, value);
            this.children.push(child);
            return this;
          }
          // Converts to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.docType(this, this.options.writer.filterOptions(options));
          }
          // Aliases
          ele(name, value) {
            return this.element(name, value);
          }
          att(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
          }
          ent(name, value) {
            return this.entity(name, value);
          }
          pent(name, value) {
            return this.pEntity(name, value);
          }
          not(name, value) {
            return this.notation(name, value);
          }
          up() {
            return this.root() || this.documentObject;
          }
          isEqualNode(node) {
            if (!super.isEqualNode(node)) {
              return false;
            }
            if (node.name !== this.name) {
              return false;
            }
            if (node.publicId !== this.publicId) {
              return false;
            }
            if (node.systemId !== this.systemId) {
              return false;
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLDocType2.prototype, "entities", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.EntityDeclaration && !child.pe) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "notations", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.NotationDeclaration) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        return XMLDocType2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLRaw.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLNode, XMLRaw;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module.exports = XMLRaw = class XMLRaw extends XMLNode {
        // Initializes a new instance of `XMLRaw`
        // `text` raw text
        constructor(parent, text) {
          super(parent);
          if (text == null) {
            throw new Error("Missing raw text. " + this.debugInfo());
          }
          this.type = NodeType.Raw;
          this.value = this.stringify.raw(text);
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.raw(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLText.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLCharacterData, XMLText;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLText = (function() {
        class XMLText2 extends XMLCharacterData {
          // Initializes a new instance of `XMLText`
          // `text` element text
          constructor(parent, text) {
            super(parent);
            if (text == null) {
              throw new Error("Missing element text. " + this.debugInfo());
            }
            this.name = "#text";
            this.type = NodeType.Text;
            this.value = this.stringify.text(text);
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.text(this, this.options.writer.filterOptions(options));
          }
          // DOM level 1 functions to be implemented later
          splitText(offset) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 3 functions to be implemented later
          replaceWholeText(content) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        }
        ;
        Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLText2.prototype, "wholeText", {
          get: function() {
            var next, prev, str5;
            str5 = "";
            prev = this.previousSibling;
            while (prev) {
              str5 = prev.data + str5;
              prev = prev.previousSibling;
            }
            str5 += this.data;
            next = this.nextSibling;
            while (next) {
              str5 = str5 + next.data;
              next = next.nextSibling;
            }
            return str5;
          }
        });
        return XMLText2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLCharacterData, XMLProcessingInstruction;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLProcessingInstruction = class XMLProcessingInstruction extends XMLCharacterData {
        // Initializes a new instance of `XMLProcessingInstruction`
        // `parent` the parent node
        // `target` instruction target
        // `value` instruction value
        constructor(parent, target, value) {
          super(parent);
          if (target == null) {
            throw new Error("Missing instruction target. " + this.debugInfo());
          }
          this.type = NodeType.ProcessingInstruction;
          this.target = this.stringify.insTarget(target);
          this.name = this.target;
          if (value) {
            this.value = this.stringify.insValue(value);
          }
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
        }
        isEqualNode(node) {
          if (!super.isEqualNode(node)) {
            return false;
          }
          if (node.target !== this.target) {
            return false;
          }
          return true;
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDummy.js
var require_XMLDummy = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDummy.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDummy, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDummy = class XMLDummy extends XMLNode {
        // Initializes a new instance of `XMLDummy`
        // `XMLDummy` is a special node representing a node with 
        // a null value. Dummy nodes are created while recursively
        // building the XML tree. Simply skipping null values doesn't
        // work because that would break the recursive chain.
        constructor(parent) {
          super(parent);
          this.type = NodeType.Dummy;
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return "";
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNodeList.js
var require_XMLNodeList = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNodeList.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLNodeList;
      module.exports = XMLNodeList = (function() {
        class XMLNodeList2 {
          // Initializes a new instance of `XMLNodeList`
          // This is just a wrapper around an ordinary
          // JS array.
          // `nodes` the array containing nodes.
          constructor(nodes) {
            this.nodes = nodes;
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return this.nodes = null;
          }
          // DOM Level 1
          item(index) {
            return this.nodes[index] || null;
          }
        }
        ;
        Object.defineProperty(XMLNodeList2.prototype, "length", {
          get: function() {
            return this.nodes.length || 0;
          }
        });
        return XMLNodeList2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/DocumentPosition.js
var require_DocumentPosition = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/DocumentPosition.js"(exports2, module) {
    "use strict";
    (function() {
      module.exports = {
        Disconnected: 1,
        Preceding: 2,
        Following: 4,
        Contains: 8,
        ContainedBy: 16,
        ImplementationSpecific: 32
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNode.js"(exports2, module) {
    "use strict";
    (function() {
      var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, hasProp = {}.hasOwnProperty, splice = [].splice;
      ({ isObject, isFunction, isEmpty, getValue } = require_Utility());
      XMLElement = null;
      XMLCData = null;
      XMLComment = null;
      XMLDeclaration = null;
      XMLDocType = null;
      XMLRaw = null;
      XMLText = null;
      XMLProcessingInstruction = null;
      XMLDummy = null;
      NodeType = null;
      XMLNodeList = null;
      XMLNamedNodeMap = null;
      DocumentPosition = null;
      module.exports = XMLNode = (function() {
        class XMLNode2 {
          // Initializes a new instance of `XMLNode`
          // `parent` the parent node
          constructor(parent1) {
            this.parent = parent1;
            if (this.parent) {
              this.options = this.parent.options;
              this.stringify = this.parent.stringify;
            }
            this.value = null;
            this.children = [];
            this.baseURI = null;
            if (!XMLElement) {
              XMLElement = require_XMLElement();
              XMLCData = require_XMLCData();
              XMLComment = require_XMLComment();
              XMLDeclaration = require_XMLDeclaration();
              XMLDocType = require_XMLDocType();
              XMLRaw = require_XMLRaw();
              XMLText = require_XMLText();
              XMLProcessingInstruction = require_XMLProcessingInstruction();
              XMLDummy = require_XMLDummy();
              NodeType = require_NodeType();
              XMLNodeList = require_XMLNodeList();
              XMLNamedNodeMap = require_XMLNamedNodeMap();
              DocumentPosition = require_DocumentPosition();
            }
          }
          // Sets the parent node of this node and its children recursively
          // `parent` the parent node
          setParent(parent) {
            var child, j, len, ref1, results;
            this.parent = parent;
            if (parent) {
              this.options = parent.options;
              this.stringify = parent.stringify;
            }
            ref1 = this.children;
            results = [];
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              results.push(child.setParent(this));
            }
            return results;
          }
          // Creates a child element node
          // `name` node name or an object describing the XML tree
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          element(name, attributes, text) {
            var childNode, item, j, k, key, lastChild, len, len1, val;
            lastChild = null;
            if (attributes === null && text == null) {
              [attributes, text] = [{}, null];
            }
            if (attributes == null) {
              attributes = {};
            }
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
              [text, attributes] = [attributes, text];
            }
            if (name != null) {
              name = getValue(name);
            }
            if (Array.isArray(name)) {
              for (j = 0, len = name.length; j < len; j++) {
                item = name[j];
                lastChild = this.element(item);
              }
            } else if (isFunction(name)) {
              lastChild = this.element(name.apply());
            } else if (isObject(name)) {
              for (key in name) {
                if (!hasProp.call(name, key)) continue;
                val = name[key];
                if (isFunction(val)) {
                  val = val.apply();
                }
                if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                  lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
                } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                  lastChild = this.dummy();
                } else if (isObject(val) && isEmpty(val)) {
                  lastChild = this.element(key);
                } else if (!this.options.keepNullNodes && val == null) {
                  lastChild = this.dummy();
                } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                  for (k = 0, len1 = val.length; k < len1; k++) {
                    item = val[k];
                    childNode = {};
                    childNode[key] = item;
                    lastChild = this.element(childNode);
                  }
                } else if (isObject(val)) {
                  if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                    lastChild = this.element(val);
                  } else {
                    lastChild = this.element(key);
                    lastChild.element(val);
                  }
                } else {
                  lastChild = this.element(key, val);
                }
              }
            } else if (!this.options.keepNullNodes && text === null) {
              lastChild = this.dummy();
            } else {
              if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
                lastChild = this.text(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
                lastChild = this.cdata(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
                lastChild = this.comment(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
                lastChild = this.raw(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
                lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
              } else {
                lastChild = this.node(name, attributes, text);
              }
            }
            if (lastChild == null) {
              throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
            }
            return lastChild;
          }
          // Creates a child element node before the current node
          // `name` node name or an object describing the XML tree
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          insertBefore(name, attributes, text) {
            var child, i, newChild, refChild, removed;
            if (name != null ? name.type : void 0) {
              newChild = name;
              refChild = attributes;
              newChild.setParent(this);
              if (refChild) {
                i = children.indexOf(refChild);
                removed = children.splice(i);
                children.push(newChild);
                Array.prototype.push.apply(children, removed);
              } else {
                children.push(newChild);
              }
              return newChild;
            } else {
              if (this.isRoot) {
                throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
              }
              i = this.parent.children.indexOf(this);
              removed = this.parent.children.splice(i);
              child = this.parent.element(name, attributes, text);
              Array.prototype.push.apply(this.parent.children, removed);
              return child;
            }
          }
          // Creates a child element node after the current node
          // `name` node name or an object describing the XML tree
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          insertAfter(name, attributes, text) {
            var child, i, removed;
            if (this.isRoot) {
              throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
          }
          // Deletes a child element node
          remove() {
            var i, ref1;
            if (this.isRoot) {
              throw new Error("Cannot remove the root element. " + this.debugInfo());
            }
            i = this.parent.children.indexOf(this);
            splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
            return this.parent;
          }
          // Creates a node
          // `name` name of the node
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          node(name, attributes, text) {
            var child;
            if (name != null) {
              name = getValue(name);
            }
            attributes || (attributes = {});
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
              [text, attributes] = [attributes, text];
            }
            child = new XMLElement(this, name, attributes);
            if (text != null) {
              child.text(text);
            }
            this.children.push(child);
            return child;
          }
          // Creates a text node
          // `value` element text
          text(value) {
            var child;
            if (isObject(value)) {
              this.element(value);
            }
            child = new XMLText(this, value);
            this.children.push(child);
            return this;
          }
          // Creates a CDATA node
          // `value` element text without CDATA delimiters
          cdata(value) {
            var child;
            child = new XMLCData(this, value);
            this.children.push(child);
            return this;
          }
          // Creates a comment node
          // `value` comment text
          comment(value) {
            var child;
            child = new XMLComment(this, value);
            this.children.push(child);
            return this;
          }
          // Creates a comment node before the current node
          // `value` comment text
          commentBefore(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Creates a comment node after the current node
          // `value` comment text
          commentAfter(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Adds unescaped raw text
          // `value` text
          raw(value) {
            var child;
            child = new XMLRaw(this, value);
            this.children.push(child);
            return this;
          }
          // Adds a dummy node
          dummy() {
            var child;
            child = new XMLDummy(this);
            return child;
          }
          // Adds a processing instruction
          // `target` instruction target
          // `value` instruction value
          instruction(target, value) {
            var insTarget, insValue, instruction, j, len;
            if (target != null) {
              target = getValue(target);
            }
            if (value != null) {
              value = getValue(value);
            }
            if (Array.isArray(target)) {
              for (j = 0, len = target.length; j < len; j++) {
                insTarget = target[j];
                this.instruction(insTarget);
              }
            } else if (isObject(target)) {
              for (insTarget in target) {
                if (!hasProp.call(target, insTarget)) continue;
                insValue = target[insTarget];
                this.instruction(insTarget, insValue);
              }
            } else {
              if (isFunction(value)) {
                value = value.apply();
              }
              instruction = new XMLProcessingInstruction(this, target, value);
              this.children.push(instruction);
            }
            return this;
          }
          // Creates a processing instruction node before the current node
          // `target` instruction target
          // `value` instruction value
          instructionBefore(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Creates a processing instruction node after the current node
          // `target` instruction target
          // `value` instruction value
          instructionAfter(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Creates the xml declaration
          // `version` A version number string, e.g. 1.0
          // `encoding` Encoding declaration, e.g. UTF-8
          // `standalone` standalone document declaration: true or false
          declaration(version2, encoding, standalone) {
            var doc, xmldec;
            doc = this.document();
            xmldec = new XMLDeclaration(doc, version2, encoding, standalone);
            if (doc.children.length === 0) {
              doc.children.unshift(xmldec);
            } else if (doc.children[0].type === NodeType.Declaration) {
              doc.children[0] = xmldec;
            } else {
              doc.children.unshift(xmldec);
            }
            return doc.root() || doc;
          }
          // Creates the document type declaration
          // `pubID` the public identifier of the external subset
          // `sysID` the system identifier of the external subset
          dtd(pubID, sysID) {
            var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
            doc = this.document();
            doctype = new XMLDocType(doc, pubID, sysID);
            ref1 = doc.children;
            for (i = j = 0, len = ref1.length; j < len; i = ++j) {
              child = ref1[i];
              if (child.type === NodeType.DocType) {
                doc.children[i] = doctype;
                return doctype;
              }
            }
            ref2 = doc.children;
            for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
              child = ref2[i];
              if (child.isRoot) {
                doc.children.splice(i, 0, doctype);
                return doctype;
              }
            }
            doc.children.push(doctype);
            return doctype;
          }
          // Gets the parent node
          up() {
            if (this.isRoot) {
              throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
            }
            return this.parent;
          }
          // Gets the root node
          root() {
            var node;
            node = this;
            while (node) {
              if (node.type === NodeType.Document) {
                return node.rootObject;
              } else if (node.isRoot) {
                return node;
              } else {
                node = node.parent;
              }
            }
          }
          // Gets the node representing the XML document
          document() {
            var node;
            node = this;
            while (node) {
              if (node.type === NodeType.Document) {
                return node;
              } else {
                node = node.parent;
              }
            }
          }
          // Ends the document and converts string
          end(options) {
            return this.document().end(options);
          }
          // Gets the previous node
          prev() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i < 1) {
              throw new Error("Already at the first node. " + this.debugInfo());
            }
            return this.parent.children[i - 1];
          }
          // Gets the next node
          next() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i === -1 || i === this.parent.children.length - 1) {
              throw new Error("Already at the last node. " + this.debugInfo());
            }
            return this.parent.children[i + 1];
          }
          // Imports cloned root from another XML document
          // `doc` the XML document to insert nodes from
          importDocument(doc) {
            var child, clonedRoot, j, len, ref1;
            clonedRoot = doc.root().clone();
            clonedRoot.parent = this;
            clonedRoot.isRoot = false;
            this.children.push(clonedRoot);
            if (this.type === NodeType.Document) {
              clonedRoot.isRoot = true;
              clonedRoot.documentObject = this;
              this.rootObject = clonedRoot;
              if (this.children) {
                ref1 = this.children;
                for (j = 0, len = ref1.length; j < len; j++) {
                  child = ref1[j];
                  if (child.type === NodeType.DocType) {
                    child.name = clonedRoot.name;
                    break;
                  }
                }
              }
            }
            return this;
          }
          // Returns debug string for this node
          debugInfo(name) {
            var ref1, ref2;
            name = name || this.name;
            if (name == null && !((ref1 = this.parent) != null ? ref1.name : void 0)) {
              return "";
            } else if (name == null) {
              return "parent: <" + this.parent.name + ">";
            } else if (!((ref2 = this.parent) != null ? ref2.name : void 0)) {
              return "node: <" + name + ">";
            } else {
              return "node: <" + name + ">, parent: <" + this.parent.name + ">";
            }
          }
          // Aliases
          ele(name, attributes, text) {
            return this.element(name, attributes, text);
          }
          nod(name, attributes, text) {
            return this.node(name, attributes, text);
          }
          txt(value) {
            return this.text(value);
          }
          dat(value) {
            return this.cdata(value);
          }
          com(value) {
            return this.comment(value);
          }
          ins(target, value) {
            return this.instruction(target, value);
          }
          doc() {
            return this.document();
          }
          dec(version2, encoding, standalone) {
            return this.declaration(version2, encoding, standalone);
          }
          e(name, attributes, text) {
            return this.element(name, attributes, text);
          }
          n(name, attributes, text) {
            return this.node(name, attributes, text);
          }
          t(value) {
            return this.text(value);
          }
          d(value) {
            return this.cdata(value);
          }
          c(value) {
            return this.comment(value);
          }
          r(value) {
            return this.raw(value);
          }
          i(target, value) {
            return this.instruction(target, value);
          }
          u() {
            return this.up();
          }
          // can be deprecated in a future release
          importXMLBuilder(doc) {
            return this.importDocument(doc);
          }
          // Adds or modifies an attribute.
          // `name` attribute name
          // `value` attribute value
          attribute(name, value) {
            throw new Error("attribute() applies to element nodes only.");
          }
          att(name, value) {
            return this.attribute(name, value);
          }
          a(name, value) {
            return this.attribute(name, value);
          }
          // Removes an attribute
          // `name` attribute name
          removeAttribute(name) {
            throw new Error("attribute() applies to element nodes only.");
          }
          // DOM level 1 functions to be implemented later
          replaceChild(newChild, oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          removeChild(oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          appendChild(newChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          hasChildNodes() {
            return this.children.length !== 0;
          }
          cloneNode(deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          normalize() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 2
          isSupported(feature, version2) {
            return true;
          }
          hasAttributes() {
            return this.attribs.length !== 0;
          }
          // DOM level 3 functions to be implemented later
          compareDocumentPosition(other) {
            var ref, res;
            ref = this;
            if (ref === other) {
              return 0;
            } else if (this.document() !== other.document()) {
              res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
              if (Math.random() < 0.5) {
                res |= DocumentPosition.Preceding;
              } else {
                res |= DocumentPosition.Following;
              }
              return res;
            } else if (ref.isAncestor(other)) {
              return DocumentPosition.Contains | DocumentPosition.Preceding;
            } else if (ref.isDescendant(other)) {
              return DocumentPosition.Contains | DocumentPosition.Following;
            } else if (ref.isPreceding(other)) {
              return DocumentPosition.Preceding;
            } else {
              return DocumentPosition.Following;
            }
          }
          isSameNode(other) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          lookupPrefix(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isDefaultNamespace(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          lookupNamespaceURI(prefix) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isEqualNode(node) {
            var i, j, ref1;
            if (node.nodeType !== this.nodeType) {
              return false;
            }
            if (node.children.length !== this.children.length) {
              return false;
            }
            for (i = j = 0, ref1 = this.children.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
              if (!this.children[i].isEqualNode(node.children[i])) {
                return false;
              }
            }
            return true;
          }
          getFeature(feature, version2) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setUserData(key, data, handler) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getUserData(key) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // Returns true if other is an inclusive descendant of node,
          // and false otherwise.
          contains(other) {
            if (!other) {
              return false;
            }
            return other === this || this.isDescendant(other);
          }
          // An object A is called a descendant of an object B, if either A is 
          // a child of B or A is a child of an object C that is a descendant of B.
          isDescendant(node) {
            var child, isDescendantChild, j, len, ref1;
            ref1 = this.children;
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              if (node === child) {
                return true;
              }
              isDescendantChild = child.isDescendant(node);
              if (isDescendantChild) {
                return true;
              }
            }
            return false;
          }
          // An object A is called an ancestor of an object B if and only if
          // B is a descendant of A.
          isAncestor(node) {
            return node.isDescendant(this);
          }
          // An object A is preceding an object B if A and B are in the 
          // same tree and A comes before B in tree order.
          isPreceding(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) {
              return false;
            } else {
              return nodePos < thisPos;
            }
          }
          // An object A is folllowing an object B if A and B are in the 
          // same tree and A comes after B in tree order.
          isFollowing(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) {
              return false;
            } else {
              return nodePos > thisPos;
            }
          }
          // Returns the preorder position of the given node in the tree, or -1
          // if the node is not in the tree.
          treePosition(node) {
            var found, pos;
            pos = 0;
            found = false;
            this.foreachTreeNode(this.document(), function(childNode) {
              pos++;
              if (!found && childNode === node) {
                return found = true;
              }
            });
            if (found) {
              return pos;
            } else {
              return -1;
            }
          }
          // Depth-first preorder traversal through the XML tree
          foreachTreeNode(node, func) {
            var child, j, len, ref1, res;
            node || (node = this.document());
            ref1 = node.children;
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              if (res = func(child)) {
                return res;
              } else {
                res = this.foreachTreeNode(child, func);
                if (res) {
                  return res;
                }
              }
            }
          }
        }
        ;
        Object.defineProperty(XMLNode2.prototype, "nodeName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeValue", {
          get: function() {
            return this.value;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "parentNode", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "childNodes", {
          get: function() {
            if (!this.childNodeList || !this.childNodeList.nodes) {
              this.childNodeList = new XMLNodeList(this.children);
            }
            return this.childNodeList;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "firstChild", {
          get: function() {
            return this.children[0] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "lastChild", {
          get: function() {
            return this.children[this.children.length - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "previousSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nextSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i + 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
          get: function() {
            return this.document() || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "textContent", {
          get: function() {
            var child, j, len, ref1, str5;
            if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
              str5 = "";
              ref1 = this.children;
              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];
                if (child.textContent) {
                  str5 += child.textContent;
                }
              }
              return str5;
            } else {
              return null;
            }
          },
          set: function(value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        return XMLNode2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringifier.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLStringifier, hasProp = {}.hasOwnProperty;
      module.exports = XMLStringifier = (function() {
        class XMLStringifier2 {
          // Initializes a new instance of `XMLStringifier`
          // `options.version` The version number string of the XML spec to validate against, e.g. 1.0
          // `options.noDoubleEncoding` whether existing html entities are encoded: true or false
          // `options.stringify` a set of functions to use for converting values to strings
          // `options.noValidation` whether values will be validated and escaped or returned as is
          // `options.invalidCharReplacement` a character to replace invalid characters and disable character validation
          constructor(options) {
            var key, ref, value;
            this.assertLegalChar = this.assertLegalChar.bind(this);
            this.assertLegalName = this.assertLegalName.bind(this);
            options || (options = {});
            this.options = options;
            if (!this.options.version) {
              this.options.version = "1.0";
            }
            ref = options.stringify || {};
            for (key in ref) {
              if (!hasProp.call(ref, key)) continue;
              value = ref[key];
              this[key] = value;
            }
          }
          // Defaults
          name(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalName("" + val || "");
          }
          text(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar(this.textEscape("" + val || ""));
          }
          cdata(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            val = val.replace("]]>", "]]]]><![CDATA[>");
            return this.assertLegalChar(val);
          }
          comment(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (val.match(/--/)) {
              throw new Error("Comment text cannot contain double-hypen: " + val);
            }
            return this.assertLegalChar(val);
          }
          raw(val) {
            if (this.options.noValidation) {
              return val;
            }
            return "" + val || "";
          }
          attValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar(this.attEscape(val = "" + val || ""));
          }
          insTarget(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          insValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (val.match(/\?>/)) {
              throw new Error("Invalid processing instruction value: " + val);
            }
            return this.assertLegalChar(val);
          }
          xmlVersion(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (!val.match(/1\.[0-9]+/)) {
              throw new Error("Invalid version number: " + val);
            }
            return val;
          }
          xmlEncoding(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
              throw new Error("Invalid encoding: " + val);
            }
            return this.assertLegalChar(val);
          }
          xmlStandalone(val) {
            if (this.options.noValidation) {
              return val;
            }
            if (val) {
              return "yes";
            } else {
              return "no";
            }
          }
          dtdPubID(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdSysID(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdElementValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdAttType(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdAttDefault(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdEntityValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdNData(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          assertLegalChar(str5) {
            var regex, res;
            if (this.options.noValidation) {
              return str5;
            }
            if (this.options.version === "1.0") {
              regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
              if (this.options.invalidCharReplacement !== void 0) {
                str5 = str5.replace(regex, this.options.invalidCharReplacement);
              } else if (res = str5.match(regex)) {
                throw new Error(`Invalid character in string: ${str5} at index ${res.index}`);
              }
            } else if (this.options.version === "1.1") {
              regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
              if (this.options.invalidCharReplacement !== void 0) {
                str5 = str5.replace(regex, this.options.invalidCharReplacement);
              } else if (res = str5.match(regex)) {
                throw new Error(`Invalid character in string: ${str5} at index ${res.index}`);
              }
            }
            return str5;
          }
          assertLegalName(str5) {
            var regex;
            if (this.options.noValidation) {
              return str5;
            }
            str5 = this.assertLegalChar(str5);
            regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
            if (!str5.match(regex)) {
              throw new Error(`Invalid character in name: ${str5}`);
            }
            return str5;
          }
          // Escapes special characters in text
          // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
          // `str` the string to escape
          textEscape(str5) {
            var ampregex;
            if (this.options.noValidation) {
              return str5;
            }
            ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
            return str5.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
          }
          // Escapes special characters in attribute values
          // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
          // `str` the string to escape
          attEscape(str5) {
            var ampregex;
            if (this.options.noValidation) {
              return str5;
            }
            ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
            return str5.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
          }
        }
        ;
        XMLStringifier2.prototype.convertAttKey = "@";
        XMLStringifier2.prototype.convertPIKey = "?";
        XMLStringifier2.prototype.convertTextKey = "#text";
        XMLStringifier2.prototype.convertCDataKey = "#cdata";
        XMLStringifier2.prototype.convertCommentKey = "#comment";
        XMLStringifier2.prototype.convertRawKey = "#raw";
        return XMLStringifier2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/WriterState.js
var require_WriterState = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/WriterState.js"(exports2, module) {
    "use strict";
    (function() {
      module.exports = {
        None: 0,
        OpenTag: 1,
        InsideTag: 2,
        CloseTag: 3
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLWriterBase.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
      ({ assign } = require_Utility());
      NodeType = require_NodeType();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLElement = require_XMLElement();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDummy = require_XMLDummy();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDNotation = require_XMLDTDNotation();
      WriterState = require_WriterState();
      module.exports = XMLWriterBase = class XMLWriterBase {
        // Initializes a new instance of `XMLWriterBase`
        // `options.pretty` pretty prints the result
        // `options.indent` indentation string
        // `options.newline` newline sequence
        // `options.offset` a fixed number of indentations to add to every line
        // `options.width` maximum column width
        // `options.allowEmpty` do not self close empty element tags
        // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
        // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
        constructor(options) {
          var key, ref, value;
          options || (options = {});
          this.options = options;
          ref = options.writer || {};
          for (key in ref) {
            if (!hasProp.call(ref, key)) continue;
            value = ref[key];
            this["_" + key] = this[key];
            this[key] = value;
          }
        }
        // Filters writer options and provides defaults
        // `options` writer options
        filterOptions(options) {
          var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
          options || (options = {});
          options = assign({}, this.options, options);
          filteredOptions = {
            writer: this
          };
          filteredOptions.pretty = options.pretty || false;
          filteredOptions.allowEmpty = options.allowEmpty || false;
          filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
          filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
          filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
          filteredOptions.width = (ref3 = options.width) != null ? ref3 : 0;
          filteredOptions.dontPrettyTextNodes = (ref4 = (ref5 = options.dontPrettyTextNodes) != null ? ref5 : options.dontprettytextnodes) != null ? ref4 : 0;
          filteredOptions.spaceBeforeSlash = (ref6 = (ref7 = options.spaceBeforeSlash) != null ? ref7 : options.spacebeforeslash) != null ? ref6 : "";
          if (filteredOptions.spaceBeforeSlash === true) {
            filteredOptions.spaceBeforeSlash = " ";
          }
          filteredOptions.suppressPrettyCount = 0;
          filteredOptions.user = {};
          filteredOptions.state = WriterState.None;
          return filteredOptions;
        }
        // Returns the indentation string for the current level
        // `node` current node
        // `options` writer options
        // `level` current indentation level
        indent(node, options, level) {
          var indentLevel;
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else if (options.pretty) {
            indentLevel = (level || 0) + options.offset + 1;
            if (indentLevel > 0) {
              return new Array(indentLevel).join(options.indent);
            }
          }
          return "";
        }
        // Returns the newline string
        // `node` current node
        // `options` writer options
        // `level` current indentation level
        endline(node, options, level) {
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else {
            return options.newline;
          }
        }
        attribute(att, options, level) {
          var r;
          this.openAttribute(att, options, level);
          if (options.pretty && options.width > 0) {
            r = att.name + '="' + att.value + '"';
          } else {
            r = " " + att.name + '="' + att.value + '"';
          }
          this.closeAttribute(att, options, level);
          return r;
        }
        cdata(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<![CDATA[";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += "]]>" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        comment(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!-- ";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += " -->" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        declaration(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?xml";
          options.state = WriterState.InsideTag;
          r += ' version="' + node.version + '"';
          if (node.encoding != null) {
            r += ' encoding="' + node.encoding + '"';
          }
          if (node.standalone != null) {
            r += ' standalone="' + node.standalone + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        docType(node, options, level) {
          var child, i, len1, r, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          r += "<!DOCTYPE " + node.root().name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.children.length > 0) {
            r += " [";
            r += this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (i = 0, len1 = ref.length; i < len1; i++) {
              child = ref[i];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += "]";
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        element(node, options, level) {
          var att, attLen, child, childNodeCount, firstChildNode, i, j, len, len1, len2, name, prettySuppressed, r, ratt, ref, ref1, ref2, ref3, rline;
          level || (level = 0);
          prettySuppressed = false;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<" + node.name;
          if (options.pretty && options.width > 0) {
            len = r.length;
            ref = node.attribs;
            for (name in ref) {
              if (!hasProp.call(ref, name)) continue;
              att = ref[name];
              ratt = this.attribute(att, options, level);
              attLen = ratt.length;
              if (len + attLen > options.width) {
                rline = this.indent(node, options, level + 1) + ratt;
                r += this.endline(node, options, level) + rline;
                len = rline.length;
              } else {
                rline = " " + ratt;
                r += rline;
                len += rline.length;
              }
            }
          } else {
            ref1 = node.attribs;
            for (name in ref1) {
              if (!hasProp.call(ref1, name)) continue;
              att = ref1[name];
              r += this.attribute(att, options, level);
            }
          }
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
          })) {
            if (options.allowEmpty) {
              r += ">";
              options.state = WriterState.CloseTag;
              r += "</" + node.name + ">" + this.endline(node, options, level);
            } else {
              options.state = WriterState.CloseTag;
              r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
            r += ">";
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            r += this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            r += "</" + node.name + ">" + this.endline(node, options, level);
          } else {
            if (options.dontPrettyTextNodes) {
              ref2 = node.children;
              for (i = 0, len1 = ref2.length; i < len1; i++) {
                child = ref2[i];
                if ((child.type === NodeType.Text || child.type === NodeType.Raw || child.type === NodeType.CData) && child.value != null) {
                  options.suppressPrettyCount++;
                  prettySuppressed = true;
                  break;
                }
              }
            }
            r += ">" + this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref3 = node.children;
            for (j = 0, len2 = ref3.length; j < len2; j++) {
              child = ref3[j];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += this.indent(node, options, level) + "</" + node.name + ">";
            if (prettySuppressed) {
              options.suppressPrettyCount--;
            }
            r += this.endline(node, options, level);
            options.state = WriterState.None;
          }
          this.closeNode(node, options, level);
          return r;
        }
        writeChildNode(node, options, level) {
          switch (node.type) {
            case NodeType.CData:
              return this.cdata(node, options, level);
            case NodeType.Comment:
              return this.comment(node, options, level);
            case NodeType.Element:
              return this.element(node, options, level);
            case NodeType.Raw:
              return this.raw(node, options, level);
            case NodeType.Text:
              return this.text(node, options, level);
            case NodeType.ProcessingInstruction:
              return this.processingInstruction(node, options, level);
            case NodeType.Dummy:
              return "";
            case NodeType.Declaration:
              return this.declaration(node, options, level);
            case NodeType.DocType:
              return this.docType(node, options, level);
            case NodeType.AttributeDeclaration:
              return this.dtdAttList(node, options, level);
            case NodeType.ElementDeclaration:
              return this.dtdElement(node, options, level);
            case NodeType.EntityDeclaration:
              return this.dtdEntity(node, options, level);
            case NodeType.NotationDeclaration:
              return this.dtdNotation(node, options, level);
            default:
              throw new Error("Unknown XML node type: " + node.constructor.name);
          }
        }
        processingInstruction(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?";
          options.state = WriterState.InsideTag;
          r += node.target;
          if (node.value) {
            r += " " + node.value;
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        raw(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        text(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdAttList(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ATTLIST";
          options.state = WriterState.InsideTag;
          r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
          if (node.defaultValueType !== "#DEFAULT") {
            r += " " + node.defaultValueType;
          }
          if (node.defaultValue) {
            r += ' "' + node.defaultValue + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdElement(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ELEMENT";
          options.state = WriterState.InsideTag;
          r += " " + node.name + " " + node.value;
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdEntity(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ENTITY";
          options.state = WriterState.InsideTag;
          if (node.pe) {
            r += " %";
          }
          r += " " + node.name;
          if (node.value) {
            r += ' "' + node.value + '"';
          } else {
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.nData) {
              r += " NDATA " + node.nData;
            }
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdNotation(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!NOTATION";
          options.state = WriterState.InsideTag;
          r += " " + node.name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.pubID) {
            r += ' PUBLIC "' + node.pubID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        openNode(node, options, level) {
        }
        closeNode(node, options, level) {
        }
        openAttribute(att, options, level) {
        }
        closeAttribute(att, options, level) {
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringWriter.js"(exports2, module) {
    "use strict";
    (function() {
      var XMLStringWriter, XMLWriterBase;
      XMLWriterBase = require_XMLWriterBase();
      module.exports = XMLStringWriter = class XMLStringWriter extends XMLWriterBase {
        // Initializes a new instance of `XMLStringWriter`
        // `options.pretty` pretty prints the result
        // `options.indent` indentation string
        // `options.newline` newline sequence
        // `options.offset` a fixed number of indentations to add to every line
        // `options.allowEmpty` do not self close empty element tags
        // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
        // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
        constructor(options) {
          super(options);
        }
        document(doc, options) {
          var child, i, len, r, ref;
          options = this.filterOptions(options);
          r = "";
          ref = doc.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, 0);
          }
          if (options.pretty && r.slice(-options.newline.length) === options.newline) {
            r = r.slice(0, -options.newline.length);
          }
          return r;
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocument.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject;
      ({ isPlainObject } = require_Utility());
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDOMConfiguration = require_XMLDOMConfiguration();
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      module.exports = XMLDocument = (function() {
        class XMLDocument2 extends XMLNode {
          // Initializes a new instance of `XMLDocument`
          // `options.keepNullNodes` whether nodes with null values will be kept
          //     or ignored: true or false
          // `options.keepNullAttributes` whether attributes with null values will be
          //     kept or ignored: true or false
          // `options.ignoreDecorators` whether decorator strings will be ignored when
          //     converting JS objects: true or false
          // `options.separateArrayItems` whether array items are created as separate
          //     nodes when passed as an object value: true or false
          // `options.noDoubleEncoding` whether existing html entities are encoded:
          //     true or false
          // `options.stringify` a set of functions to use for converting values to
          //     strings
          // `options.writer` the default XML writer to use for converting nodes to
          //     string. If the default writer is not set, the built-in XMLStringWriter
          //     will be used instead.
          constructor(options) {
            super(null);
            this.name = "#document";
            this.type = NodeType.Document;
            this.documentURI = null;
            this.domConfig = new XMLDOMConfiguration();
            options || (options = {});
            if (!options.writer) {
              options.writer = new XMLStringWriter();
            }
            this.options = options;
            this.stringify = new XMLStringifier(options);
          }
          // Ends the document and passes it to the given XML writer
          // `writer` is either an XML writer or a plain object to pass to the
          // constructor of the default XML writer. The default writer is assigned when
          // creating the XML document. Following flags are recognized by the
          // built-in XMLStringWriter:
          //   `writer.pretty` pretty prints the result
          //   `writer.indent` indentation for pretty print
          //   `writer.offset` how many indentations to add to every line for pretty print
          //   `writer.newline` newline sequence for pretty print
          end(writer) {
            var writerOptions;
            writerOptions = {};
            if (!writer) {
              writer = this.options.writer;
            } else if (isPlainObject(writer)) {
              writerOptions = writer;
              writer = this.options.writer;
            }
            return writer.document(this, writer.filterOptions(writerOptions));
          }
          // Converts the XML document to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.document(this, this.options.writer.filterOptions(options));
          }
          // DOM level 1 functions to be implemented later
          createElement(tagName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createDocumentFragment() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createTextNode(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createComment(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createCDATASection(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createProcessingInstruction(target, data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createAttribute(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createEntityReference(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagName(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 2 functions to be implemented later
          importNode(importedNode, deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createElementNS(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createAttributeNS(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagNameNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementById(elementId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 3 functions to be implemented later
          adoptNode(source) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          normalizeDocument() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          renameNode(node, namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 4 functions to be implemented later
          getElementsByClassName(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createEvent(eventInterface) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createRange() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createNodeIterator(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createTreeWalker(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        }
        ;
        Object.defineProperty(XMLDocument2.prototype, "implementation", {
          value: new XMLDOMImplementation()
        });
        Object.defineProperty(XMLDocument2.prototype, "doctype", {
          get: function() {
            var child, i, len, ref;
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.DocType) {
                return child;
              }
            }
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "documentElement", {
          get: function() {
            return this.rootObject || null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
          get: function() {
            return false;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].encoding;
            } else {
              return null;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].standalone === "yes";
            } else {
              return false;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].version;
            } else {
              return "1.0";
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "URL", {
          get: function() {
            return this.documentURI;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "origin", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "compatMode", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "characterSet", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "contentType", {
          get: function() {
            return null;
          }
        });
        return XMLDocument2;
      }).call(this);
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocumentCB.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
      ({ isObject, isFunction, isPlainObject, getValue } = require_Utility());
      NodeType = require_NodeType();
      XMLDocument = require_XMLDocument();
      XMLElement = require_XMLElement();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLAttribute = require_XMLAttribute();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      WriterState = require_WriterState();
      module.exports = XMLDocumentCB = class XMLDocumentCB {
        // Initializes a new instance of `XMLDocumentCB`
        // `options.keepNullNodes` whether nodes with null values will be kept
        //     or ignored: true or false
        // `options.keepNullAttributes` whether attributes with null values will be
        //     kept or ignored: true or false
        // `options.ignoreDecorators` whether decorator strings will be ignored when
        //     converting JS objects: true or false
        // `options.separateArrayItems` whether array items are created as separate
        //     nodes when passed as an object value: true or false
        // `options.noDoubleEncoding` whether existing html entities are encoded:
        //     true or false
        // `options.stringify` a set of functions to use for converting values to
        //     strings
        // `options.writer` the default XML writer to use for converting nodes to
        //     string. If the default writer is not set, the built-in XMLStringWriter
        //     will be used instead.
        // `onData` the function to be called when a new chunk of XML is output. The
        //          string containing the XML chunk is passed to `onData` as its first
        //          argument, and the current indentation level as its second argument.
        // `onEnd`  the function to be called when the XML document is completed with
        //          `end`. `onEnd` does not receive any arguments.
        constructor(options, onData, onEnd) {
          var writerOptions;
          this.name = "?xml";
          this.type = NodeType.Document;
          options || (options = {});
          writerOptions = {};
          if (!options.writer) {
            options.writer = new XMLStringWriter();
          } else if (isPlainObject(options.writer)) {
            writerOptions = options.writer;
            options.writer = new XMLStringWriter();
          }
          this.options = options;
          this.writer = options.writer;
          this.writerOptions = this.writer.filterOptions(writerOptions);
          this.stringify = new XMLStringifier(options);
          this.onDataCallback = onData || function() {
          };
          this.onEndCallback = onEnd || function() {
          };
          this.currentNode = null;
          this.currentLevel = -1;
          this.openTags = {};
          this.documentStarted = false;
          this.documentCompleted = false;
          this.root = null;
        }
        // Creates a child element node from the given XMLNode
        // `node` the child node
        createChildNode(node) {
          var att, attName, attributes, child, i, len, ref, ref1;
          switch (node.type) {
            case NodeType.CData:
              this.cdata(node.value);
              break;
            case NodeType.Comment:
              this.comment(node.value);
              break;
            case NodeType.Element:
              attributes = {};
              ref = node.attribs;
              for (attName in ref) {
                if (!hasProp.call(ref, attName)) continue;
                att = ref[attName];
                attributes[attName] = att.value;
              }
              this.node(node.name, attributes);
              break;
            case NodeType.Dummy:
              this.dummy();
              break;
            case NodeType.Raw:
              this.raw(node.value);
              break;
            case NodeType.Text:
              this.text(node.value);
              break;
            case NodeType.ProcessingInstruction:
              this.instruction(node.target, node.value);
              break;
            default:
              throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
          }
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            this.createChildNode(child);
            if (child.type === NodeType.Element) {
              this.up();
            }
          }
          return this;
        }
        // Creates a dummy node
        dummy() {
          return this;
        }
        // Creates a node
        // `name` name of the node
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text
        node(name, attributes, text) {
          if (name == null) {
            throw new Error("Missing node name.");
          }
          if (this.root && this.currentLevel === -1) {
            throw new Error("Document can only have one root node. " + this.debugInfo(name));
          }
          this.openCurrent();
          name = getValue(name);
          if (attributes == null) {
            attributes = {};
          }
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            [text, attributes] = [attributes, text];
          }
          this.currentNode = new XMLElement(this, name, attributes);
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          if (text != null) {
            this.text(text);
          }
          return this;
        }
        // Creates a child element node or an element type declaration when called
        // inside the DTD
        // `name` name of the node
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text
        element(name, attributes, text) {
          var child, i, len, oldValidationFlag, ref, root;
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            this.dtdElement(...arguments);
          } else {
            if (Array.isArray(name) || isObject(name) || isFunction(name)) {
              oldValidationFlag = this.options.noValidation;
              this.options.noValidation = true;
              root = new XMLDocument(this.options).element("TEMP_ROOT");
              root.element(name);
              this.options.noValidation = oldValidationFlag;
              ref = root.children;
              for (i = 0, len = ref.length; i < len; i++) {
                child = ref[i];
                this.createChildNode(child);
                if (child.type === NodeType.Element) {
                  this.up();
                }
              }
            } else {
              this.node(name, attributes, text);
            }
          }
          return this;
        }
        // Adds or modifies an attribute
        // `name` attribute name
        // `value` attribute value
        attribute(name, value) {
          var attName, attValue;
          if (!this.currentNode || this.currentNode.children) {
            throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
          }
          if (name != null) {
            name = getValue(name);
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName)) continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (this.options.keepNullAttributes && value == null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        }
        // Creates a text node
        // `value` element text
        text(value) {
          var node;
          this.openCurrent();
          node = new XMLText(this, value);
          this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a CDATA node
        // `value` element text without CDATA delimiters
        cdata(value) {
          var node;
          this.openCurrent();
          node = new XMLCData(this, value);
          this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a comment node
        // `value` comment text
        comment(value) {
          var node;
          this.openCurrent();
          node = new XMLComment(this, value);
          this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Adds unescaped raw text
        // `value` text
        raw(value) {
          var node;
          this.openCurrent();
          node = new XMLRaw(this, value);
          this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Adds a processing instruction
        // `target` instruction target
        // `value` instruction value
        instruction(target, value) {
          var i, insTarget, insValue, len, node;
          this.openCurrent();
          if (target != null) {
            target = getValue(target);
          }
          if (value != null) {
            value = getValue(value);
          }
          if (Array.isArray(target)) {
            for (i = 0, len = target.length; i < len; i++) {
              insTarget = target[i];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget)) continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            node = new XMLProcessingInstruction(this, target, value);
            this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          }
          return this;
        }
        // Creates the xml declaration
        // `version` A version number string, e.g. 1.0
        // `encoding` Encoding declaration, e.g. UTF-8
        // `standalone` standalone document declaration: true or false
        declaration(version2, encoding, standalone) {
          var node;
          this.openCurrent();
          if (this.documentStarted) {
            throw new Error("declaration() must be the first node.");
          }
          node = new XMLDeclaration(this, version2, encoding, standalone);
          this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates the document type declaration
        // `root`  the name of the root node
        // `pubID` the public identifier of the external subset
        // `sysID` the system identifier of the external subset
        doctype(root, pubID, sysID) {
          this.openCurrent();
          if (root == null) {
            throw new Error("Missing root node name.");
          }
          if (this.root) {
            throw new Error("dtd() must come before the root node.");
          }
          this.currentNode = new XMLDocType(this, pubID, sysID);
          this.currentNode.rootNodeName = root;
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          return this;
        }
        // Creates an element type declaration
        // `name` element name
        // `value` element content (defaults to #PCDATA)
        dtdElement(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDElement(this, name, value);
          this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates an attribute declaration
        // `elementName` the name of the element containing this attribute
        // `attributeName` attribute name
        // `attributeType` type of the attribute (defaults to CDATA)
        // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
        //                    #DEFAULT) (defaults to #IMPLIED)
        // `defaultValue` default value of the attribute
        //                (only used for #FIXED or #DEFAULT)
        attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var node;
          this.openCurrent();
          node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a general entity declaration
        // `name` the name of the entity
        // `value` internal entity value or an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier
        // `value.nData` notation declaration
        entity(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, false, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a parameter entity declaration
        // `name` the name of the entity
        // `value` internal entity value or an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier
        pEntity(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, true, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a NOTATION declaration
        // `name` the name of the notation
        // `value` an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier
        notation(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDNotation(this, name, value);
          this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Gets the parent node
        up() {
          if (this.currentLevel < 0) {
            throw new Error("The document node has no parent.");
          }
          if (this.currentNode) {
            if (this.currentNode.children) {
              this.closeNode(this.currentNode);
            } else {
              this.openNode(this.currentNode);
            }
            this.currentNode = null;
          } else {
            this.closeNode(this.openTags[this.currentLevel]);
          }
          delete this.openTags[this.currentLevel];
          this.currentLevel--;
          return this;
        }
        // Ends the document
        end() {
          while (this.currentLevel >= 0) {
            this.up();
          }
          return this.onEnd();
        }
        // Opens the current parent node
        openCurrent() {
          if (this.currentNode) {
            this.currentNode.children = true;
            return this.openNode(this.currentNode);
          }
        }
        // Writes the opening tag of the current node or the entire node if it has
        // no child nodes
        openNode(node) {
          var att, chunk, name, ref;
          if (!node.isOpen) {
            if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
              this.root = node;
            }
            chunk = "";
            if (node.type === NodeType.Element) {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
              ref = node.attribs;
              for (name in ref) {
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
              }
              chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
              this.writerOptions.state = WriterState.InsideTag;
            } else {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
              if (node.pubID && node.sysID) {
                chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
              } else if (node.sysID) {
                chunk += ' SYSTEM "' + node.sysID + '"';
              }
              if (node.children) {
                chunk += " [";
                this.writerOptions.state = WriterState.InsideTag;
              } else {
                this.writerOptions.state = WriterState.CloseTag;
                chunk += ">";
              }
              chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.onData(chunk, this.currentLevel);
            return node.isOpen = true;
          }
        }
        // Writes the closing tag of the current node
        closeNode(node) {
          var chunk;
          if (!node.isClosed) {
            chunk = "";
            this.writerOptions.state = WriterState.CloseTag;
            if (node.type === NodeType.Element) {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            } else {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.writerOptions.state = WriterState.None;
            this.onData(chunk, this.currentLevel);
            return node.isClosed = true;
          }
        }
        // Called when a new chunk of XML is output
        // `chunk` a string containing the XML chunk
        // `level` current indentation level
        onData(chunk, level) {
          this.documentStarted = true;
          return this.onDataCallback(chunk, level + 1);
        }
        // Called when the XML document is completed
        onEnd() {
          this.documentCompleted = true;
          return this.onEndCallback();
        }
        // Returns debug string
        debugInfo(name) {
          if (name == null) {
            return "";
          } else {
            return "node: <" + name + ">";
          }
        }
        // Node aliases
        ele() {
          return this.element(...arguments);
        }
        nod(name, attributes, text) {
          return this.node(name, attributes, text);
        }
        txt(value) {
          return this.text(value);
        }
        dat(value) {
          return this.cdata(value);
        }
        com(value) {
          return this.comment(value);
        }
        ins(target, value) {
          return this.instruction(target, value);
        }
        dec(version2, encoding, standalone) {
          return this.declaration(version2, encoding, standalone);
        }
        dtd(root, pubID, sysID) {
          return this.doctype(root, pubID, sysID);
        }
        e(name, attributes, text) {
          return this.element(name, attributes, text);
        }
        n(name, attributes, text) {
          return this.node(name, attributes, text);
        }
        t(value) {
          return this.text(value);
        }
        d(value) {
          return this.cdata(value);
        }
        c(value) {
          return this.comment(value);
        }
        r(value) {
          return this.raw(value);
        }
        i(target, value) {
          return this.instruction(target, value);
        }
        // Attribute aliases
        att() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList(...arguments);
          } else {
            return this.attribute(...arguments);
          }
        }
        a() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList(...arguments);
          } else {
            return this.attribute(...arguments);
          }
        }
        // DTD aliases
        // att() and ele() are defined above
        ent(name, value) {
          return this.entity(name, value);
        }
        pent(name, value) {
          return this.pEntity(name, value);
        }
        not(name, value) {
          return this.notation(name, value);
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStreamWriter.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLWriterBase = require_XMLWriterBase();
      WriterState = require_WriterState();
      module.exports = XMLStreamWriter = class XMLStreamWriter extends XMLWriterBase {
        // Initializes a new instance of `XMLStreamWriter`
        // `stream` output stream
        // `options.pretty` pretty prints the result
        // `options.indent` indentation string
        // `options.newline` newline sequence
        // `options.offset` a fixed number of indentations to add to every line
        // `options.allowEmpty` do not self close empty element tags
        // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
        // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
        constructor(stream, options) {
          super(options);
          this.stream = stream;
        }
        endline(node, options, level) {
          if (node.isLastRootNode && options.state === WriterState.CloseTag) {
            return "";
          } else {
            return super.endline(node, options, level);
          }
        }
        document(doc, options) {
          var child, i, j, k, len1, len2, ref, ref1, results;
          ref = doc.children;
          for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
            child = ref[i];
            child.isLastRootNode = i === doc.children.length - 1;
          }
          options = this.filterOptions(options);
          ref1 = doc.children;
          results = [];
          for (k = 0, len2 = ref1.length; k < len2; k++) {
            child = ref1[k];
            results.push(this.writeChildNode(child, options, 0));
          }
          return results;
        }
        cdata(node, options, level) {
          return this.stream.write(super.cdata(node, options, level));
        }
        comment(node, options, level) {
          return this.stream.write(super.comment(node, options, level));
        }
        declaration(node, options, level) {
          return this.stream.write(super.declaration(node, options, level));
        }
        docType(node, options, level) {
          var child, j, len1, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          this.stream.write(this.indent(node, options, level));
          this.stream.write("<!DOCTYPE " + node.root().name);
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.children.length > 0) {
            this.stream.write(" [");
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (j = 0, len1 = ref.length; j < len1; j++) {
              child = ref[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write("]");
          }
          options.state = WriterState.CloseTag;
          this.stream.write(options.spaceBeforeSlash + ">");
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        }
        element(node, options, level) {
          var att, attLen, child, childNodeCount, firstChildNode, j, len, len1, name, prettySuppressed, r, ratt, ref, ref1, ref2, rline;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<" + node.name;
          if (options.pretty && options.width > 0) {
            len = r.length;
            ref = node.attribs;
            for (name in ref) {
              if (!hasProp.call(ref, name)) continue;
              att = ref[name];
              ratt = this.attribute(att, options, level);
              attLen = ratt.length;
              if (len + attLen > options.width) {
                rline = this.indent(node, options, level + 1) + ratt;
                r += this.endline(node, options, level) + rline;
                len = rline.length;
              } else {
                rline = " " + ratt;
                r += rline;
                len += rline.length;
              }
            }
          } else {
            ref1 = node.attribs;
            for (name in ref1) {
              if (!hasProp.call(ref1, name)) continue;
              att = ref1[name];
              r += this.attribute(att, options, level);
            }
          }
          this.stream.write(r);
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
          })) {
            if (options.allowEmpty) {
              this.stream.write(">");
              options.state = WriterState.CloseTag;
              this.stream.write("</" + node.name + ">");
            } else {
              options.state = WriterState.CloseTag;
              this.stream.write(options.spaceBeforeSlash + "/>");
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
            this.stream.write(">");
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            this.stream.write("</" + node.name + ">");
          } else {
            this.stream.write(">" + this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref2 = node.children;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              child = ref2[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
          }
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        }
        processingInstruction(node, options, level) {
          return this.stream.write(super.processingInstruction(node, options, level));
        }
        raw(node, options, level) {
          return this.stream.write(super.raw(node, options, level));
        }
        text(node, options, level) {
          return this.stream.write(super.text(node, options, level));
        }
        dtdAttList(node, options, level) {
          return this.stream.write(super.dtdAttList(node, options, level));
        }
        dtdElement(node, options, level) {
          return this.stream.write(super.dtdElement(node, options, level));
        }
        dtdEntity(node, options, level) {
          return this.stream.write(super.dtdEntity(node, options, level));
        }
        dtdNotation(node, options, level) {
          return this.stream.write(super.dtdNotation(node, options, level));
        }
      };
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/index.js"(exports2, module) {
    "use strict";
    (function() {
      var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction;
      ({ assign, isFunction } = require_Utility());
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDocument = require_XMLDocument();
      XMLDocumentCB = require_XMLDocumentCB();
      XMLStringWriter = require_XMLStringWriter();
      XMLStreamWriter = require_XMLStreamWriter();
      NodeType = require_NodeType();
      WriterState = require_WriterState();
      module.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) {
          throw new Error("Root element needs a name.");
        }
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
          doc.declaration(options);
          if (options.pubID != null || options.sysID != null) {
            doc.dtd(options);
          }
        }
        return root;
      };
      module.exports.begin = function(options, onData, onEnd) {
        if (isFunction(options)) {
          [onData, onEnd] = [options, onData];
          options = {};
        }
        if (onData) {
          return new XMLDocumentCB(options, onData, onEnd);
        } else {
          return new XMLDocument(options);
        }
      };
      module.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
      };
      module.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
      };
      module.exports.implementation = new XMLDOMImplementation();
      module.exports.nodeType = NodeType;
      module.exports.writerState = WriterState;
    }).call(exports2);
  }
});

// ../../node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/build.js
var require_build = __commonJS({
  "../../node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/build.js"(exports2) {
    "use strict";
    var base64 = require_base64_js();
    var xmlbuilder = require_lib2();
    exports2.build = build;
    function ISODateString(d) {
      function pad(n) {
        return n < 10 ? "0" + n : n;
      }
      return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "Z";
    }
    var toString = Object.prototype.toString;
    function type(obj) {
      var m = toString.call(obj).match(/\[object (.*)\]/);
      return m ? m[1] : m;
    }
    function build(obj, opts) {
      var XMLHDR = {
        version: "1.0",
        encoding: "UTF-8"
      };
      var XMLDTD = {
        pubid: "-//Apple//DTD PLIST 1.0//EN",
        sysid: "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
      };
      var doc = xmlbuilder.create("plist");
      doc.dec(XMLHDR.version, XMLHDR.encoding, XMLHDR.standalone);
      doc.dtd(XMLDTD.pubid, XMLDTD.sysid);
      doc.att("version", "1.0");
      walk_obj(obj, doc);
      if (!opts) opts = {};
      opts.pretty = opts.pretty !== false;
      return doc.end(opts);
    }
    function walk_obj(next, next_child) {
      var tag_type, i, prop;
      var name = type(next);
      if ("Undefined" == name) {
        return;
      } else if (Array.isArray(next)) {
        next_child = next_child.ele("array");
        for (i = 0; i < next.length; i++) {
          walk_obj(next[i], next_child);
        }
      } else if (Buffer.isBuffer(next)) {
        next_child.ele("data").raw(next.toString("base64"));
      } else if ("Object" == name) {
        next_child = next_child.ele("dict");
        for (prop in next) {
          if (next.hasOwnProperty(prop)) {
            next_child.ele("key").txt(prop);
            walk_obj(next[prop], next_child);
          }
        }
      } else if ("Number" == name) {
        tag_type = next % 1 === 0 ? "integer" : "real";
        next_child.ele(tag_type).txt(next.toString());
      } else if ("BigInt" == name) {
        next_child.ele("integer").txt(next);
      } else if ("Date" == name) {
        next_child.ele("date").txt(ISODateString(new Date(next)));
      } else if ("Boolean" == name) {
        next_child.ele(next ? "true" : "false");
      } else if ("String" == name) {
        next_child.ele("string").txt(next);
      } else if ("ArrayBuffer" == name) {
        next_child.ele("data").raw(base64.fromByteArray(next));
      } else if (next && next.buffer && "ArrayBuffer" == type(next.buffer)) {
        next_child.ele("data").raw(base64.fromByteArray(new Uint8Array(next.buffer), next_child));
      } else if ("Null" === name) {
        next_child.ele("null").txt("");
      }
    }
  }
});

// ../../node_modules/.pnpm/plist@3.1.0/node_modules/plist/index.js
var require_plist = __commonJS({
  "../../node_modules/.pnpm/plist@3.1.0/node_modules/plist/index.js"(exports2) {
    "use strict";
    var parserFunctions = require_parse();
    Object.keys(parserFunctions).forEach(function(k) {
      exports2[k] = parserFunctions[k];
    });
    var builderFunctions = require_build();
    Object.keys(builderFunctions).forEach(function(k) {
      exports2[k] = builderFunctions[k];
    });
  }
});

// ../../node_modules/.pnpm/big-integer@1.6.52/node_modules/big-integer/BigInteger.js
var require_BigInteger = __commonJS({
  "../../node_modules/.pnpm/big-integer@1.6.52/node_modules/big-integer/BigInteger.js"(exports2, module) {
    "use strict";
    var bigInt = (function(undefined2) {
      "use strict";
      var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
      var supportsNativeBigInt = typeof BigInt === "function";
      function Integer(v, radix, alphabet, caseSensitive) {
        if (typeof v === "undefined") return Integer[0];
        if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue2(v) : parseBase(v, radix, alphabet, caseSensitive);
        return parseValue2(v);
      }
      function BigInteger(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
      }
      BigInteger.prototype = Object.create(Integer.prototype);
      function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
      }
      SmallInteger.prototype = Object.create(Integer.prototype);
      function NativeBigInt(value) {
        this.value = value;
      }
      NativeBigInt.prototype = Object.create(Integer.prototype);
      function isPrecise(n) {
        return -MAX_INT < n && n < MAX_INT;
      }
      function smallToArray(n) {
        if (n < 1e7)
          return [n];
        if (n < 1e14)
          return [n % 1e7, Math.floor(n / 1e7)];
        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
      }
      function arrayToSmall(arr) {
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
          switch (length) {
            case 0:
              return 0;
            case 1:
              return arr[0];
            case 2:
              return arr[0] + arr[1] * BASE;
            default:
              return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
          }
        }
        return arr;
      }
      function trim(v) {
        var i2 = v.length;
        while (v[--i2] === 0) ;
        v.length = i2 + 1;
      }
      function createArray(length) {
        var x = new Array(length);
        var i2 = -1;
        while (++i2 < length) {
          x[i2] = 0;
        }
        return x;
      }
      function truncate(n) {
        if (n > 0) return Math.floor(n);
        return Math.ceil(n);
      }
      function add(a, b) {
        var l_a = a.length, l_b = b.length, r = new Array(l_a), carry = 0, base = BASE, sum, i2;
        for (i2 = 0; i2 < l_b; i2++) {
          sum = a[i2] + b[i2] + carry;
          carry = sum >= base ? 1 : 0;
          r[i2] = sum - carry * base;
        }
        while (i2 < l_a) {
          sum = a[i2] + carry;
          carry = sum === base ? 1 : 0;
          r[i2++] = sum - carry * base;
        }
        if (carry > 0) r.push(carry);
        return r;
      }
      function addAny(a, b) {
        if (a.length >= b.length) return add(a, b);
        return add(b, a);
      }
      function addSmall(a, carry) {
        var l = a.length, r = new Array(l), base = BASE, sum, i2;
        for (i2 = 0; i2 < l; i2++) {
          sum = a[i2] - base + carry;
          carry = Math.floor(sum / base);
          r[i2] = sum - carry * base;
          carry += 1;
        }
        while (carry > 0) {
          r[i2++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r;
      }
      BigInteger.prototype.add = function(v) {
        var n = parseValue2(v);
        if (this.sign !== n.sign) {
          return this.subtract(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall) {
          return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
        }
        return new BigInteger(addAny(a, b), this.sign);
      };
      BigInteger.prototype.plus = BigInteger.prototype.add;
      SmallInteger.prototype.add = function(v) {
        var n = parseValue2(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
          return this.subtract(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
          if (isPrecise(a + b)) return new SmallInteger(a + b);
          b = smallToArray(Math.abs(b));
        }
        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
      };
      SmallInteger.prototype.plus = SmallInteger.prototype.add;
      NativeBigInt.prototype.add = function(v) {
        return new NativeBigInt(this.value + parseValue2(v).value);
      };
      NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
      function subtract(a, b) {
        var a_l = a.length, b_l = b.length, r = new Array(a_l), borrow = 0, base = BASE, i2, difference;
        for (i2 = 0; i2 < b_l; i2++) {
          difference = a[i2] - borrow - b[i2];
          if (difference < 0) {
            difference += base;
            borrow = 1;
          } else borrow = 0;
          r[i2] = difference;
        }
        for (i2 = b_l; i2 < a_l; i2++) {
          difference = a[i2] - borrow;
          if (difference < 0) difference += base;
          else {
            r[i2++] = difference;
            break;
          }
          r[i2] = difference;
        }
        for (; i2 < a_l; i2++) {
          r[i2] = a[i2];
        }
        trim(r);
        return r;
      }
      function subtractAny(a, b, sign) {
        var value;
        if (compareAbs(a, b) >= 0) {
          value = subtract(a, b);
        } else {
          value = subtract(b, a);
          sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
          if (sign) value = -value;
          return new SmallInteger(value);
        }
        return new BigInteger(value, sign);
      }
      function subtractSmall(a, b, sign) {
        var l = a.length, r = new Array(l), carry = -b, base = BASE, i2, difference;
        for (i2 = 0; i2 < l; i2++) {
          difference = a[i2] + carry;
          carry = Math.floor(difference / base);
          difference %= base;
          r[i2] = difference < 0 ? difference + base : difference;
        }
        r = arrayToSmall(r);
        if (typeof r === "number") {
          if (sign) r = -r;
          return new SmallInteger(r);
        }
        return new BigInteger(r, sign);
      }
      BigInteger.prototype.subtract = function(v) {
        var n = parseValue2(v);
        if (this.sign !== n.sign) {
          return this.add(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall)
          return subtractSmall(a, Math.abs(b), this.sign);
        return subtractAny(a, b, this.sign);
      };
      BigInteger.prototype.minus = BigInteger.prototype.subtract;
      SmallInteger.prototype.subtract = function(v) {
        var n = parseValue2(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
          return this.add(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
          return new SmallInteger(a - b);
        }
        return subtractSmall(b, Math.abs(a), a >= 0);
      };
      SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
      NativeBigInt.prototype.subtract = function(v) {
        return new NativeBigInt(this.value - parseValue2(v).value);
      };
      NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
      BigInteger.prototype.negate = function() {
        return new BigInteger(this.value, !this.sign);
      };
      SmallInteger.prototype.negate = function() {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
      };
      NativeBigInt.prototype.negate = function() {
        return new NativeBigInt(-this.value);
      };
      BigInteger.prototype.abs = function() {
        return new BigInteger(this.value, false);
      };
      SmallInteger.prototype.abs = function() {
        return new SmallInteger(Math.abs(this.value));
      };
      NativeBigInt.prototype.abs = function() {
        return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
      };
      function multiplyLong(a, b) {
        var a_l = a.length, b_l = b.length, l = a_l + b_l, r = createArray(l), base = BASE, product, carry, i2, a_i, b_j;
        for (i2 = 0; i2 < a_l; ++i2) {
          a_i = a[i2];
          for (var j = 0; j < b_l; ++j) {
            b_j = b[j];
            product = a_i * b_j + r[i2 + j];
            carry = Math.floor(product / base);
            r[i2 + j] = product - carry * base;
            r[i2 + j + 1] += carry;
          }
        }
        trim(r);
        return r;
      }
      function multiplySmall(a, b) {
        var l = a.length, r = new Array(l), base = BASE, carry = 0, product, i2;
        for (i2 = 0; i2 < l; i2++) {
          product = a[i2] * b + carry;
          carry = Math.floor(product / base);
          r[i2] = product - carry * base;
        }
        while (carry > 0) {
          r[i2++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r;
      }
      function shiftLeft(x, n) {
        var r = [];
        while (n-- > 0) r.push(0);
        return r.concat(x);
      }
      function multiplyKaratsuba(x, y) {
        var n = Math.max(x.length, y.length);
        if (n <= 30) return multiplyLong(x, y);
        n = Math.ceil(n / 2);
        var b = x.slice(n), a = x.slice(0, n), d = y.slice(n), c2 = y.slice(0, n);
        var ac = multiplyKaratsuba(a, c2), bd = multiplyKaratsuba(b, d), abcd = multiplyKaratsuba(addAny(a, b), addAny(c2, d));
        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
        trim(product);
        return product;
      }
      function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 15e-6 * l1 * l2 > 0;
      }
      BigInteger.prototype.multiply = function(v) {
        var n = parseValue2(v), a = this.value, b = n.value, sign = this.sign !== n.sign, abs;
        if (n.isSmall) {
          if (b === 0) return Integer[0];
          if (b === 1) return this;
          if (b === -1) return this.negate();
          abs = Math.abs(b);
          if (abs < BASE) {
            return new BigInteger(multiplySmall(a, abs), sign);
          }
          b = smallToArray(abs);
        }
        if (useKaratsuba(a.length, b.length))
          return new BigInteger(multiplyKaratsuba(a, b), sign);
        return new BigInteger(multiplyLong(a, b), sign);
      };
      BigInteger.prototype.times = BigInteger.prototype.multiply;
      function multiplySmallAndArray(a, b, sign) {
        if (a < BASE) {
          return new BigInteger(multiplySmall(b, a), sign);
        }
        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
      }
      SmallInteger.prototype._multiplyBySmall = function(a) {
        if (isPrecise(a.value * this.value)) {
          return new SmallInteger(a.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
      };
      BigInteger.prototype._multiplyBySmall = function(a) {
        if (a.value === 0) return Integer[0];
        if (a.value === 1) return this;
        if (a.value === -1) return this.negate();
        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
      };
      SmallInteger.prototype.multiply = function(v) {
        return parseValue2(v)._multiplyBySmall(this);
      };
      SmallInteger.prototype.times = SmallInteger.prototype.multiply;
      NativeBigInt.prototype.multiply = function(v) {
        return new NativeBigInt(this.value * parseValue2(v).value);
      };
      NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
      function square(a) {
        var l = a.length, r = createArray(l + l), base = BASE, product, carry, i2, a_i, a_j;
        for (i2 = 0; i2 < l; i2++) {
          a_i = a[i2];
          carry = 0 - a_i * a_i;
          for (var j = i2; j < l; j++) {
            a_j = a[j];
            product = 2 * (a_i * a_j) + r[i2 + j] + carry;
            carry = Math.floor(product / base);
            r[i2 + j] = product - carry * base;
          }
          r[i2 + l] = carry;
        }
        trim(r);
        return r;
      }
      BigInteger.prototype.square = function() {
        return new BigInteger(square(this.value), false);
      };
      SmallInteger.prototype.square = function() {
        var value = this.value * this.value;
        if (isPrecise(value)) return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
      };
      NativeBigInt.prototype.square = function(v) {
        return new NativeBigInt(this.value * this.value);
      };
      function divMod1(a, b) {
        var a_l = a.length, b_l = b.length, base = BASE, result = createArray(b.length), divisorMostSignificantDigit = b[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a, lambda), divisor = multiplySmall(b, lambda), quotientDigit, shift, carry, borrow, i2, l, q;
        if (remainder.length <= a_l) remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
          quotientDigit = base - 1;
          if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
            quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
          }
          carry = 0;
          borrow = 0;
          l = divisor.length;
          for (i2 = 0; i2 < l; i2++) {
            carry += quotientDigit * divisor[i2];
            q = Math.floor(carry / base);
            borrow += remainder[shift + i2] - (carry - q * base);
            carry = q;
            if (borrow < 0) {
              remainder[shift + i2] = borrow + base;
              borrow = -1;
            } else {
              remainder[shift + i2] = borrow;
              borrow = 0;
            }
          }
          while (borrow !== 0) {
            quotientDigit -= 1;
            carry = 0;
            for (i2 = 0; i2 < l; i2++) {
              carry += remainder[shift + i2] - base + divisor[i2];
              if (carry < 0) {
                remainder[shift + i2] = carry + base;
                carry = 0;
              } else {
                remainder[shift + i2] = carry;
                carry = 1;
              }
            }
            borrow += carry;
          }
          result[shift] = quotientDigit;
        }
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
      }
      function divMod2(a, b) {
        var a_l = a.length, b_l = b.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
        while (a_l) {
          part.unshift(a[--a_l]);
          trim(part);
          if (compareAbs(part, b) < 0) {
            result.push(0);
            continue;
          }
          xlen = part.length;
          highx = part[xlen - 1] * base + part[xlen - 2];
          highy = b[b_l - 1] * base + b[b_l - 2];
          if (xlen > b_l) {
            highx = (highx + 1) * base;
          }
          guess = Math.ceil(highx / highy);
          do {
            check = multiplySmall(b, guess);
            if (compareAbs(check, part) <= 0) break;
            guess--;
          } while (guess);
          result.push(guess);
          part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
      }
      function divModSmall(value, lambda) {
        var length = value.length, quotient = createArray(length), base = BASE, i2, q, remainder, divisor;
        remainder = 0;
        for (i2 = length - 1; i2 >= 0; --i2) {
          divisor = remainder * base + value[i2];
          q = truncate(divisor / lambda);
          remainder = divisor - q * lambda;
          quotient[i2] = q | 0;
        }
        return [quotient, remainder | 0];
      }
      function divModAny(self, v) {
        var value, n = parseValue2(v);
        if (supportsNativeBigInt) {
          return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
        }
        var a = self.value, b = n.value;
        var quotient;
        if (b === 0) throw new Error("Cannot divide by zero");
        if (self.isSmall) {
          if (n.isSmall) {
            return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
          }
          return [Integer[0], self];
        }
        if (n.isSmall) {
          if (b === 1) return [self, Integer[0]];
          if (b == -1) return [self.negate(), Integer[0]];
          var abs = Math.abs(b);
          if (abs < BASE) {
            value = divModSmall(a, abs);
            quotient = arrayToSmall(value[0]);
            var remainder = value[1];
            if (self.sign) remainder = -remainder;
            if (typeof quotient === "number") {
              if (self.sign !== n.sign) quotient = -quotient;
              return [new SmallInteger(quotient), new SmallInteger(remainder)];
            }
            return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
          }
          b = smallToArray(abs);
        }
        var comparison = compareAbs(a, b);
        if (comparison === -1) return [Integer[0], self];
        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];
        if (a.length + b.length <= 200)
          value = divMod1(a, b);
        else value = divMod2(a, b);
        quotient = value[0];
        var qSign = self.sign !== n.sign, mod = value[1], mSign = self.sign;
        if (typeof quotient === "number") {
          if (qSign) quotient = -quotient;
          quotient = new SmallInteger(quotient);
        } else quotient = new BigInteger(quotient, qSign);
        if (typeof mod === "number") {
          if (mSign) mod = -mod;
          mod = new SmallInteger(mod);
        } else mod = new BigInteger(mod, mSign);
        return [quotient, mod];
      }
      BigInteger.prototype.divmod = function(v) {
        var result = divModAny(this, v);
        return {
          quotient: result[0],
          remainder: result[1]
        };
      };
      NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
      BigInteger.prototype.divide = function(v) {
        return divModAny(this, v)[0];
      };
      NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v) {
        return new NativeBigInt(this.value / parseValue2(v).value);
      };
      SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
      BigInteger.prototype.mod = function(v) {
        return divModAny(this, v)[1];
      };
      NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v) {
        return new NativeBigInt(this.value % parseValue2(v).value);
      };
      SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
      BigInteger.prototype.pow = function(v) {
        var n = parseValue2(v), a = this.value, b = n.value, value, x, y;
        if (b === 0) return Integer[1];
        if (a === 0) return Integer[0];
        if (a === 1) return Integer[1];
        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.sign) {
          return Integer[0];
        }
        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
        if (this.isSmall) {
          if (isPrecise(value = Math.pow(a, b)))
            return new SmallInteger(truncate(value));
        }
        x = this;
        y = Integer[1];
        while (true) {
          if (b & true) {
            y = y.times(x);
            --b;
          }
          if (b === 0) break;
          b /= 2;
          x = x.square();
        }
        return y;
      };
      SmallInteger.prototype.pow = BigInteger.prototype.pow;
      NativeBigInt.prototype.pow = function(v) {
        var n = parseValue2(v);
        var a = this.value, b = n.value;
        var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
        if (b === _0) return Integer[1];
        if (a === _0) return Integer[0];
        if (a === _1) return Integer[1];
        if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.isNegative()) return new NativeBigInt(_0);
        var x = this;
        var y = Integer[1];
        while (true) {
          if ((b & _1) === _1) {
            y = y.times(x);
            --b;
          }
          if (b === _0) break;
          b /= _2;
          x = x.square();
        }
        return y;
      };
      BigInteger.prototype.modPow = function(exp, mod) {
        exp = parseValue2(exp);
        mod = parseValue2(mod);
        if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
        var r = Integer[1], base = this.mod(mod);
        if (exp.isNegative()) {
          exp = exp.multiply(Integer[-1]);
          base = base.modInv(mod);
        }
        while (exp.isPositive()) {
          if (base.isZero()) return Integer[0];
          if (exp.isOdd()) r = r.multiply(base).mod(mod);
          exp = exp.divide(2);
          base = base.square().mod(mod);
        }
        return r;
      };
      NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
      function compareAbs(a, b) {
        if (a.length !== b.length) {
          return a.length > b.length ? 1 : -1;
        }
        for (var i2 = a.length - 1; i2 >= 0; i2--) {
          if (a[i2] !== b[i2]) return a[i2] > b[i2] ? 1 : -1;
        }
        return 0;
      }
      BigInteger.prototype.compareAbs = function(v) {
        var n = parseValue2(v), a = this.value, b = n.value;
        if (n.isSmall) return 1;
        return compareAbs(a, b);
      };
      SmallInteger.prototype.compareAbs = function(v) {
        var n = parseValue2(v), a = Math.abs(this.value), b = n.value;
        if (n.isSmall) {
          b = Math.abs(b);
          return a === b ? 0 : a > b ? 1 : -1;
        }
        return -1;
      };
      NativeBigInt.prototype.compareAbs = function(v) {
        var a = this.value;
        var b = parseValue2(v).value;
        a = a >= 0 ? a : -a;
        b = b >= 0 ? b : -b;
        return a === b ? 0 : a > b ? 1 : -1;
      };
      BigInteger.prototype.compare = function(v) {
        if (v === Infinity) {
          return -1;
        }
        if (v === -Infinity) {
          return 1;
        }
        var n = parseValue2(v), a = this.value, b = n.value;
        if (this.sign !== n.sign) {
          return n.sign ? 1 : -1;
        }
        if (n.isSmall) {
          return this.sign ? -1 : 1;
        }
        return compareAbs(a, b) * (this.sign ? -1 : 1);
      };
      BigInteger.prototype.compareTo = BigInteger.prototype.compare;
      SmallInteger.prototype.compare = function(v) {
        if (v === Infinity) {
          return -1;
        }
        if (v === -Infinity) {
          return 1;
        }
        var n = parseValue2(v), a = this.value, b = n.value;
        if (n.isSmall) {
          return a == b ? 0 : a > b ? 1 : -1;
        }
        if (a < 0 !== n.sign) {
          return a < 0 ? -1 : 1;
        }
        return a < 0 ? 1 : -1;
      };
      SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
      NativeBigInt.prototype.compare = function(v) {
        if (v === Infinity) {
          return -1;
        }
        if (v === -Infinity) {
          return 1;
        }
        var a = this.value;
        var b = parseValue2(v).value;
        return a === b ? 0 : a > b ? 1 : -1;
      };
      NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
      BigInteger.prototype.equals = function(v) {
        return this.compare(v) === 0;
      };
      NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
      BigInteger.prototype.notEquals = function(v) {
        return this.compare(v) !== 0;
      };
      NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
      BigInteger.prototype.greater = function(v) {
        return this.compare(v) > 0;
      };
      NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
      BigInteger.prototype.lesser = function(v) {
        return this.compare(v) < 0;
      };
      NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
      BigInteger.prototype.greaterOrEquals = function(v) {
        return this.compare(v) >= 0;
      };
      NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
      BigInteger.prototype.lesserOrEquals = function(v) {
        return this.compare(v) <= 0;
      };
      NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;
      BigInteger.prototype.isEven = function() {
        return (this.value[0] & 1) === 0;
      };
      SmallInteger.prototype.isEven = function() {
        return (this.value & 1) === 0;
      };
      NativeBigInt.prototype.isEven = function() {
        return (this.value & BigInt(1)) === BigInt(0);
      };
      BigInteger.prototype.isOdd = function() {
        return (this.value[0] & 1) === 1;
      };
      SmallInteger.prototype.isOdd = function() {
        return (this.value & 1) === 1;
      };
      NativeBigInt.prototype.isOdd = function() {
        return (this.value & BigInt(1)) === BigInt(1);
      };
      BigInteger.prototype.isPositive = function() {
        return !this.sign;
      };
      SmallInteger.prototype.isPositive = function() {
        return this.value > 0;
      };
      NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
      BigInteger.prototype.isNegative = function() {
        return this.sign;
      };
      SmallInteger.prototype.isNegative = function() {
        return this.value < 0;
      };
      NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
      BigInteger.prototype.isUnit = function() {
        return false;
      };
      SmallInteger.prototype.isUnit = function() {
        return Math.abs(this.value) === 1;
      };
      NativeBigInt.prototype.isUnit = function() {
        return this.abs().value === BigInt(1);
      };
      BigInteger.prototype.isZero = function() {
        return false;
      };
      SmallInteger.prototype.isZero = function() {
        return this.value === 0;
      };
      NativeBigInt.prototype.isZero = function() {
        return this.value === BigInt(0);
      };
      BigInteger.prototype.isDivisibleBy = function(v) {
        var n = parseValue2(v);
        if (n.isZero()) return false;
        if (n.isUnit()) return true;
        if (n.compareAbs(2) === 0) return this.isEven();
        return this.mod(n).isZero();
      };
      NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
      function isBasicPrime(v) {
        var n = v.abs();
        if (n.isUnit()) return false;
        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
        if (n.lesser(49)) return true;
      }
      function millerRabinTest(n, a) {
        var nPrev = n.prev(), b = nPrev, r = 0, d, t, i2, x;
        while (b.isEven()) b = b.divide(2), r++;
        next: for (i2 = 0; i2 < a.length; i2++) {
          if (n.lesser(a[i2])) continue;
          x = bigInt(a[i2]).modPow(b, n);
          if (x.isUnit() || x.equals(nPrev)) continue;
          for (d = r - 1; d != 0; d--) {
            x = x.square().mod(n);
            if (x.isUnit()) return false;
            if (x.equals(nPrev)) continue next;
          }
          return false;
        }
        return true;
      }
      BigInteger.prototype.isPrime = function(strict) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2) return isPrime;
        var n = this.abs();
        var bits = n.bitLength();
        if (bits <= 64)
          return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        var logN = Math.log(2) * bits.toJSNumber();
        var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
        for (var a = [], i2 = 0; i2 < t; i2++) {
          a.push(bigInt(i2 + 2));
        }
        return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
      BigInteger.prototype.isProbablePrime = function(iterations, rng) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2) return isPrime;
        var n = this.abs();
        var t = iterations === undefined2 ? 5 : iterations;
        for (var a = [], i2 = 0; i2 < t; i2++) {
          a.push(bigInt.randBetween(2, n.minus(2), rng));
        }
        return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
      BigInteger.prototype.modInv = function(n) {
        var t = bigInt.zero, newT = bigInt.one, r = parseValue2(n), newR = this.abs(), q, lastT, lastR;
        while (!newR.isZero()) {
          q = r.divide(newR);
          lastT = t;
          lastR = r;
          t = newT;
          r = newR;
          newT = lastT.subtract(q.multiply(newT));
          newR = lastR.subtract(q.multiply(newR));
        }
        if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
        if (t.compare(0) === -1) {
          t = t.add(n);
        }
        if (this.isNegative()) {
          return t.negate();
        }
        return t;
      };
      NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;
      BigInteger.prototype.next = function() {
        var value = this.value;
        if (this.sign) {
          return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
      };
      SmallInteger.prototype.next = function() {
        var value = this.value;
        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
      };
      NativeBigInt.prototype.next = function() {
        return new NativeBigInt(this.value + BigInt(1));
      };
      BigInteger.prototype.prev = function() {
        var value = this.value;
        if (this.sign) {
          return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
      };
      SmallInteger.prototype.prev = function() {
        var value = this.value;
        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
      };
      NativeBigInt.prototype.prev = function() {
        return new NativeBigInt(this.value - BigInt(1));
      };
      var powersOfTwo = [1];
      while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
      var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
      function shift_isSmall(n) {
        return Math.abs(n) <= BASE;
      }
      BigInteger.prototype.shiftLeft = function(v) {
        var n = parseValue2(v).toJSNumber();
        if (!shift_isSmall(n)) {
          throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0) return this.shiftRight(-n);
        var result = this;
        if (result.isZero()) return result;
        while (n >= powers2Length) {
          result = result.multiply(highestPower2);
          n -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n]);
      };
      NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
      BigInteger.prototype.shiftRight = function(v) {
        var remQuo;
        var n = parseValue2(v).toJSNumber();
        if (!shift_isSmall(n)) {
          throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0) return this.shiftLeft(-n);
        var result = this;
        while (n >= powers2Length) {
          if (result.isZero() || result.isNegative() && result.isUnit()) return result;
          remQuo = divModAny(result, highestPower2);
          result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
          n -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      };
      NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
      function bitwise(x, y, fn) {
        y = parseValue2(y);
        var xSign = x.isNegative(), ySign = y.isNegative();
        var xRem = xSign ? x.not() : x, yRem = ySign ? y.not() : y;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
          xDivMod = divModAny(xRem, highestPower2);
          xDigit = xDivMod[1].toJSNumber();
          if (xSign) {
            xDigit = highestPower2 - 1 - xDigit;
          }
          yDivMod = divModAny(yRem, highestPower2);
          yDigit = yDivMod[1].toJSNumber();
          if (ySign) {
            yDigit = highestPower2 - 1 - yDigit;
          }
          xRem = xDivMod[0];
          yRem = yDivMod[0];
          result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
        for (var i2 = result.length - 1; i2 >= 0; i2 -= 1) {
          sum = sum.multiply(highestPower2).add(bigInt(result[i2]));
        }
        return sum;
      }
      BigInteger.prototype.not = function() {
        return this.negate().prev();
      };
      NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
      BigInteger.prototype.and = function(n) {
        return bitwise(this, n, function(a, b) {
          return a & b;
        });
      };
      NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
      BigInteger.prototype.or = function(n) {
        return bitwise(this, n, function(a, b) {
          return a | b;
        });
      };
      NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
      BigInteger.prototype.xor = function(n) {
        return bitwise(this, n, function(a, b) {
          return a ^ b;
        });
      };
      NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
      var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
      function roughLOB(n) {
        var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : typeof v === "bigint" ? v | BigInt(LOBMASK_I) : v[0] + v[1] * BASE | LOBMASK_BI;
        return x & -x;
      }
      function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
          var tmp = integerLogarithm(value, base.square(base));
          var p = tmp.p;
          var e = tmp.e;
          var t = p.multiply(base);
          return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p, e: e * 2 };
        }
        return { p: bigInt(1), e: 0 };
      }
      BigInteger.prototype.bitLength = function() {
        var n = this;
        if (n.compareTo(bigInt(0)) < 0) {
          n = n.negate().subtract(bigInt(1));
        }
        if (n.compareTo(bigInt(0)) === 0) {
          return bigInt(0);
        }
        return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
      };
      NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
      function max(a, b) {
        a = parseValue2(a);
        b = parseValue2(b);
        return a.greater(b) ? a : b;
      }
      function min(a, b) {
        a = parseValue2(a);
        b = parseValue2(b);
        return a.lesser(b) ? a : b;
      }
      function gcd(a, b) {
        a = parseValue2(a).abs();
        b = parseValue2(b).abs();
        if (a.equals(b)) return a;
        if (a.isZero()) return b;
        if (b.isZero()) return a;
        var c2 = Integer[1], d, t;
        while (a.isEven() && b.isEven()) {
          d = min(roughLOB(a), roughLOB(b));
          a = a.divide(d);
          b = b.divide(d);
          c2 = c2.multiply(d);
        }
        while (a.isEven()) {
          a = a.divide(roughLOB(a));
        }
        do {
          while (b.isEven()) {
            b = b.divide(roughLOB(b));
          }
          if (a.greater(b)) {
            t = b;
            b = a;
            a = t;
          }
          b = b.subtract(a);
        } while (!b.isZero());
        return c2.isUnit() ? a : a.multiply(c2);
      }
      function lcm(a, b) {
        a = parseValue2(a).abs();
        b = parseValue2(b).abs();
        return a.divide(gcd(a, b)).multiply(b);
      }
      function randBetween(a, b, rng) {
        a = parseValue2(a);
        b = parseValue2(b);
        var usedRNG = rng || Math.random;
        var low = min(a, b), high = max(a, b);
        var range = high.subtract(low).add(1);
        if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
        var digits = toBase(range, BASE).value;
        var result = [], restricted = true;
        for (var i2 = 0; i2 < digits.length; i2++) {
          var top = restricted ? digits[i2] + (i2 + 1 < digits.length ? digits[i2 + 1] / BASE : 0) : BASE;
          var digit = truncate(usedRNG() * top);
          result.push(digit);
          if (digit < digits[i2]) restricted = false;
        }
        return low.add(Integer.fromArray(result, BASE, false));
      }
      var parseBase = function(text, base, alphabet, caseSensitive) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        text = String(text);
        if (!caseSensitive) {
          text = text.toLowerCase();
          alphabet = alphabet.toLowerCase();
        }
        var length = text.length;
        var i2;
        var absBase = Math.abs(base);
        var alphabetValues = {};
        for (i2 = 0; i2 < alphabet.length; i2++) {
          alphabetValues[alphabet[i2]] = i2;
        }
        for (i2 = 0; i2 < length; i2++) {
          var c2 = text[i2];
          if (c2 === "-") continue;
          if (c2 in alphabetValues) {
            if (alphabetValues[c2] >= absBase) {
              if (c2 === "1" && absBase === 1) continue;
              throw new Error(c2 + " is not a valid digit in base " + base + ".");
            }
          }
        }
        base = parseValue2(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i2 = isNegative ? 1 : 0; i2 < text.length; i2++) {
          var c2 = text[i2];
          if (c2 in alphabetValues) digits.push(parseValue2(alphabetValues[c2]));
          else if (c2 === "<") {
            var start = i2;
            do {
              i2++;
            } while (text[i2] !== ">" && i2 < text.length);
            digits.push(parseValue2(text.slice(start + 1, i2)));
          } else throw new Error(c2 + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
      };
      function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i2;
        for (i2 = digits.length - 1; i2 >= 0; i2--) {
          val = val.add(digits[i2].times(pow));
          pow = pow.times(base);
        }
        return isNegative ? val.negate() : val;
      }
      function stringify(digit, alphabet) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        if (digit < alphabet.length) {
          return alphabet[digit];
        }
        return "<" + digit + ">";
      }
      function toBase(n, base) {
        base = bigInt(base);
        if (base.isZero()) {
          if (n.isZero()) return { value: [0], isNegative: false };
          throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
          if (n.isZero()) return { value: [0], isNegative: false };
          if (n.isNegative())
            return {
              value: [].concat.apply(
                [],
                Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
              ),
              isNegative: false
            };
          var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
          arr.unshift([1]);
          return {
            value: [].concat.apply([], arr),
            isNegative: false
          };
        }
        var neg = false;
        if (n.isNegative() && base.isPositive()) {
          neg = true;
          n = n.abs();
        }
        if (base.isUnit()) {
          if (n.isZero()) return { value: [0], isNegative: false };
          return {
            value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: neg
          };
        }
        var out = [];
        var left = n, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
          divmod = left.divmod(base);
          left = divmod.quotient;
          var digit = divmod.remainder;
          if (digit.isNegative()) {
            digit = base.minus(digit).abs();
            left = left.next();
          }
          out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
      }
      function toBaseString(n, base, alphabet) {
        var arr = toBase(n, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(function(x) {
          return stringify(x, alphabet);
        }).join("");
      }
      BigInteger.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      SmallInteger.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      NativeBigInt.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      BigInteger.prototype.toString = function(radix, alphabet) {
        if (radix === undefined2) radix = 10;
        if (radix !== 10 || alphabet) return toBaseString(this, radix, alphabet);
        var v = this.value, l = v.length, str5 = String(v[--l]), zeros = "0000000", digit;
        while (--l >= 0) {
          digit = String(v[l]);
          str5 += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str5;
      };
      SmallInteger.prototype.toString = function(radix, alphabet) {
        if (radix === undefined2) radix = 10;
        if (radix != 10 || alphabet) return toBaseString(this, radix, alphabet);
        return String(this.value);
      };
      NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
      NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
        return this.toString();
      };
      BigInteger.prototype.valueOf = function() {
        return parseInt(this.toString(), 10);
      };
      BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
      SmallInteger.prototype.valueOf = function() {
        return this.value;
      };
      SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
      NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
        return parseInt(this.toString(), 10);
      };
      function parseStringValue(v) {
        if (isPrecise(+v)) {
          var x = +v;
          if (x === truncate(x))
            return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
          throw new Error("Invalid integer: " + v);
        }
        var sign = v[0] === "-";
        if (sign) v = v.slice(1);
        var split = v.split(/e/i);
        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
          var exp = split[1];
          if (exp[0] === "+") exp = exp.slice(1);
          exp = +exp;
          if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
          var text = split[0];
          var decimalPlace = text.indexOf(".");
          if (decimalPlace >= 0) {
            exp -= text.length - decimalPlace - 1;
            text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
          }
          if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
          text += new Array(exp + 1).join("0");
          v = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v);
        if (!isValid) throw new Error("Invalid integer: " + v);
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(sign ? "-" + v : v));
        }
        var r = [], max2 = v.length, l = LOG_BASE, min2 = max2 - l;
        while (max2 > 0) {
          r.push(+v.slice(min2, max2));
          min2 -= l;
          if (min2 < 0) min2 = 0;
          max2 -= l;
        }
        trim(r);
        return new BigInteger(r, sign);
      }
      function parseNumberValue(v) {
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(v));
        }
        if (isPrecise(v)) {
          if (v !== truncate(v)) throw new Error(v + " is not an integer.");
          return new SmallInteger(v);
        }
        return parseStringValue(v.toString());
      }
      function parseValue2(v) {
        if (typeof v === "number") {
          return parseNumberValue(v);
        }
        if (typeof v === "string") {
          return parseStringValue(v);
        }
        if (typeof v === "bigint") {
          return new NativeBigInt(v);
        }
        return v;
      }
      for (var i = 0; i < 1e3; i++) {
        Integer[i] = parseValue2(i);
        if (i > 0) Integer[-i] = parseValue2(-i);
      }
      Integer.one = Integer[1];
      Integer.zero = Integer[0];
      Integer.minusOne = Integer[-1];
      Integer.max = max;
      Integer.min = min;
      Integer.gcd = gcd;
      Integer.lcm = lcm;
      Integer.isInstance = function(x) {
        return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt;
      };
      Integer.randBetween = randBetween;
      Integer.fromArray = function(digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue2), parseValue2(base || 10), isNegative);
      };
      return Integer;
    })();
    if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
      module.exports = bigInt;
    }
    if (typeof define === "function" && define.amd) {
      define(function() {
        return bigInt;
      });
    }
  }
});

// ../../node_modules/.pnpm/bplist-parser@0.3.2/node_modules/bplist-parser/bplistParser.js
var require_bplistParser = __commonJS({
  "../../node_modules/.pnpm/bplist-parser@0.3.2/node_modules/bplist-parser/bplistParser.js"(exports2) {
    "use strict";
    var fs = __require("fs");
    var bigInt = require_BigInteger();
    var debug = false;
    exports2.maxObjectSize = 100 * 1e3 * 1e3;
    exports2.maxObjectCount = 32768;
    var EPOCH = 9783072e5;
    var UID = exports2.UID = function(id) {
      this.UID = id;
    };
    exports2.parseFile = function(fileNameOrBuffer, callback) {
      return new Promise(function(resolve3, reject) {
        function tryParseBuffer(buffer) {
          let err = null;
          let result;
          try {
            result = parseBuffer(buffer);
            resolve3(result);
          } catch (ex) {
            err = ex;
            reject(err);
          } finally {
            if (callback) callback(err, result);
          }
        }
        if (Buffer.isBuffer(fileNameOrBuffer)) {
          return tryParseBuffer(fileNameOrBuffer);
        }
        fs.readFile(fileNameOrBuffer, function(err, data) {
          if (err) {
            reject(err);
            return callback(err);
          }
          tryParseBuffer(data);
        });
      });
    };
    exports2.parseFileSync = function(fileNameOrBuffer) {
      if (!Buffer.isBuffer(fileNameOrBuffer)) {
        fileNameOrBuffer = fs.readFileSync(fileNameOrBuffer);
      }
      return parseBuffer(fileNameOrBuffer);
    };
    var parseBuffer = exports2.parseBuffer = function(buffer) {
      const header = buffer.slice(0, "bplist".length).toString("utf8");
      if (header !== "bplist") {
        throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
      }
      const trailer = buffer.slice(buffer.length - 32, buffer.length);
      const offsetSize = trailer.readUInt8(6);
      if (debug) {
        console.log("offsetSize: " + offsetSize);
      }
      const objectRefSize = trailer.readUInt8(7);
      if (debug) {
        console.log("objectRefSize: " + objectRefSize);
      }
      const numObjects = readUInt64BE(trailer, 8);
      if (debug) {
        console.log("numObjects: " + numObjects);
      }
      const topObject = readUInt64BE(trailer, 16);
      if (debug) {
        console.log("topObject: " + topObject);
      }
      const offsetTableOffset = readUInt64BE(trailer, 24);
      if (debug) {
        console.log("offsetTableOffset: " + offsetTableOffset);
      }
      if (numObjects > exports2.maxObjectCount) {
        throw new Error("maxObjectCount exceeded");
      }
      const offsetTable = [];
      for (let i = 0; i < numObjects; i++) {
        const offsetBytes = buffer.slice(offsetTableOffset + i * offsetSize, offsetTableOffset + (i + 1) * offsetSize);
        offsetTable[i] = readUInt(offsetBytes, 0);
        if (debug) {
          console.log("Offset for Object #" + i + " is " + offsetTable[i] + " [" + offsetTable[i].toString(16) + "]");
        }
      }
      function parseObject(tableOffset) {
        const offset = offsetTable[tableOffset];
        const type = buffer[offset];
        const objType = (type & 240) >> 4;
        const objInfo = type & 15;
        switch (objType) {
          case 0:
            return parseSimple();
          case 1:
            return parseInteger();
          case 8:
            return parseUID();
          case 2:
            return parseReal();
          case 3:
            return parseDate();
          case 4:
            return parseData();
          case 5:
            return parsePlistString();
          case 6:
            return parsePlistString(true);
          case 10:
            return parseArray();
          case 13:
            return parseDictionary();
          default:
            throw new Error("Unhandled type 0x" + objType.toString(16));
        }
        function parseSimple() {
          switch (objInfo) {
            case 0:
              return null;
            case 8:
              return false;
            case 9:
              return true;
            case 15:
              return null;
            default:
              throw new Error("Unhandled simple type 0x" + objType.toString(16));
          }
        }
        function bufferToHexString(buffer2) {
          let str5 = "";
          let i;
          for (i = 0; i < buffer2.length; i++) {
            if (buffer2[i] != 0) {
              break;
            }
          }
          for (; i < buffer2.length; i++) {
            const part = "00" + buffer2[i].toString(16);
            str5 += part.substr(part.length - 2);
          }
          return str5;
        }
        function parseInteger() {
          const length = Math.pow(2, objInfo);
          if (length < exports2.maxObjectSize) {
            const data = buffer.slice(offset + 1, offset + 1 + length);
            if (length === 16) {
              const str5 = bufferToHexString(data);
              return bigInt(str5, 16);
            }
            return data.reduce((acc, curr) => {
              acc <<= 8;
              acc |= curr & 255;
              return acc;
            });
          }
          throw new Error("Too little heap space available! Wanted to read " + length + " bytes, but only " + exports2.maxObjectSize + " are available.");
        }
        function parseUID() {
          const length = objInfo + 1;
          if (length < exports2.maxObjectSize) {
            return new UID(readUInt(buffer.slice(offset + 1, offset + 1 + length)));
          }
          throw new Error("Too little heap space available! Wanted to read " + length + " bytes, but only " + exports2.maxObjectSize + " are available.");
        }
        function parseReal() {
          const length = Math.pow(2, objInfo);
          if (length < exports2.maxObjectSize) {
            const realBuffer = buffer.slice(offset + 1, offset + 1 + length);
            if (length === 4) {
              return realBuffer.readFloatBE(0);
            }
            if (length === 8) {
              return realBuffer.readDoubleBE(0);
            }
          } else {
            throw new Error("Too little heap space available! Wanted to read " + length + " bytes, but only " + exports2.maxObjectSize + " are available.");
          }
        }
        function parseDate() {
          if (objInfo != 3) {
            console.error("Unknown date type :" + objInfo + ". Parsing anyway...");
          }
          const dateBuffer = buffer.slice(offset + 1, offset + 9);
          return new Date(EPOCH + 1e3 * dateBuffer.readDoubleBE(0));
        }
        function parseData() {
          let dataoffset = 1;
          let length = objInfo;
          if (objInfo == 15) {
            const int_type = buffer[offset + 1];
            const intType = (int_type & 240) / 16;
            if (intType != 1) {
              console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + intType);
            }
            const intInfo = int_type & 15;
            const intLength = Math.pow(2, intInfo);
            dataoffset = 2 + intLength;
            if (intLength < 3) {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            } else {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            }
          }
          if (length < exports2.maxObjectSize) {
            return buffer.slice(offset + dataoffset, offset + dataoffset + length);
          }
          throw new Error("Too little heap space available! Wanted to read " + length + " bytes, but only " + exports2.maxObjectSize + " are available.");
        }
        function parsePlistString(isUtf16) {
          isUtf16 = isUtf16 || 0;
          let enc = "utf8";
          let length = objInfo;
          let stroffset = 1;
          if (objInfo == 15) {
            const int_type = buffer[offset + 1];
            const intType = (int_type & 240) / 16;
            if (intType != 1) {
              console.error("UNEXPECTED LENGTH-INT TYPE! " + intType);
            }
            const intInfo = int_type & 15;
            const intLength = Math.pow(2, intInfo);
            stroffset = 2 + intLength;
            if (intLength < 3) {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            } else {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            }
          }
          length *= isUtf16 + 1;
          if (length < exports2.maxObjectSize) {
            let plistString = Buffer.from(buffer.slice(offset + stroffset, offset + stroffset + length));
            if (isUtf16) {
              plistString = swapBytes(plistString);
              enc = "ucs2";
            }
            return plistString.toString(enc);
          }
          throw new Error("Too little heap space available! Wanted to read " + length + " bytes, but only " + exports2.maxObjectSize + " are available.");
        }
        function parseArray() {
          let length = objInfo;
          let arrayoffset = 1;
          if (objInfo == 15) {
            const int_type = buffer[offset + 1];
            const intType = (int_type & 240) / 16;
            if (intType != 1) {
              console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + intType);
            }
            const intInfo = int_type & 15;
            const intLength = Math.pow(2, intInfo);
            arrayoffset = 2 + intLength;
            if (intLength < 3) {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            } else {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            }
          }
          if (length * objectRefSize > exports2.maxObjectSize) {
            throw new Error("Too little heap space available!");
          }
          const array = [];
          for (let i = 0; i < length; i++) {
            const objRef = readUInt(buffer.slice(offset + arrayoffset + i * objectRefSize, offset + arrayoffset + (i + 1) * objectRefSize));
            array[i] = parseObject(objRef);
          }
          return array;
        }
        function parseDictionary() {
          let length = objInfo;
          let dictoffset = 1;
          if (objInfo == 15) {
            const int_type = buffer[offset + 1];
            const intType = (int_type & 240) / 16;
            if (intType != 1) {
              console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + intType);
            }
            const intInfo = int_type & 15;
            const intLength = Math.pow(2, intInfo);
            dictoffset = 2 + intLength;
            if (intLength < 3) {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            } else {
              length = readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
            }
          }
          if (length * 2 * objectRefSize > exports2.maxObjectSize) {
            throw new Error("Too little heap space available!");
          }
          if (debug) {
            console.log("Parsing dictionary #" + tableOffset);
          }
          const dict = {};
          for (let i = 0; i < length; i++) {
            const keyRef = readUInt(buffer.slice(offset + dictoffset + i * objectRefSize, offset + dictoffset + (i + 1) * objectRefSize));
            const valRef = readUInt(buffer.slice(offset + dictoffset + length * objectRefSize + i * objectRefSize, offset + dictoffset + length * objectRefSize + (i + 1) * objectRefSize));
            const key = parseObject(keyRef);
            const val = parseObject(valRef);
            if (debug) {
              console.log("  DICT #" + tableOffset + ": Mapped " + key + " to " + val);
            }
            dict[key] = val;
          }
          return dict;
        }
      }
      return [parseObject(topObject)];
    };
    function readUInt(buffer, start) {
      start = start || 0;
      let l = 0;
      for (let i = start; i < buffer.length; i++) {
        l <<= 8;
        l |= buffer[i] & 255;
      }
      return l;
    }
    function readUInt64BE(buffer, start) {
      const data = buffer.slice(start, start + 8);
      return data.readUInt32BE(4, 8);
    }
    function swapBytes(buffer) {
      const len = buffer.length;
      for (let i = 0; i < len; i += 2) {
        const a = buffer[i];
        buffer[i] = buffer[i + 1];
        buffer[i + 1] = a;
      }
      return buffer;
    }
  }
});

// src/index.ts
import { appendFileSync, readFileSync as readFileSync9, writeFileSync as writeFileSync2 } from "fs";
import { join as join14, relative as relative3, resolve as resolve2 } from "path";

// ../core/dist/index.js
var import_plist = __toESM(require_plist(), 1);
var import_bplist_parser = __toESM(require_bplistParser(), 1);
import { readdirSync as readdirSync6, statSync as statSync5 } from "fs";
import { join as join2 } from "path";
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import { join, relative, sep } from "path";
import { join as join12, relative as relative2, resolve } from "path";
import { dirname as dirname4 } from "path";
import { readFileSync as readFileSync2 } from "fs";
import { constants, inflateRawSync } from "zlib";
import { closeSync, lstatSync, openSync, readFileSync as readFileSync3, readSync, readdirSync as readdirSync2, readlinkSync } from "fs";
import { basename, join as join3, posix } from "path";
import { posix as posix2 } from "path";
import { join as join4 } from "path";
import { readFileSync as readFileSync4 } from "fs";
import { join as join5 } from "path";
import { readFileSync as readFileSync5 } from "fs";
import { gunzipSync as gunzipSync2 } from "zlib";
import { gunzipSync, inflateSync } from "zlib";

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/util.js
var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
var regexName = new RegExp("^" + nameRegexp + "$");
function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
var isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === "undefined");
};
function isExist(v) {
  return typeof v !== "undefined";
}

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/validator.js
var defaultOptions = {
  allowBooleanAttributes: false,
  //A tag can have attributes without any value
  unpairedTags: []
};
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions, options);
  const tags = [];
  let tagFound = false;
  let reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    xmlData = xmlData.substr(1);
  }
  for (let i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
      i += 2;
      i = readPI(xmlData, i);
      if (i.err) return i;
    } else if (xmlData[i] === "<") {
      let tagStartPos = i;
      i++;
      if (xmlData[i] === "!") {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === "/") {
          closingTag = true;
          i++;
        }
        let tagName = "";
        for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        if (tagName[tagName.length - 1] === "/") {
          tagName = tagName.substring(0, tagName.length - 1);
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
        }
        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;
        if (attrStr[attrStr.length - 1] === "/") {
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
          } else {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else if (tags.length === 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject(
                "InvalidTag",
                "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                getLineNumberForPosition(xmlData, tagStartPos)
              );
            }
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
          if (reachedRoot === true) {
            return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
          } else if (options.unpairedTags.indexOf(tagName) !== -1) {
          } else {
            tags.push({ tagName, tagStartPos });
          }
          tagFound = true;
        }
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            if (xmlData[i + 1] === "!") {
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i + 1] === "?") {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === "&") {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        }
        if (xmlData[i] === "<") {
          i--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }
  if (!tagFound) {
    return getErrorObject("InvalidXml", "Start tag expected.", 1);
  } else if (tags.length == 1) {
    return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  }
  return true;
}
function isWhiteSpace(char) {
  return char === " " || char === "	" || char === "\n" || char === "\r";
}
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == "?" || xmlData[i] == " ") {
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === "xml") {
        return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}
function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "<") {
        angleBracketsCount++;
      } else if (xmlData[i] === ">") {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  }
  return i;
}
var doubleQuote = '"';
var singleQuote = "'";
function readAttributeStr(xmlData, i) {
  let attrStr = "";
  let startChar = "";
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === "") {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
      } else {
        startChar = "";
      }
    } else if (xmlData[i] === ">") {
      if (startChar === "") {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== "") {
    return false;
  }
  return {
    value: attrStr,
    index: i,
    tagClosed
  };
}
var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function validateAttributeString(attrStr, options) {
  const matches = getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
      return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
    }
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      attrNames[attrName] = 1;
    } else {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === "x") {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ";")
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}
function validateAmpersand(xmlData, i) {
  i++;
  if (xmlData[i] === ";")
    return -1;
  if (xmlData[i] === "#") {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ";")
      break;
    return -1;
  }
  return i;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
function validateAttrName(attrName) {
  return isName(attrName);
}
function validateTagName(tagname) {
  return isName(tagname);
}
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var defaultOptions2 = {
  preserveOrder: false,
  attributeNamePrefix: "@_",
  attributesGroupName: false,
  textNodeName: "#text",
  ignoreAttributes: true,
  removeNSPrefix: false,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: false,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
  //Trim string values of tag and attributes
  cdataPropName: false,
  numberParseOptions: {
    hex: true,
    leadingZeros: true,
    eNotation: true
  },
  tagValueProcessor: function(tagName, val) {
    return val;
  },
  attributeValueProcessor: function(attrName, val) {
    return val;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: false,
  isArray: () => false,
  commentPropName: false,
  unpairedTags: [],
  processEntities: true,
  htmlEntities: false,
  ignoreDeclaration: false,
  ignorePiTags: false,
  transformTagName: false,
  transformAttributeName: false,
  updateTag: function(tagName, jPath, attrs) {
    return tagName;
  },
  // skipEmptyListItem: false
  captureMetaData: false
};
var buildOptions = function(options) {
  return Object.assign({}, defaultOptions2, options);
};

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var METADATA_SYMBOL;
if (typeof Symbol !== "function") {
  METADATA_SYMBOL = "@@xmlMetadata";
} else {
  METADATA_SYMBOL = Symbol("XML Node Metadata");
}
var XmlNode = class {
  constructor(tagname) {
    this.tagname = tagname;
    this.child = [];
    this[":@"] = {};
  }
  add(key, val) {
    if (key === "__proto__") key = "#__proto__";
    this.child.push({ [key]: val });
  }
  addChild(node, startIndex) {
    if (node.tagname === "__proto__") node.tagname = "#__proto__";
    if (node[":@"] && Object.keys(node[":@"]).length > 0) {
      this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
    } else {
      this.child.push({ [node.tagname]: node.child });
    }
    if (startIndex !== void 0) {
      this.child[this.child.length - 1][METADATA_SYMBOL] = { startIndex };
    }
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return METADATA_SYMBOL;
  }
};

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
function readDocType(xmlData, i) {
  const entities = {};
  if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
    i = i + 9;
    let angleBracketsCount = 1;
    let hasBody = false, comment = false;
    let exp = "";
    for (; i < xmlData.length; i++) {
      if (xmlData[i] === "<" && !comment) {
        if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
          i += 7;
          let entityName, val;
          [entityName, val, i] = readEntityExp(xmlData, i + 1);
          if (val.indexOf("&") === -1)
            entities[entityName] = {
              regx: RegExp(`&${entityName};`, "g"),
              val
            };
        } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
          i += 8;
          const { index } = readElementExp(xmlData, i + 1);
          i = index;
        } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
          i += 8;
        } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
          i += 9;
          const { index } = readNotationExp(xmlData, i + 1);
          i = index;
        } else if (hasSeq(xmlData, "!--", i)) comment = true;
        else throw new Error(`Invalid DOCTYPE`);
        angleBracketsCount++;
        exp = "";
      } else if (xmlData[i] === ">") {
        if (comment) {
          if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
            comment = false;
            angleBracketsCount--;
          }
        } else {
          angleBracketsCount--;
        }
        if (angleBracketsCount === 0) {
          break;
        }
      } else if (xmlData[i] === "[") {
        hasBody = true;
      } else {
        exp += xmlData[i];
      }
    }
    if (angleBracketsCount !== 0) {
      throw new Error(`Unclosed DOCTYPE`);
    }
  } else {
    throw new Error(`Invalid Tag instead of DOCTYPE`);
  }
  return { entities, i };
}
var skipWhitespace = (data, index) => {
  while (index < data.length && /\s/.test(data[index])) {
    index++;
  }
  return index;
};
function readEntityExp(xmlData, i) {
  i = skipWhitespace(xmlData, i);
  let entityName = "";
  while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
    entityName += xmlData[i];
    i++;
  }
  validateEntityName(entityName);
  i = skipWhitespace(xmlData, i);
  if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
    throw new Error("External entities are not supported");
  } else if (xmlData[i] === "%") {
    throw new Error("Parameter entities are not supported");
  }
  let entityValue = "";
  [i, entityValue] = readIdentifierVal(xmlData, i, "entity");
  i--;
  return [entityName, entityValue, i];
}
function readNotationExp(xmlData, i) {
  i = skipWhitespace(xmlData, i);
  let notationName = "";
  while (i < xmlData.length && !/\s/.test(xmlData[i])) {
    notationName += xmlData[i];
    i++;
  }
  validateEntityName(notationName);
  i = skipWhitespace(xmlData, i);
  const identifierType = xmlData.substring(i, i + 6).toUpperCase();
  if (identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
    throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
  }
  i += identifierType.length;
  i = skipWhitespace(xmlData, i);
  let publicIdentifier = null;
  let systemIdentifier = null;
  if (identifierType === "PUBLIC") {
    [i, publicIdentifier] = readIdentifierVal(xmlData, i, "publicIdentifier");
    i = skipWhitespace(xmlData, i);
    if (xmlData[i] === '"' || xmlData[i] === "'") {
      [i, systemIdentifier] = readIdentifierVal(xmlData, i, "systemIdentifier");
    }
  } else if (identifierType === "SYSTEM") {
    [i, systemIdentifier] = readIdentifierVal(xmlData, i, "systemIdentifier");
    if (!systemIdentifier) {
      throw new Error("Missing mandatory system identifier for SYSTEM notation");
    }
  }
  return { notationName, publicIdentifier, systemIdentifier, index: --i };
}
function readIdentifierVal(xmlData, i, type) {
  let identifierVal = "";
  const startChar = xmlData[i];
  if (startChar !== '"' && startChar !== "'") {
    throw new Error(`Expected quoted string, found "${startChar}"`);
  }
  i++;
  while (i < xmlData.length && xmlData[i] !== startChar) {
    identifierVal += xmlData[i];
    i++;
  }
  if (xmlData[i] !== startChar) {
    throw new Error(`Unterminated ${type} value`);
  }
  i++;
  return [i, identifierVal];
}
function readElementExp(xmlData, i) {
  i = skipWhitespace(xmlData, i);
  let elementName = "";
  while (i < xmlData.length && !/\s/.test(xmlData[i])) {
    elementName += xmlData[i];
    i++;
  }
  if (!validateEntityName(elementName)) {
    throw new Error(`Invalid element name: "${elementName}"`);
  }
  i = skipWhitespace(xmlData, i);
  let contentModel = "";
  if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;
  else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;
  else if (xmlData[i] === "(") {
    i++;
    while (i < xmlData.length && xmlData[i] !== ")") {
      contentModel += xmlData[i];
      i++;
    }
    if (xmlData[i] !== ")") {
      throw new Error("Unterminated content model");
    }
  } else {
    throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
  }
  return {
    elementName,
    contentModel: contentModel.trim(),
    index: i
  };
}
function hasSeq(data, seq, i) {
  for (let j = 0; j < seq.length; j++) {
    if (seq[j] !== data[i + j + 1]) return false;
  }
  return true;
}
function validateEntityName(name) {
  if (isName(name))
    return name;
  else
    throw new Error(`Invalid entity name ${name}`);
}

// ../../node_modules/.pnpm/anynum@1.0.1/node_modules/anynum/digitTable.js
var SCRIPT_ZEROS = [
  // Basic Latin (ASCII) — included for completeness / pass-through
  48,
  // 0-9
  // Arabic scripts
  1632,
  // Arabic-Indic ٠١٢٣٤٥٦٧٨٩
  1776,
  // Extended Arabic-Indic (Urdu/Persian/Sindhi) ۰۱۲۳
  // Indic scripts
  2406,
  // Devanagari ०१२३४५६७८९
  2534,
  // Bengali ০১২৩৪৫৬৭৮৯
  2662,
  // Gurmukhi ੦੧੨੩੪੫੬੭੮੯
  2790,
  // Gujarati ૦૧૨૩૪૫૬૭૮૯
  2918,
  // Odia ୦୧୨୩୪୫୬୭୮୯
  3046,
  // Tamil ௦௧௨௩௪௫௬௭௮௯
  3174,
  // Telugu ౦౧౨౩౪౫౬౭౮౯
  3302,
  // Kannada ೦೧೨೩೪೫೬೭೮೯
  3430,
  // Malayalam ൦൧൨൩൪൫൬൭൮൯
  3558,
  // Sinhala Archaic ෦෧෨෩෪෫෬෭෮෯
  // Southeast Asian scripts
  3664,
  // Thai ๐๑๒๓๔๕๖๗๘๙
  3792,
  // Lao ໐໑໒໓໔໕໖໗໘໙
  3872,
  // Tibetan ༠༡༢༣༤༥༦༧༨༩
  4160,
  // Myanmar ၀၁၂၃၄၅၆၇၈၉
  4240,
  // Myanmar Shan ႐႑႒႓႔႕႖႗႘႙
  6112,
  // Khmer ០១២៣៤៥៦៧៨៩
  6160,
  // Mongolian ᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙
  6470,
  // Limbu ᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏
  6608,
  // New Tai Lue ᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙
  6784,
  // Tai Tham Hora ᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉
  6800,
  // Tai Tham Tham ᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙
  6992,
  // Balinese ᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙
  7088,
  // Sundanese ᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹
  7232,
  // Lepcha ᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉
  7248,
  // Ol Chiki ᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙
  // Fullwidth (CJK context)
  65296,
  // Fullwidth ０１２３４５６７８９
  // Mathematical digit variants (Unicode math block)
  120782,
  // Mathematical Bold
  120792,
  // Mathematical Double-Struck
  120802,
  // Mathematical Sans-Serif
  120812,
  // Mathematical Sans-Serif Bold
  120822,
  // Mathematical Monospace
  // Other scripts
  66720,
  // Osmanya 𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩
  68912,
  // Hanifi Rohingya 𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹
  69734,
  // Brahmi 𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯
  69872,
  // Sora Sompeng 𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹
  69942,
  // Chakma 𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿
  70096,
  // Sharada 𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙
  70384,
  // Khudawadi 𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹
  70736,
  // Newa 𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙
  70864,
  // Tirhuta 𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙
  71248,
  // Modi 𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙
  71360,
  // Takri 𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉
  71472,
  // Ahom 𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹
  71904,
  // Warang Citi 𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩
  72016,
  // Dives Akuru 𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙
  72688,
  // Khitan Small Script 𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹
  72784,
  // Bhaiksuki 𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙
  73040,
  // Masaram Gondi 𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙
  73120,
  // Gunjala Gondi 𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩
  73552,
  // Kawi 𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙
  92768,
  // Mro 𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩
  92864,
  // Tangsa 𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉
  93008,
  // Pahawh Hmong 𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙
  123200,
  // Nyiakeng Puachue Hmong 𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉
  123632,
  // Wancho 𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹
  124144,
  // Nag Mundari 𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹
  125264,
  // Adlam 𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙
  130032
  // Segmented digit symbols 🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹
];
var NOT_DIGIT = 255;
var HIGH_MAP = /* @__PURE__ */ new Map();
var LOW_MAX = 65535;
var LOW_MIN = 1632;
var TABLE_OFFSET = LOW_MIN;
var TABLE_SIZE = LOW_MAX - LOW_MIN + 1;
var TABLE = new Uint8Array(TABLE_SIZE).fill(NOT_DIGIT);
for (const zero of SCRIPT_ZEROS) {
  for (let d = 0; d < 10; d++) {
    const cp = zero + d;
    if (cp <= LOW_MAX) {
      TABLE[cp - TABLE_OFFSET] = d;
    } else {
      HIGH_MAP.set(cp, d);
    }
  }
}

// ../../node_modules/.pnpm/anynum@1.0.1/node_modules/anynum/anynum.js
var CHAR_0 = 48;
var CHAR_9 = 57;
var CHAR_MINUS = 45;
var MINUS_SET = /* @__PURE__ */ new Set([8722, 65293, 65123]);
function anynum(str5) {
  if (typeof str5 !== "string") return str5;
  const len = str5.length;
  if (len === 0) return str5;
  let firstHit2 = -1;
  for (let i = 0; i < len; i++) {
    const cc = str5.charCodeAt(i);
    if (cc >= CHAR_0 && cc <= CHAR_9 || cc === CHAR_MINUS) continue;
    if (cc < TABLE_OFFSET) {
      if (MINUS_SET.has(cc)) {
        firstHit2 = i;
        break;
      }
      continue;
    }
    if (cc >= 55296 && cc <= 56319) {
      if (i + 1 < len) {
        const low = str5.charCodeAt(i + 1);
        if (low >= 56320 && low <= 57343) {
          const cp = 65536 + (cc - 55296 << 10) + (low - 56320);
          if (HIGH_MAP.has(cp)) {
            firstHit2 = i;
            break;
          }
        }
      }
      continue;
    }
    if (TABLE[cc - TABLE_OFFSET] !== NOT_DIGIT || MINUS_SET.has(cc)) {
      firstHit2 = i;
      break;
    }
  }
  if (firstHit2 === -1) return str5;
  const chars = [];
  if (firstHit2 > 0) chars.push(str5.slice(0, firstHit2));
  for (let i = firstHit2; i < len; i++) {
    const cc = str5.charCodeAt(i);
    if (cc >= CHAR_0 && cc <= CHAR_9 || cc === CHAR_MINUS) {
      chars.push(str5[i]);
      continue;
    }
    if (cc < TABLE_OFFSET) {
      chars.push(MINUS_SET.has(cc) ? "-" : str5[i]);
      continue;
    }
    if (cc >= 55296 && cc <= 56319) {
      if (i + 1 < len) {
        const low = str5.charCodeAt(i + 1);
        if (low >= 56320 && low <= 57343) {
          const cp = 65536 + (cc - 55296 << 10) + (low - 56320);
          const d2 = HIGH_MAP.get(cp);
          if (d2 !== void 0) {
            chars.push(String.fromCharCode(d2 + 48));
            i++;
            continue;
          }
        }
      }
      chars.push(str5[i]);
      continue;
    }
    if (MINUS_SET.has(cc)) {
      chars.push("-");
      continue;
    }
    const d = TABLE[cc - TABLE_OFFSET];
    chars.push(d !== NOT_DIGIT ? String.fromCharCode(d + 48) : str5[i]);
  }
  return chars.join("");
}
var anynum_default = anynum;

// ../../node_modules/.pnpm/strnum@2.5.1/node_modules/strnum/strnum.js
var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
var binRegex = /^0b[01]+$/;
var octRegex = /^0o[0-7]+$/;
var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
var consider = {
  hex: true,
  binary: false,
  octal: false,
  leadingZeros: true,
  decimalPoint: ".",
  eNotation: true,
  //skipLike: /regex/,
  infinity: "original",
  // "null", "infinity" (Infinity type), "string" ("Infinity" (the string literal))
  unicode: false
};
function toNumber(str5, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str5 || typeof str5 !== "string") return str5;
  let trimmedStr = str5.trim();
  if (trimmedStr.length === 0) return str5;
  else if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str5;
  else if (trimmedStr === "0") return 0;
  if (options.unicode) {
    trimmedStr = anynum_default(trimmedStr);
    if (trimmedStr === "0") return 0;
  }
  if (options.hex && hexRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 16);
  } else if (options.binary && binRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 2);
  } else if (options.octal && octRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 8);
  } else if (!isFinite(trimmedStr)) {
    const num2 = Number(trimmedStr);
    if (Number.isNaN(num2)) return str5;
    return handleInfinity(str5, num2, options);
  } else if (trimmedStr.includes("e") || trimmedStr.includes("E")) {
    return resolveEnotation(str5, trimmedStr, options);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1] || "";
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const decimalAdjacentToLeadingZeros = sign ? (
        // 0., -00., 000.
        trimmedStr[leadingZeros.length + 1] === "."
      ) : trimmedStr[leadingZeros.length] === ".";
      if (!options.leadingZeros && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
        return str5;
      } else {
        const num2 = Number(trimmedStr);
        const parsedStr = String(num2);
        if (num2 === 0) return num2;
        if (parsedStr.search(/[eE]/) !== -1) {
          if (options.eNotation) return num2;
          else return str5;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (parsedStr === "0") return num2;
          else if (parsedStr === numTrimmedByZeros) return num2;
          else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num2;
          else return str5;
        }
        let n = leadingZeros ? numTrimmedByZeros : trimmedStr;
        if (leadingZeros) {
          return n === parsedStr || sign + n === parsedStr ? num2 : str5;
        } else {
          return n === parsedStr || n === sign + parsedStr ? num2 : str5;
        }
      }
    } else {
      return str5;
    }
  }
}
var eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str5, trimmedStr, options) {
  if (!options.eNotation) return str5;
  const notation = trimmedStr.match(eNotationRegx);
  if (notation) {
    let sign = notation[1] || "";
    const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
    const leadingZeros = notation[2];
    const eAdjacentToLeadingZeros = sign ? (
      // 0E.
      trimmedStr[leadingZeros.length + 1] === eChar
    ) : trimmedStr[leadingZeros.length] === eChar;
    if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str5;
    else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
      return Number(trimmedStr);
    } else if (leadingZeros.length > 0) {
      if (options.leadingZeros && !eAdjacentToLeadingZeros) {
        return Number(trimmedStr);
      } else return str5;
    } else {
      return Number(trimmedStr);
    }
  } else {
    return str5;
  }
}
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    let end = numStr.length;
    while (end > 0 && numStr.charCodeAt(end - 1) === 48) end--;
    numStr = numStr.slice(0, end);
    if (numStr === ".") numStr = "0";
    else if (numStr[0] === ".") numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
function parse_int(numStr, base) {
  const str5 = numStr.trim();
  if (base === 2 || base === 8) numStr = str5.substring(2);
  if (parseInt) return parseInt(numStr, base);
  else if (Number.parseInt) return Number.parseInt(numStr, base);
  else if (window && window.parseInt) return window.parseInt(numStr, base);
  else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function handleInfinity(str5, num2, options) {
  const isPositive = num2 === Infinity;
  switch (options.infinity.toLowerCase()) {
    case "null":
      return null;
    case "infinity":
      return num2;
    // Return Infinity or -Infinity
    case "string":
      return isPositive ? "Infinity" : "-Infinity";
    case "original":
    default:
      return str5;
  }
}

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/ignoreAttributes.js
function getIgnoreAttributesFn(ignoreAttributes) {
  if (typeof ignoreAttributes === "function") {
    return ignoreAttributes;
  }
  if (Array.isArray(ignoreAttributes)) {
    return (attrName) => {
      for (const pattern of ignoreAttributes) {
        if (typeof pattern === "string" && attrName === pattern) {
          return true;
        }
        if (pattern instanceof RegExp && pattern.test(attrName)) {
          return true;
        }
      }
    };
  }
  return () => false;
}

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var OrderedObjParser = class {
  constructor(options) {
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
      "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
      "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
      "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
      "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
      "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
      "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
      "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
      "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
      "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
      "num_dec": { regex: /&#([0-9]{1,7});/g, val: (_, str5) => String.fromCodePoint(Number.parseInt(str5, 10)) },
      "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (_, str5) => String.fromCodePoint(Number.parseInt(str5, 16)) }
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
    this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
  }
};
function addExternalEntities(externalEntities) {
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
      regex: new RegExp("&" + ent + ";", "g"),
      val: externalEntities[ent]
    };
  }
}
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== void 0) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val);
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if (newval === null || newval === void 0) {
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        return newval;
      } else if (this.options.trimValues) {
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(":");
    const prefix = tagname.charAt(0) === "/" ? "/" : "";
    if (tags[0] === "xmlns") {
      return "";
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}
var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function buildAttributesMap(attrStr, jPath, tagName) {
  if (this.options.ignoreAttributes !== true && typeof attrStr === "string") {
    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      if (this.ignoreAttributesFn(attrName, jPath)) {
        continue;
      }
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if (aName === "__proto__") aName = "#__proto__";
        if (oldVal !== void 0) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if (newVal === null || newVal === void 0) {
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
var parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  const xmlObj = new XmlNode("!xml");
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for (let i = 0; i < xmlData.length; i++) {
    const ch = xmlData[i];
    if (ch === "<") {
      if (xmlData[i + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i + 2, closeIndex).trim();
        if (this.options.removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
          }
        }
        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        if (currentNode) {
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }
        const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
        if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0;
        if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
          propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
          this.tagsNodeStack.pop();
        } else {
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);
        currentNode = this.tagsNodeStack.pop();
        textData = "";
        i = closeIndex;
      } else if (xmlData[i + 1] === "?") {
        let tagData = readTagExp(xmlData, i, false, "?>");
        if (!tagData) throw new Error("Pi Tag is not closed.");
        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
        } else {
          const childNode = new XmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
          }
          this.addChild(currentNode, childNode, jPath, i);
        }
        i = tagData.closeIndex + 1;
      } else if (xmlData.substr(i + 1, 3) === "!--") {
        const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const comment = xmlData.substring(i + 4, endIndex - 2);
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
          currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
        }
        i = endIndex;
      } else if (xmlData.substr(i + 1, 2) === "!D") {
        const result = readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      } else if (xmlData.substr(i + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9, closeIndex);
        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
        if (val == void 0) val = "";
        if (this.options.cdataPropName) {
          currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
        } else {
          currentNode.add(this.options.textNodeName, val);
        }
        i = closeIndex + 2;
      } else {
        let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
        let tagName = result.tagName;
        const rawTagName = result.rawTagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;
        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        if (currentNode && textData) {
          if (currentNode.tagname !== "!xml") {
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }
        const lastTag = currentNode;
        if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if (tagName !== xmlObj.tagname) {
          jPath += jPath ? "." + tagName : tagName;
        }
        const startIndex = i;
        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
          let tagContent = "";
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substr(0, tagName.length - 1);
              jPath = jPath.substr(0, jPath.length - 1);
              tagExp = tagName;
            } else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            i = result.closeIndex;
          } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
            i = result.closeIndex;
          } else {
            const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
            if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
            i = result2.i;
            tagContent = result2.tagContent;
          }
          const childNode = new XmlNode(tagName);
          if (tagName !== tagExp && attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
          }
          if (tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          this.addChild(currentNode, childNode, jPath, startIndex);
        } else {
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substr(0, tagName.length - 1);
              jPath = jPath.substr(0, jPath.length - 1);
              tagExp = tagName;
            } else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            const childNode = new XmlNode(tagName);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath, startIndex);
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          } else {
            const childNode = new XmlNode(tagName);
            this.tagsNodeStack.push(currentNode);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath, startIndex);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    } else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};
function addChild(currentNode, childNode, jPath, startIndex) {
  if (!this.options.captureMetaData) startIndex = void 0;
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
  if (result === false) {
  } else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  } else {
    currentNode.addChild(childNode, startIndex);
  }
}
var replaceEntitiesValue = function(val) {
  if (this.options.processEntities) {
    for (let entityName in this.docTypeEntities) {
      const entity = this.docTypeEntities[entityName];
      val = val.replace(entity.regx, entity.val);
    }
    for (let entityName in this.lastEntities) {
      const entity = this.lastEntities[entityName];
      val = val.replace(entity.regex, entity.val);
    }
    if (this.options.htmlEntities) {
      for (let entityName in this.htmlEntities) {
        const entity = this.htmlEntities[entityName];
        val = val.replace(entity.regex, entity.val);
      }
    }
    val = val.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
};
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) {
    if (isLeafNode === void 0) isLeafNode = currentNode.child.length === 0;
    textData = this.parseTextData(
      textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode
    );
    if (textData !== void 0 && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}
function isItStopNode(stopNodes, jPath, currentTagName) {
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
  }
  return false;
}
function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
      if (ch === attrBoundary) attrBoundary = "";
    } else if (ch === '"' || ch === "'") {
      attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if (closingChar[1]) {
        if (xmlData[index + 1] === closingChar[1]) {
          return {
            data: tagExp,
            index
          };
        }
      } else {
        return {
          data: tagExp,
          index
        };
      }
    } else if (ch === "	") {
      ch = " ";
    }
    tagExp += ch;
  }
}
function findClosingIndex(xmlData, str5, i, errMsg) {
  const closingIndex = xmlData.indexOf(str5, i);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str5.length - 1;
  }
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
  if (!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    tagName = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }
  const rawTagName = tagName;
  if (removeNSPrefix) {
    const colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName,
    tagExp,
    closeIndex,
    attrExpPresent,
    rawTagName
  };
}
function readStopNodeData(xmlData, tagName, i) {
  const startIndex = i;
  let openTagCount = 1;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === "<") {
      if (xmlData[i + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
        let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i),
              i: closeIndex
            };
          }
        }
        i = closeIndex;
      } else if (xmlData[i + 1] === "?") {
        const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 3) === "!--") {
        const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
        i = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i, ">");
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i = tagData.closeIndex;
        }
      }
    }
  }
}
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === "string") {
    const newval = val.trim();
    if (newval === "true") return true;
    else if (newval === "false") return false;
    else return toNumber(val, options);
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return "";
    }
  }
}

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/xmlparser/node2json.js
var METADATA_SYMBOL2 = XmlNode.getMetaDataSymbol();
function prettify(node, options) {
  return compress(node, options);
}
function compress(arr, options, jPath) {
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    let newJpath = "";
    if (jPath === void 0) newJpath = property;
    else newJpath = jPath + "." + property;
    if (property === options.textNodeName) {
      if (text === void 0) text = tagObj[property];
      else text += "" + tagObj[property];
    } else if (property === void 0) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[METADATA_SYMBOL2] !== void 0) {
        val[METADATA_SYMBOL2] = tagObj[METADATA_SYMBOL2];
      }
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], newJpath, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }
      if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        if (options.isArray(property, newJpath, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
    }
  }
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== void 0) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ":@") return key;
  }
}
function assignAttributes(obj, attrMap, jpath, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}

// ../../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var XMLParser = class {
  constructor(options) {
    this.externalEntities = {};
    this.options = buildOptions(options);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(xmlData, validationOption) {
    if (typeof xmlData === "string") {
    } else if (xmlData.toString) {
      xmlData = xmlData.toString();
    } else {
      throw new Error("XML data is accepted in String or Bytes[] form.");
    }
    if (validationOption) {
      if (validationOption === true) validationOption = {};
      const result = validate(xmlData, validationOption);
      if (result !== true) {
        throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
      }
    }
    const orderedObjParser = new OrderedObjParser(this.options);
    orderedObjParser.addExternalEntities(this.externalEntities);
    const orderedResult = orderedObjParser.parseXml(xmlData);
    if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
    else return prettify(orderedResult, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(key, value) {
    if (value.indexOf("&") !== -1) {
      throw new Error("Entity value can't have '&'");
    } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    } else if (value === "&") {
      throw new Error("An entity with value '&' is not permitted");
    } else {
      this.externalEntities[key] = value;
    }
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return XmlNode.getMetaDataSymbol();
  }
};

// ../core/dist/index.js
import { join as join7 } from "path";
import { basename as basename2, dirname, join as join6 } from "path";
import { readFileSync as readFileSync6, readdirSync as readdirSync4, statSync as statSync3 } from "fs";
import { basename as basename3, dirname as dirname2, join as join9 } from "path";
import { readdirSync as readdirSync3, statSync as statSync2 } from "fs";
import { join as join8 } from "path";
import { inflateSync as inflateSync2 } from "zlib";
import { readdirSync as readdirSync5, statSync as statSync4 } from "fs";
import { basename as basename4, dirname as dirname3, join as join10 } from "path";
import { readFileSync as readFileSync7 } from "fs";
import { join as join11 } from "path";
import { existsSync as existsSync2, mkdirSync, readFileSync as readFileSync8, writeFileSync } from "fs";
import { dirname as dirname5, join as join13 } from "path";
var import_plist2 = __toESM(require_plist(), 1);
import { basename as basename6 } from "path";
var BUILT_INPUT_KINDS = ["ipa", "apk", "aab", "mac-app", "pkg"];
function isBuiltInput(kind) {
  return BUILT_INPUT_KINDS.includes(kind);
}
var VENDOR_DIRS = /* @__PURE__ */ new Set([
  "node_modules",
  "Pods",
  "Carthage",
  ".build",
  "build",
  "DerivedData",
  "SourcePackages",
  ".git",
  ".gradle",
  ".idea",
  ".dart_tool",
  ".expo",
  "vendor",
  ".turbo",
  "dist",
  "fastlane"
  // scanned separately for listing text
]);
function walk(root, opts = {}) {
  const skip = opts.skipDirs ?? VENDOR_DIRS;
  const maxFiles = opts.maxFiles ?? 5e4;
  const maxSize = opts.maxSize ?? 2 * 1024 * 1024;
  const out = [];
  const stack = [root];
  while (stack.length && out.length < maxFiles) {
    const dir = stack.pop();
    let names2;
    try {
      names2 = readdirSync(dir);
    } catch {
      continue;
    }
    for (const name of names2) {
      const full = join(dir, name);
      let st;
      try {
        st = statSync(full);
      } catch {
        continue;
      }
      if (st.isDirectory()) {
        if (skip.has(name) || !opts.assets && name.endsWith(".xcassets")) continue;
        stack.push(full);
      } else if (st.isFile()) {
        if (st.size > maxSize) continue;
        if (!opts.exts || opts.exts.some((e) => name.endsWith(e))) out.push(full);
      }
    }
  }
  return out.sort();
}
function rel(root, file) {
  return relative(root, file).split(sep).join("/");
}
function readText(file) {
  try {
    const t = readFileSync(file, "utf8");
    return t.includes("\r") ? t.replace(/\r\n?/g, "\n") : t;
  } catch {
    return void 0;
  }
}
function exists(p) {
  return existsSync(p);
}
function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) if (text.charCodeAt(i) === 10) line++;
  return line;
}
function isCommentLine(text, index) {
  const start = text.lastIndexOf("\n", index) + 1;
  const prefix = text.slice(start, index).trimStart();
  return prefix.startsWith("//") || prefix.startsWith("*") || prefix.startsWith("/*") || prefix.startsWith("#");
}
function parseCsv(text, maxRows = 2e4) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  let i = text.charCodeAt(0) === 65279 ? 1 : 0;
  const n = text.length;
  const endRow = () => {
    row.push(field);
    field = "";
    if (!(row.length === 1 && row[0] === "")) rows.push(row);
    row = [];
    if (rows.length > maxRows) throw new Error(`CSV has more than ${maxRows} rows`);
  };
  for (; i < n; i++) {
    const c2 = text[i];
    if (quoted) {
      if (c2 === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else quoted = false;
      } else field += c2;
    } else if (c2 === '"' && field === "") quoted = true;
    else if (c2 === ",") {
      row.push(field);
      field = "";
    } else if (c2 === "\n") endRow();
    else if (c2 === "\r") {
      if (text[i + 1] === "\n") i++;
      endRow();
    } else field += c2;
  }
  if (quoted) throw new Error("CSV has an unclosed quote");
  if (field !== "" || row.length) endRow();
  return rows;
}
var APPLE_DATA_TYPES = [
  { key: "Name", label: "Name", category: "Contact Info" },
  { key: "EmailAddress", label: "Email Address", category: "Contact Info" },
  { key: "PhoneNumber", label: "Phone Number", category: "Contact Info" },
  { key: "PhysicalAddress", label: "Physical Address", category: "Contact Info" },
  { key: "OtherUserContactInfo", label: "Other User Contact Info", category: "Contact Info" },
  { key: "Health", label: "Health", category: "Health & Fitness" },
  { key: "Fitness", label: "Fitness", category: "Health & Fitness" },
  { key: "PaymentInfo", label: "Payment Info", category: "Financial Info" },
  { key: "CreditInfo", label: "Credit Info", category: "Financial Info" },
  { key: "OtherFinancialInfo", label: "Other Financial Info", category: "Financial Info" },
  { key: "PreciseLocation", label: "Precise Location", category: "Location" },
  { key: "CoarseLocation", label: "Coarse Location", category: "Location" },
  { key: "SensitiveInfo", label: "Sensitive Info", category: "Sensitive Info" },
  { key: "Contacts", label: "Contacts", category: "Contacts" },
  { key: "EmailsOrTextMessages", label: "Emails or Text Messages", category: "User Content" },
  { key: "PhotosOrVideos", label: "Photos or Videos", category: "User Content" },
  { key: "AudioData", label: "Audio Data", category: "User Content" },
  { key: "GameplayContent", label: "Gameplay Content", category: "User Content" },
  { key: "CustomerSupport", label: "Customer Support", category: "User Content" },
  { key: "OtherUserContent", label: "Other User Content", category: "User Content" },
  { key: "BrowsingHistory", label: "Browsing History", category: "Browsing History" },
  { key: "SearchHistory", label: "Search History", category: "Search History" },
  { key: "UserID", label: "User ID", category: "Identifiers" },
  { key: "DeviceID", label: "Device ID", category: "Identifiers" },
  { key: "PurchaseHistory", label: "Purchase History", category: "Purchases" },
  { key: "ProductInteraction", label: "Product Interaction", category: "Usage Data" },
  { key: "AdvertisingData", label: "Advertising Data", category: "Usage Data" },
  { key: "OtherUsageData", label: "Other Usage Data", category: "Usage Data" },
  { key: "CrashData", label: "Crash Data", category: "Diagnostics" },
  { key: "PerformanceData", label: "Performance Data", category: "Diagnostics" },
  { key: "OtherDiagnosticData", label: "Other Diagnostic Data", category: "Diagnostics" },
  { key: "EnvironmentScanning", label: "Environment Scanning", category: "Surroundings" },
  { key: "Hands", label: "Hands", category: "Body" },
  { key: "Head", label: "Head", category: "Body" },
  { key: "OtherDataTypes", label: "Other Data Types", category: "Other Data" }
];
var BY_KEY = new Map(APPLE_DATA_TYPES.map((t) => [t.key.toLowerCase(), t]));
var BY_LABEL = new Map(APPLE_DATA_TYPES.map((t) => [t.label.toLowerCase(), t]));
function appleDataType(raw) {
  if (typeof raw !== "string") return void 0;
  const s = raw.trim().replace(/^NSPrivacyCollectedDataType/, "").toLowerCase();
  return BY_KEY.get(s) ?? BY_LABEL.get(s) ?? BY_KEY.get(s.replace(/[\s_-]+/g, ""));
}
function appleLabel(key) {
  return BY_KEY.get(key.toLowerCase())?.label ?? key;
}
var T = (question, category, rows) => rows.map(([key, label]) => ({ key, label, category, question }));
var PLAY_DATA_TYPES = [
  ...T("PSL_DATA_TYPES_PERSONAL", "Personal info", [
    ["PSL_NAME", "Name"],
    ["PSL_EMAIL", "Email address"],
    ["PSL_USER_ACCOUNT", "User IDs"],
    ["PSL_ADDRESS", "Address"],
    ["PSL_PHONE", "Phone number"],
    ["PSL_RACE_ETHNICITY", "Race and ethnicity"],
    ["PSL_POLITICAL_RELIGIOUS", "Political or religious beliefs"],
    ["PSL_SEXUAL_ORIENTATION_GENDER_IDENTITY", "Sexual orientation"],
    ["PSL_OTHER_PERSONAL", "Other info"]
  ]),
  ...T("PSL_DATA_TYPES_FINANCIAL", "Financial info", [
    ["PSL_CREDIT_DEBIT_BANK_ACCOUNT_NUMBER", "User payment info"],
    ["PSL_PURCHASE_HISTORY", "Purchase history"],
    ["PSL_CREDIT_SCORE", "Credit score"],
    ["PSL_OTHER", "Other financial info"]
  ]),
  ...T("PSL_DATA_TYPES_HEALTH_AND_FITNESS", "Health and fitness", [
    ["PSL_HEALTH", "Health info"],
    ["PSL_FITNESS", "Fitness info"]
  ]),
  ...T("PSL_DATA_TYPES_EMAIL_AND_TEXT", "Messages", [
    ["PSL_EMAILS", "Emails"],
    ["PSL_SMS_CALL_LOG", "SMS or MMS"],
    ["PSL_OTHER_MESSAGES", "Other in-app messages"]
  ]),
  ...T("PSL_DATA_TYPES_PHOTOS_AND_VIDEOS", "Photos and videos", [
    ["PSL_PHOTOS", "Photos"],
    ["PSL_VIDEOS", "Videos"]
  ]),
  ...T("PSL_DATA_TYPES_AUDIO", "Audio files", [
    ["PSL_AUDIO", "Voice or sound recordings"],
    ["PSL_MUSIC", "Music files"],
    ["PSL_OTHER_AUDIO", "Other audio files"]
  ]),
  ...T("PSL_DATA_TYPES_FILES_AND_DOCS", "Files and docs", [["PSL_FILES_AND_DOCS", "Files and docs"]]),
  ...T("PSL_DATA_TYPES_CALENDAR", "Calendar", [["PSL_CALENDAR", "Calendar events"]]),
  ...T("PSL_DATA_TYPES_CONTACTS", "Contacts", [["PSL_CONTACTS", "Contacts"]]),
  ...T("PSL_DATA_TYPES_APP_ACTIVITY", "App activity", [
    ["PSL_USER_INTERACTION", "App interactions"],
    ["PSL_IN_APP_SEARCH_HISTORY", "In-app search history"],
    ["PSL_APPS_ON_DEVICE", "Installed apps"],
    ["PSL_USER_GENERATED_CONTENT", "Other user-generated content"],
    ["PSL_OTHER_APP_ACTIVITY", "Other actions"]
  ]),
  ...T("PSL_DATA_TYPES_SEARCH_AND_BROWSING", "Web browsing", [["PSL_WEB_BROWSING_HISTORY", "Web browsing history"]]),
  ...T("PSL_DATA_TYPES_APP_PERFORMANCE", "App info and performance", [
    ["PSL_CRASH_LOGS", "Crash logs"],
    ["PSL_PERFORMANCE_DIAGNOSTICS", "Diagnostics"],
    ["PSL_OTHER_PERFORMANCE", "Other app performance data"]
  ]),
  ...T("PSL_DATA_TYPES_IDENTIFIERS", "Device or other IDs", [["PSL_DEVICE_ID", "Device or other IDs"]]),
  ...T("PSL_DATA_TYPES_LOCATION", "Location", [
    ["PSL_APPROX_LOCATION", "Approximate location"],
    ["PSL_PRECISE_LOCATION", "Precise location"]
  ])
];
var BY_KEY2 = new Map(PLAY_DATA_TYPES.map((t) => [t.key, t]));
var playDataType = (key) => BY_KEY2.get(key);
var playLabel = (key) => {
  const t = BY_KEY2.get(key);
  return t ? t.category === t.label ? t.label : `${t.category}: ${t.label}` : key;
};
var APPLE_TO_PLAY = {
  Name: "PSL_NAME",
  EmailAddress: "PSL_EMAIL",
  PhoneNumber: "PSL_PHONE",
  PhysicalAddress: "PSL_ADDRESS",
  OtherUserContactInfo: "PSL_OTHER_PERSONAL",
  Health: "PSL_HEALTH",
  Fitness: "PSL_FITNESS",
  PaymentInfo: "PSL_CREDIT_DEBIT_BANK_ACCOUNT_NUMBER",
  CreditInfo: "PSL_CREDIT_SCORE",
  OtherFinancialInfo: "PSL_OTHER",
  PreciseLocation: "PSL_PRECISE_LOCATION",
  CoarseLocation: "PSL_APPROX_LOCATION",
  Contacts: "PSL_CONTACTS",
  EmailsOrTextMessages: "PSL_OTHER_MESSAGES",
  PhotosOrVideos: "PSL_PHOTOS",
  AudioData: "PSL_AUDIO",
  GameplayContent: "PSL_USER_GENERATED_CONTENT",
  CustomerSupport: "PSL_USER_GENERATED_CONTENT",
  OtherUserContent: "PSL_USER_GENERATED_CONTENT",
  BrowsingHistory: "PSL_WEB_BROWSING_HISTORY",
  SearchHistory: "PSL_IN_APP_SEARCH_HISTORY",
  UserID: "PSL_USER_ACCOUNT",
  DeviceID: "PSL_DEVICE_ID",
  PurchaseHistory: "PSL_PURCHASE_HISTORY",
  ProductInteraction: "PSL_USER_INTERACTION",
  AdvertisingData: "PSL_USER_INTERACTION",
  OtherUsageData: "PSL_OTHER_APP_ACTIVITY",
  CrashData: "PSL_CRASH_LOGS",
  PerformanceData: "PSL_PERFORMANCE_DIAGNOSTICS",
  OtherDiagnosticData: "PSL_OTHER_PERFORMANCE"
};
function playTypesForApple(appleKey) {
  const k = APPLE_TO_PLAY[appleKey];
  return k ? [k] : [];
}
var PLAY_EQUIVALENT = [
  ["PSL_PHOTOS", "PSL_VIDEOS"],
  ["PSL_EMAILS", "PSL_SMS_CALL_LOG", "PSL_OTHER_MESSAGES"]
];
var PLAY_PERMISSION_TYPES = {
  "android.permission.ACCESS_FINE_LOCATION": ["PSL_PRECISE_LOCATION"],
  "android.permission.ACCESS_COARSE_LOCATION": ["PSL_APPROX_LOCATION"],
  "android.permission.ACCESS_BACKGROUND_LOCATION": ["PSL_PRECISE_LOCATION"],
  "android.permission.READ_CONTACTS": ["PSL_CONTACTS"],
  "android.permission.READ_CALENDAR": ["PSL_CALENDAR"],
  "android.permission.READ_SMS": ["PSL_SMS_CALL_LOG"],
  "android.permission.RECEIVE_SMS": ["PSL_SMS_CALL_LOG"],
  "android.permission.READ_CALL_LOG": ["PSL_SMS_CALL_LOG"],
  "android.permission.RECORD_AUDIO": ["PSL_AUDIO"],
  "android.permission.READ_MEDIA_IMAGES": ["PSL_PHOTOS"],
  "android.permission.READ_MEDIA_VIDEO": ["PSL_VIDEOS"],
  "android.permission.READ_MEDIA_AUDIO": ["PSL_MUSIC"],
  "android.permission.BODY_SENSORS": ["PSL_HEALTH"],
  "android.permission.ACTIVITY_RECOGNITION": ["PSL_FITNESS"],
  "android.permission.QUERY_ALL_PACKAGES": ["PSL_APPS_ON_DEVICE"]
};
var TRUE = (v) => (v ?? "").trim().toLowerCase() === "true";
var norm = (h) => h.trim().toLowerCase().replace(/\s+/g, " ");
function parseDataSafetyCsv(text, file) {
  if (text.length > 2e6) return { ok: false, error: "That file is larger than 2 MB. A Data safety export is usually under 200 KB." };
  let rows;
  try {
    rows = parseCsv(text);
  } catch (e) {
    return { ok: false, error: `That file isn't valid CSV (${e.message}).` };
  }
  const header = (rows[0] ?? []).map(norm);
  const qCol = header.findIndex((h) => h.startsWith("question id"));
  const rCol = header.findIndex((h) => h.startsWith("response id") || h === "response (machine readable)");
  const vCol = header.findIndex((h) => h.startsWith("response value"));
  if (qCol < 0 || rCol < 0 || vCol < 0)
    return {
      ok: false,
      error: "This doesn't look like a Data safety export. In Play Console open App content \u2192 Data safety, choose Export to CSV, and upload that file unchanged."
    };
  const warnings = [];
  let collectsFlag;
  const types = [];
  const shared = [];
  const unknown = [];
  let pslRows = 0;
  for (const r of rows.slice(1)) {
    const q = (r[qCol] ?? "").trim();
    const resp = (r[rCol] ?? "").trim();
    const val = r[vCol];
    if (q.startsWith("PSL_") || q.startsWith("DATA_USAGE_")) pslRows++;
    if (q === "PSL_DATA_COLLECTION_COLLECTS_PERSONAL_DATA") {
      if ((val ?? "").trim() !== "") collectsFlag = TRUE(val);
    } else if (q.startsWith("PSL_DATA_TYPES_") && TRUE(val)) {
      if (!/^PSL_[A-Z0-9_]+$/.test(resp)) continue;
      if (!playDataType(resp)) unknown.push(resp);
      if (!types.includes(resp)) types.push(resp);
    } else if (q.startsWith("PSL_DATA_USAGE_RESPONSES:") && q.endsWith(":PSL_DATA_USAGE_COLLECTION_AND_SHARING")) {
      const t = q.split(":")[1] ?? "";
      if (resp === "PSL_DATA_USAGE_ONLY_SHARED" && TRUE(val) && !shared.includes(t)) shared.push(t);
    }
  }
  if (pslRows === 0) return { ok: false, error: "The file has the right columns but no Data safety answers. Export it again from Play Console." };
  if (collectsFlag === void 0)
    warnings.push(`The export doesn't answer "Does your app collect or share any of the required user data types?", so we went by the data types ticked.`);
  if (collectsFlag === false && types.length)
    warnings.push("The form says the app collects no data but also ticks data types. Play Console won't accept that; we compared using the ticked types.");
  if (collectsFlag === true && !types.length) warnings.push("The form says the app collects data but no data types are ticked yet.");
  if (unknown.length) warnings.push(`Unrecognised data types kept as-is: ${unknown.join(", ")}.`);
  if (types.length > 80) return { ok: false, error: "Too many data types in this file." };
  return {
    ok: true,
    declaration: {
      source: "csv",
      collectsData: types.length > 0 || collectsFlag === true,
      dataTypes: types,
      shared: shared.filter((t) => types.includes(t)),
      file
    },
    warnings
  };
}
var FASTLANE_ALIASES = {
  PAYMENT_INFORMATION: "PaymentInfo",
  CREDIT_INFORMATION: "CreditInfo",
  OTHER_CONTACT_INFO: "OtherUserContactInfo",
  AUDIO: "AudioData",
  OTHER_DATA: "OtherDataTypes"
};
function parseAppPrivacy(input, file) {
  let raw = input;
  if (typeof raw === "string") {
    try {
      raw = JSON.parse(raw);
    } catch {
      return { ok: false, error: "That file isn't valid JSON." };
    }
  }
  let names2 = [];
  let collectsFlag;
  if (Array.isArray(raw)) {
    for (const e of raw) {
      const entry = e;
      const protections = Array.isArray(entry?.data_protections) ? entry.data_protections : [];
      if (protections.includes("DATA_NOT_COLLECTED")) collectsFlag = false;
      else if (entry?.category) names2.push(entry.category);
    }
  } else if (raw && typeof raw === "object") {
    const o = raw;
    if (o.dataTypes !== void 0 && !Array.isArray(o.dataTypes)) return { ok: false, error: '"dataTypes" must be a list.' };
    names2 = o.dataTypes ?? [];
    if (typeof o.collectsData === "boolean") collectsFlag = o.collectsData;
  } else {
    return { ok: false, error: `Expected an object with "dataTypes", or fastlane's app privacy details list.` };
  }
  if (names2.length > 80) return { ok: false, error: "Too many data types." };
  const types = [];
  const unknown = [];
  for (const n of names2) {
    const s = typeof n === "string" ? n : "";
    const t = appleDataType(FASTLANE_ALIASES[s] ?? s.replace(/_/g, ""));
    if (!t) unknown.push(String(n));
    else if (!types.includes(t.key)) types.push(t.key);
  }
  if (unknown.length) return { ok: false, error: `Unknown App Store data types: ${unknown.slice(0, 5).join(", ")}. Use the names shown in App Store Connect, e.g. "Device ID".` };
  const warnings = [];
  if (collectsFlag === false && types.length) warnings.push("The label says Data Not Collected but also lists data types; we compared using the listed types.");
  return { ok: true, declaration: { source: "file", collectsData: types.length > 0 || collectsFlag === true, dataTypes: types, file }, warnings };
}
var APP_PRIVACY_FILE = ".okayed/app-privacy.json";
var DATA_SAFETY_FILE = ".okayed/data-safety.csv";
function attachDeclarationFiles(facts, root) {
  if (facts.ios) {
    const path = join2(root, APP_PRIVACY_FILE);
    if (exists(path)) {
      const r = parseAppPrivacy(readText(path) ?? "", APP_PRIVACY_FILE);
      if (r.ok) facts.storeDeclarations = { ...facts.storeDeclarations, appStore: r.declaration };
      else facts.notAudited.push(`${APP_PRIVACY_FILE} couldn't be read, so the privacy label wasn't compared: ${r.error}`);
    }
  }
  if (facts.android) {
    const path = join2(root, DATA_SAFETY_FILE);
    if (exists(path)) {
      const r = parseDataSafetyCsv(readText(path) ?? "", DATA_SAFETY_FILE);
      if (r.ok) facts.storeDeclarations = { ...facts.storeDeclarations, googlePlay: r.declaration };
      else facts.notAudited.push(`${DATA_SAFETY_FILE} couldn't be read, so the Data safety form wasn't compared: ${r.error}`);
    }
  }
  return facts;
}
var ZipArchive = class _ZipArchive {
  constructor(buf) {
    this.buf = buf;
    this.readCentralDirectory();
  }
  entries = [];
  byName = /* @__PURE__ */ new Map();
  static fromFile(path) {
    return new _ZipArchive(readFileSync2(path));
  }
  readCentralDirectory() {
    const b = this.buf;
    let eocd = -1;
    for (let i = b.length - 22; i >= Math.max(0, b.length - 22 - 65535); i--) {
      if (b.readUInt32LE(i) === 101010256) {
        eocd = i;
        break;
      }
    }
    if (eocd < 0) throw new Error("Not a valid ZIP file (no end of central directory record)");
    let count = b.readUInt16LE(eocd + 10);
    let cdOffset = b.readUInt32LE(eocd + 16);
    if (cdOffset === 4294967295 || count === 65535) {
      const loc = eocd - 20;
      if (loc >= 0 && b.readUInt32LE(loc) === 117853008) {
        const z64 = Number(b.readBigUInt64LE(loc + 8));
        count = Number(b.readBigUInt64LE(z64 + 32));
        cdOffset = Number(b.readBigUInt64LE(z64 + 48));
      }
    }
    let p = cdOffset;
    for (let n = 0; n < count; n++) {
      if (b.readUInt32LE(p) !== 33639248) throw new Error("Corrupt ZIP central directory");
      const madeBy = b.readUInt16LE(p + 4) >> 8;
      const method = b.readUInt16LE(p + 10);
      let compressedSize = b.readUInt32LE(p + 20);
      let uncompressedSize = b.readUInt32LE(p + 24);
      const nameLen = b.readUInt16LE(p + 28);
      const extraLen = b.readUInt16LE(p + 30);
      const commentLen = b.readUInt16LE(p + 32);
      const externalAttrs = b.readUInt32LE(p + 38);
      let localHeaderOffset = b.readUInt32LE(p + 42);
      const name = b.toString("utf8", p + 46, p + 46 + nameLen);
      let e = p + 46 + nameLen;
      const eEnd = e + extraLen;
      while (e + 4 <= eEnd) {
        const id = b.readUInt16LE(e);
        const size = b.readUInt16LE(e + 2);
        if (id === 1) {
          let q = e + 4;
          if (uncompressedSize === 4294967295) {
            uncompressedSize = Number(b.readBigUInt64LE(q));
            q += 8;
          }
          if (compressedSize === 4294967295) {
            compressedSize = Number(b.readBigUInt64LE(q));
            q += 8;
          }
          if (localHeaderOffset === 4294967295) {
            localHeaderOffset = Number(b.readBigUInt64LE(q));
          }
        }
        e += 4 + size;
      }
      const lhNameLen = b.readUInt16LE(localHeaderOffset + 26);
      const lhExtraLen = b.readUInt16LE(localHeaderOffset + 28);
      const dataOffset = localHeaderOffset + 30 + lhNameLen + lhExtraLen;
      const entry = { name, method, compressedSize, uncompressedSize, localHeaderOffset, dataOffset };
      if (madeBy === 3 && (externalAttrs >>> 16 & 61440) === 40960) entry.symlink = true;
      this.entries.push(entry);
      this.byName.set(name, entry);
      p += 46 + nameLen + extraLen + commentLen;
    }
  }
  has(name) {
    return this.byName.has(name);
  }
  get(name) {
    return this.byName.get(name);
  }
  read(entryOrName) {
    const entry = typeof entryOrName === "string" ? this.byName.get(entryOrName) : entryOrName;
    if (!entry) throw new Error(`ZIP entry not found: ${String(entryOrName)}`);
    const raw = this.buf.subarray(entry.dataOffset, entry.dataOffset + entry.compressedSize);
    if (entry.method === 0) return Buffer.from(raw);
    if (entry.method === 8) return inflateRawSync(raw);
    throw new Error(`Unsupported ZIP compression method ${entry.method} for ${entry.name}`);
  }
  /** First `n` bytes of an entry without inflating all of it. */
  readHead(entry, n) {
    const raw = this.buf.subarray(entry.dataOffset, entry.dataOffset + entry.compressedSize);
    if (entry.method === 0) return Buffer.from(raw.subarray(0, n));
    if (entry.method === 8) {
      try {
        return inflateRawSync(raw.subarray(0, Math.min(raw.length, n + 1024)), { finishFlush: constants.Z_SYNC_FLUSH }).subarray(0, n);
      } catch {
        return this.read(entry).subarray(0, n);
      }
    }
    return Buffer.alloc(0);
  }
};
function resolvePath(fs, path) {
  let parts = path.split("/");
  for (let guard = 0; guard < 16; guard++) {
    let changed = false;
    for (let i = 1; i <= parts.length; i++) {
      const prefix = parts.slice(0, i).join("/");
      const target = fs.links.get(prefix);
      if (target === void 0) continue;
      const base = target.startsWith("/") ? target.slice(1) : posix.join(posix.dirname(prefix), target);
      parts = posix.normalize([base, ...parts.slice(i)].join("/")).split("/");
      changed = true;
      break;
    }
    if (!changed) break;
  }
  return parts.join("/");
}
var DirBundleFS = class {
  constructor(parent, bundleDir, maxFiles = 2e5) {
    this.parent = parent;
    const stack = [basename(bundleDir)];
    while (stack.length && this.files.length < maxFiles) {
      const relDir = stack.pop();
      let names2;
      try {
        names2 = readdirSync2(join3(parent, relDir));
      } catch {
        continue;
      }
      for (const name of names2) {
        const rel2 = `${relDir}/${name}`;
        let st;
        try {
          st = lstatSync(join3(parent, rel2));
        } catch {
          continue;
        }
        if (st.isSymbolicLink()) {
          try {
            this.links.set(rel2, readlinkSync(join3(parent, rel2)));
          } catch {
          }
        } else if (st.isDirectory()) stack.push(rel2);
        else if (st.isFile()) {
          this.files.push(rel2);
          this.sizes.set(rel2, st.size);
        }
      }
    }
    this.files.sort();
  }
  files = [];
  links = /* @__PURE__ */ new Map();
  sizes = /* @__PURE__ */ new Map();
  abs(path) {
    return join3(this.parent, resolvePath(this, path));
  }
  read(path) {
    try {
      return readFileSync3(this.abs(path));
    } catch {
      return void 0;
    }
  }
  head(path, n) {
    let fd;
    try {
      fd = openSync(this.abs(path), "r");
      const b = Buffer.alloc(n);
      const got = readSync(fd, b, 0, n, 0);
      return b.subarray(0, got);
    } catch {
      return void 0;
    } finally {
      if (fd !== void 0) closeSync(fd);
    }
  }
  size(path) {
    return this.sizes.get(resolvePath(this, path));
  }
};
var ZipBundleFS = class {
  constructor(zip) {
    this.zip = zip;
    for (const e of zip.entries) {
      if (e.name.endsWith("/") || e.name.startsWith("__MACOSX/") || /(^|\/)\._/.test(e.name)) continue;
      if (e.symlink) this.links.set(e.name, zip.read(e).toString("utf8"));
      else this.files.push(e.name);
    }
  }
  files = [];
  links = /* @__PURE__ */ new Map();
  read(path) {
    const e = this.zip.get(resolvePath(this, path));
    return e ? this.zip.read(e) : void 0;
  }
  head(path, n) {
    const e = this.zip.get(resolvePath(this, path));
    return e ? this.zip.readHead(e, n) : void 0;
  }
  size(path) {
    return this.zip.get(resolvePath(this, path))?.uncompressedSize;
  }
};
var MemoryBundleFS = class {
  files = [];
  links = /* @__PURE__ */ new Map();
  data = /* @__PURE__ */ new Map();
  constructor(entries, prefix = "") {
    for (const e of entries) {
      const path = prefix + e.path;
      const type = e.mode & 61440;
      if (type === 40960) this.links.set(path, e.data.toString("utf8"));
      else if (type === 32768 || type === 0) {
        this.files.push(path);
        this.data.set(path, e.data);
      }
    }
  }
  read(path) {
    return this.data.get(resolvePath(this, path));
  }
  head(path, n) {
    return this.read(path)?.subarray(0, n);
  }
  size(path) {
    return this.read(path)?.length;
  }
};
function parsePlist(buf) {
  try {
    if (buf.subarray(0, 6).toString("ascii") === "bplist") {
      const out = import_bplist_parser.default.parseBuffer(buf);
      const v2 = Array.isArray(out) ? out[0] : out;
      return isRecord(v2) ? v2 : void 0;
    }
    const v = import_plist.default.parse(buf.toString("utf8"));
    return isRecord(v) ? v : void 0;
  } catch {
    return void 0;
  }
}
function isRecord(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
function plistKeyLine(text, key) {
  const idx = text.indexOf(`<key>${key}</key>`);
  if (idx < 0) return void 0;
  return text.slice(0, idx).split("\n").length;
}
var CPU = { 7: "x86", 16777223: "x86_64", 12: "arm", 16777228: "arm64", 33554444: "arm64_32" };
var PLATFORM = { 1: "macos", 2: "ios", 3: "tvos", 4: "watchos", 6: "maccatalyst", 7: "ios-simulator", 11: "visionos" };
function isMachO(head) {
  if (head.length < 4) return false;
  const le = head.readUInt32LE(0);
  const be = head.readUInt32BE(0);
  if (le === 4277009103 || le === 4277009102) return true;
  if (be === 3405691582 || be === 3405691583) return head.length < 8 || head.readUInt32BE(4) < 20;
  return false;
}
function parseMachO(buf) {
  if (!isMachO(buf)) return void 0;
  const be = buf.readUInt32BE(0);
  if (be === 3405691582 || be === 3405691583) {
    const is64 = be === 3405691583;
    const n = buf.readUInt32BE(4);
    const slices = [];
    for (let i = 0; i < n; i++) {
      const at = 8 + i * (is64 ? 32 : 20);
      if (at + 20 > buf.length) break;
      const offset = is64 ? Number(buf.readBigUInt64BE(at + 8)) : buf.readUInt32BE(at + 8);
      const size = is64 ? Number(buf.readBigUInt64BE(at + 16)) : buf.readUInt32BE(at + 12);
      const s2 = parseThin(buf.subarray(offset, offset + size));
      if (s2) slices.push(s2);
    }
    return slices.length ? { slices } : void 0;
  }
  const s = parseThin(buf);
  return s ? { slices: [s] } : void 0;
}
function machOArchs(buf) {
  if (buf.length < 8 || !isMachO(buf)) return [];
  const be = buf.readUInt32BE(0);
  const name = (c2) => CPU[c2] ?? `cpu${c2}`;
  if (be !== 3405691582 && be !== 3405691583) return [name(buf.readUInt32LE(4))];
  const step = be === 3405691583 ? 32 : 20;
  const out = [];
  for (let i = 0; i < buf.readUInt32BE(4) && 12 + i * step <= buf.length; i++) out.push(name(buf.readUInt32BE(8 + i * step)));
  return out;
}
function primarySlice(m) {
  return m.slices.find((s) => s.cpu === "arm64") ?? m.slices[0];
}
function parseThin(b) {
  if (b.length < 28) return void 0;
  const magic = b.readUInt32LE(0);
  const is64 = magic === 4277009103;
  if (!is64 && magic !== 4277009102) return void 0;
  const cputype = b.readUInt32LE(4);
  const filetype = b.readUInt32LE(12);
  const ncmds = b.readUInt32LE(16);
  let p = is64 ? 32 : 28;
  const slice = {
    cpu: CPU[cputype] ?? `cpu${cputype}`,
    fileType: filetype === 2 ? "execute" : filetype === 6 ? "dylib" : filetype === 8 ? "bundle" : "other",
    dylibs: []
  };
  for (let i = 0; i < ncmds && p + 8 <= b.length; i++) {
    const cmd = b.readUInt32LE(p);
    const size = b.readUInt32LE(p + 4);
    if (size < 8) break;
    if (cmd === 29 && p + 16 <= b.length) {
      const off = b.readUInt32LE(p + 8);
      const len = b.readUInt32LE(p + 12);
      if (off + len <= b.length) slice.signature = parseSignature(b.subarray(off, off + len));
    } else if ((cmd === 12 || cmd === 2147483672 || cmd === 2147483679 || cmd === 2147483683 || cmd === 32) && p + 12 <= b.length) {
      const nameOff = b.readUInt32LE(p + 8);
      const end = b.indexOf(0, p + nameOff);
      slice.dylibs.push(b.toString("utf8", p + nameOff, end > 0 && end < p + size ? end : p + size));
    } else if (cmd === 50 && p + 20 <= b.length) {
      slice.platform = PLATFORM[b.readUInt32LE(p + 8)] ?? `platform${b.readUInt32LE(p + 8)}`;
      slice.minOS = version(b.readUInt32LE(p + 12));
      slice.sdk = version(b.readUInt32LE(p + 16));
    } else if ((cmd === 36 || cmd === 37) && p + 16 <= b.length && !slice.platform) {
      slice.platform = cmd === 36 ? "macos" : "ios";
      slice.minOS = version(b.readUInt32LE(p + 8));
      slice.sdk = version(b.readUInt32LE(p + 12));
    }
    p += size;
  }
  return slice;
}
function version(v) {
  const patch = v & 255;
  return `${v >>> 16}.${v >>> 8 & 255}${patch ? `.${patch}` : ""}`;
}
function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d;
  }
  return 0;
}
var CERT_PREFIXES = [
  [/Developer ID Application/, "developer-id"],
  [/Apple Distribution/, "apple-distribution"],
  [/3rd Party Mac Developer Application/, "mac-app-distribution"],
  [/Apple Development|Mac Developer|iPhone Developer/, "development"],
  [/Apple Mac OS Application Signing/, "app-store-resigned"],
  [/Software Signing|Apple Code Signing/, "apple"]
];
var LEAF_RE = /(Developer ID Application|Apple Distribution|3rd Party Mac Developer Application|Apple Development|Mac Developer|iPhone Developer|Apple Mac OS Application Signing|Software Signing)(: [\x20-\x7e]{1,120}?\([A-Z0-9]{10}\))?/;
var TIMESTAMP_OID = Buffer.from([6, 11, 42, 134, 72, 134, 247, 13, 1, 9, 16, 2, 14]);
function certKindOf(authority) {
  if (!authority) return void 0;
  return CERT_PREFIXES.find(([re]) => re.test(authority))?.[1] ?? "other";
}
function readCms(der) {
  const text = der.toString("latin1");
  const m = text.match(LEAF_RE);
  return { authority: m?.[0], secureTimestamp: der.indexOf(TIMESTAMP_OID) >= 0 };
}
function parseSignature(blob) {
  if (blob.length < 12 || blob.readUInt32BE(0) !== 4208856256) return void 0;
  const count = blob.readUInt32BE(8);
  const sig = { flags: 0, adhoc: false, hardenedRuntime: false, linkerSigned: false, entitlements: {}, secureTimestamp: false };
  let sawCd = false;
  for (let i = 0; i < count && 12 + i * 8 + 8 <= blob.length; i++) {
    const type = blob.readUInt32BE(12 + i * 8);
    const off = blob.readUInt32BE(16 + i * 8);
    if (off + 8 > blob.length) continue;
    const magic = blob.readUInt32BE(off);
    const len = Math.min(blob.readUInt32BE(off + 4), blob.length - off);
    const body = blob.subarray(off, off + len);
    if (magic === 4208856066 && (type === 0 || !sawCd)) {
      sawCd = true;
      readCodeDirectory(body, sig);
    } else if (magic === 4208882033) {
      const raw = body.subarray(8);
      sig.entitlementsBinaryPlist = raw.subarray(0, 6).toString("latin1") === "bplist";
      sig.entitlements = parsePlist(Buffer.from(raw)) ?? {};
    } else if (magic === 4208882034 && !Object.keys(sig.entitlements).length) {
      sig.entitlements = decodeDerEntitlements(body.subarray(8)) ?? {};
    } else if (magic === 4208855809 && len > 8) {
      const cms = readCms(body.subarray(8));
      sig.authority = cms.authority;
      sig.secureTimestamp = cms.secureTimestamp;
    }
  }
  if (!sawCd) return void 0;
  sig.certKind = certKindOf(sig.authority);
  return sig;
}
function readCodeDirectory(cd, sig) {
  if (cd.length < 44) return;
  const ver = cd.readUInt32BE(8);
  sig.flags = cd.readUInt32BE(12);
  sig.adhoc = (sig.flags & 2) !== 0;
  sig.hardenedRuntime = (sig.flags & 65536) !== 0;
  sig.linkerSigned = (sig.flags & 131072) !== 0;
  const identOff = cd.readUInt32BE(20);
  if (identOff && identOff < cd.length) sig.identifier = cstr(cd, identOff);
  if (ver >= 131584 && cd.length >= 52) {
    const teamOff = cd.readUInt32BE(48);
    if (teamOff && teamOff < cd.length) sig.teamId = cstr(cd, teamOff) || void 0;
  }
}
function cstr(b, at) {
  const end = b.indexOf(0, at);
  return b.toString("utf8", at, end < 0 ? b.length : end);
}
function decodeDerEntitlements(buf) {
  try {
    const top = readTlv(buf, 0);
    if (!top) return void 0;
    let p = top.start;
    const ver = readTlv(buf, p);
    if (!ver) return void 0;
    p = ver.end;
    const dict = readTlv(buf, p);
    if (!dict) return void 0;
    const v = derValue(buf, dict);
    return v && typeof v === "object" && !Array.isArray(v) ? v : void 0;
  } catch {
    return void 0;
  }
}
function readTlv(b, p) {
  if (p + 2 > b.length) return void 0;
  let tag = b[p++];
  if ((tag & 31) === 31) {
    let t = 0;
    let c2;
    do {
      c2 = b[p++];
      t = t << 7 | c2 & 127;
    } while (c2 & 128);
    tag = (tag & 224) << 8 | t;
  }
  let len = b[p++];
  if (len & 128) {
    const n = len & 127;
    len = 0;
    for (let i = 0; i < n; i++) len = len * 256 + b[p++];
  }
  return { tag, start: p, end: p + len };
}
function derValue(b, t) {
  const kids = () => {
    const out = [];
    for (let p = t.start; p < t.end; ) {
      const k = readTlv(b, p);
      if (!k) break;
      out.push(k);
      p = k.end;
    }
    return out;
  };
  switch (t.tag) {
    case 1:
      return b[t.start] !== 0;
    case 2:
      return b.readIntBE(t.start, Math.min(6, t.end - t.start));
    case 12:
      return b.toString("utf8", t.start, t.end);
    case 48:
      return kids().map((k) => derValue(b, k));
    case 49:
    // SET of key/value SEQUENCEs
    case 40960 | 16:
    // [CONTEXT 16] constructed, long-form tag
    case 176: {
      const o = {};
      const entries = t.tag === 49 ? kids() : kids().flatMap((k) => k.tag === 49 ? derKids(b, k) : [k]);
      for (const e of entries) {
        const [k, v] = derKids(b, e);
        if (k && v) o[String(derValue(b, k))] = derValue(b, v);
      }
      return o;
    }
    default:
      return void 0;
  }
}
function derKids(b, t) {
  const out = [];
  for (let p = t.start; p < t.end; ) {
    const k = readTlv(b, p);
    if (!k) break;
    out.push(k);
    p = k.end;
  }
  return out;
}
var IOS_PROTECTED_RESOURCES = [
  {
    id: "camera",
    label: "Camera",
    keys: ["NSCameraUsageDescription"],
    patterns: [
      /\bAVCaptureDevice\s*\.\s*requestAccess\s*\(\s*for:\s*\.video/,
      /\bAVCaptureDevice\s+requestAccessForMediaType:\s*AVMediaTypeVideo/,
      /\bAVCaptureDeviceInput\b/,
      /sourceType\s*=\s*\.camera\b/,
      /\bUIImagePickerControllerSourceTypeCamera\b/,
      /\bDataScannerViewController\b/
    ],
    binarySymbols: ["AVCaptureDeviceInput", "DataScannerViewController"]
  },
  {
    id: "microphone",
    label: "Microphone",
    keys: ["NSMicrophoneUsageDescription"],
    patterns: [
      /\bAVAudioRecorder\b/,
      /\brequestRecordPermission\b/,
      /\bAVAudioApplication\s*\.\s*requestRecordPermission\b/,
      /\bAVCaptureDevice\s*\.\s*requestAccess\s*\(\s*for:\s*\.audio/,
      /\binputNode\b.*\binstallTap\b/
    ],
    binarySymbols: ["AVAudioRecorder", "requestRecordPermission"]
  },
  {
    id: "photos",
    label: "Photo library (read)",
    keys: ["NSPhotoLibraryUsageDescription"],
    patterns: [
      /\bPHPhotoLibrary\s*\.\s*requestAuthorization\b(?!\s*\(\s*for:\s*\.addOnly)/,
      /\bPHPhotoLibrary\s+requestAuthorization/,
      /\bPHAsset\s*\.\s*fetchAssets\b/,
      /\bPHAsset\s+fetchAssetsWith/
    ],
    binarySymbols: ["fetchAssetsWithOptions:", "fetchAssetsWithMediaType:options:"],
    note: "PHPickerViewController / PhotosPicker need no permission. Prefer them if you only let users pick photos."
  },
  {
    id: "photos-add",
    label: "Photo library (add only)",
    keys: ["NSPhotoLibraryAddUsageDescription", "NSPhotoLibraryUsageDescription"],
    patterns: [/\bPHPhotoLibrary\s*\.\s*requestAuthorization\s*\(\s*for:\s*\.addOnly/, /\bPHAccessLevelAddOnly\b/, /\bUIImageWriteToSavedPhotosAlbum\b/, /\bUISaveVideoAtPathToSavedPhotosAlbum\b/, /\bPHAssetChangeRequest\b/],
    binarySymbols: ["UIImageWriteToSavedPhotosAlbum", "PHAssetChangeRequest"],
    macKeys: ["NSPhotoLibraryAddUsageDescription", "NSPhotoLibraryUsageDescription"]
  },
  {
    id: "location",
    label: "Location (when in use)",
    keys: ["NSLocationWhenInUseUsageDescription"],
    patterns: [/\brequestWhenInUseAuthorization\b/, /\bCLLocationButton\b/],
    binarySymbols: ["requestWhenInUseAuthorization"],
    macKeys: ["NSLocationUsageDescription"]
  },
  {
    id: "location-always",
    label: "Location (always)",
    keys: ["NSLocationAlwaysAndWhenInUseUsageDescription"],
    patterns: [/\brequestAlwaysAuthorization\b/],
    binarySymbols: ["requestAlwaysAuthorization"],
    note: "Apps that request Always authorization must also include NSLocationWhenInUseUsageDescription.",
    macKeys: ["NSLocationUsageDescription"]
  },
  {
    id: "contacts",
    label: "Contacts",
    keys: ["NSContactsUsageDescription"],
    patterns: [/\bCNContactStore\s*\(\s*\)/, /\[\s*CNContactStore\s+alloc\s*\]/, /\bCNContactStore\s*\.\s*requestAccess/, /\brequestAccess\s*\(\s*for:\s*\.contacts/],
    binarySymbols: ["CNContactStore"],
    note: "CNContactPickerViewController needs no permission."
  },
  {
    id: "calendars",
    label: "Calendars",
    keys: ["NSCalendarsFullAccessUsageDescription", "NSCalendarsWriteOnlyAccessUsageDescription", "NSCalendarsUsageDescription"],
    patterns: [/\brequestFullAccessToEvents\b/, /\brequestWriteOnlyAccessToEvents\b/, /\brequestAccess\s*\(\s*to:\s*\.event\b/, /requestAccessToEntityType:\s*EKEntityTypeEvent/],
    binarySymbols: ["requestFullAccessToEventsWithCompletion:", "requestWriteOnlyAccessToEventsWithCompletion:"]
  },
  {
    id: "reminders",
    label: "Reminders",
    keys: ["NSRemindersFullAccessUsageDescription", "NSRemindersUsageDescription"],
    patterns: [/\brequestFullAccessToReminders\b/, /\brequestAccess\s*\(\s*to:\s*\.reminder\b/, /requestAccessToEntityType:\s*EKEntityTypeReminder/],
    binarySymbols: ["requestFullAccessToRemindersWithCompletion:"]
  },
  {
    id: "bluetooth",
    label: "Bluetooth",
    keys: ["NSBluetoothAlwaysUsageDescription"],
    patterns: [/\bCBCentralManager\s*\(/, /\bCBPeripheralManager\s*\(/, /\[\s*CBCentralManager\s+alloc\s*\]/, /\[\s*CBPeripheralManager\s+alloc\s*\]/],
    binarySymbols: ["CBCentralManager", "CBPeripheralManager"]
  },
  {
    id: "motion",
    label: "Motion & fitness",
    keys: ["NSMotionUsageDescription"],
    patterns: [/\bCMMotionActivityManager\b/, /\bCMPedometer\b/],
    binarySymbols: ["CMMotionActivityManager", "CMPedometer"],
    platforms: ["ios"]
  },
  {
    id: "health",
    label: "HealthKit",
    keys: ["NSHealthShareUsageDescription", "NSHealthUpdateUsageDescription"],
    patterns: [/\brequestAuthorization\s*\(\s*toShare:/, /requestAuthorizationToShareTypes:/],
    binarySymbols: ["requestAuthorizationToShareTypes:readTypes:completion:"],
    note: "Reading health data needs NSHealthShareUsageDescription; writing needs NSHealthUpdateUsageDescription.",
    platforms: ["ios"]
  },
  {
    id: "speech",
    label: "Speech recognition",
    keys: ["NSSpeechRecognitionUsageDescription"],
    patterns: [/\bSFSpeechRecognizer\s*\.\s*requestAuthorization\b/, /\[\s*SFSpeechRecognizer\s+requestAuthorization/],
    binarySymbols: ["SFSpeechRecognizer"]
  },
  {
    id: "faceid",
    label: "Face ID",
    keys: ["NSFaceIDUsageDescription"],
    patterns: [/\.deviceOwnerAuthenticationWithBiometrics\b/, /\bLAPolicyDeviceOwnerAuthenticationWithBiometrics\b/],
    binarySymbols: ["evaluatePolicy:localizedReason:reply:"],
    platforms: ["ios"]
  },
  {
    id: "tracking",
    label: "App Tracking Transparency",
    keys: ["NSUserTrackingUsageDescription"],
    patterns: [/\bATTrackingManager\s*\.\s*requestTrackingAuthorization\b/, /\[\s*ATTrackingManager\s+requestTrackingAuthorization/],
    binarySymbols: ["requestTrackingAuthorizationWithCompletionHandler:"]
  },
  {
    id: "homekit",
    label: "HomeKit",
    keys: ["NSHomeKitUsageDescription"],
    patterns: [/\bHMHomeManager\s*\(/, /\[\s*HMHomeManager\s+alloc\s*\]/],
    binarySymbols: ["HMHomeManager"],
    platforms: ["ios"]
  },
  {
    id: "media-library",
    label: "Apple Music / media library",
    keys: ["NSAppleMusicUsageDescription"],
    patterns: [/\bMPMediaLibrary\s*\.\s*requestAuthorization\b/, /\bMPMediaQuery\b/],
    binarySymbols: ["MPMediaQuery"],
    platforms: ["ios"]
  },
  {
    id: "nfc",
    label: "NFC",
    keys: ["NFCReaderUsageDescription"],
    patterns: [/\bNFCNDEFReaderSession\b/, /\bNFCTagReaderSession\b/],
    binarySymbols: ["NFCNDEFReaderSession", "NFCTagReaderSession"],
    platforms: ["ios"]
  }
];
IOS_PROTECTED_RESOURCES.push({
  id: "apple-events",
  label: "Apple events (controlling other apps)",
  keys: ["NSAppleEventsUsageDescription"],
  patterns: [/\bNSAppleScript\s*\(/, /\[\s*NSAppleScript\s+alloc\s*\]/, /\bSBApplication\s*\(/, /\bAESendMessage\s*\(/],
  binarySymbols: ["NSAppleScript", "SBApplication", "_AESendMessage"],
  platforms: ["macos"],
  missingIsWarning: true,
  note: "Without it, macOS 10.14+ refuses the Apple events and the automation silently fails."
});
function protectedResourcesFor(platform) {
  const p = platform === "macos" ? "macos" : "ios";
  return IOS_PROTECTED_RESOURCES.filter((r) => !r.platforms || r.platforms.includes(p)).map((r) => p === "macos" && r.macKeys ? { ...r, keys: r.macKeys } : r);
}
var ALL_USAGE_KEYS = new Set(IOS_PROTECTED_RESOURCES.flatMap((r) => r.keys).concat(["NSLocationAlwaysUsageDescription"]));
var IOS_RESOURCE_HINTS = {
  camera: { crossPatterns: [/\bCameraController\s*\(/, /\bImageSource\.camera\b/, /\bavailableCameras\s*\(/, /\bMobileScanner\b/, /\brequestCameraPermission\w*\s*\(/, /\blaunchCamera(?:Async)?\s*\(/, /<Camera(?:View)?\b/, /\bPermission\.camera\b/, /\bPERMISSIONS\.IOS\.CAMERA\b/, /\buseCameraPermission\b/], depHint: /camera|scanner|barcode|qr|vision|mlkit|zxing|image_?picker|image-?picker|document-?scanner|avfoundation/i },
  microphone: { crossPatterns: [/\bAudioRecorder\s*\(/, /\bFlutterSoundRecorder\b/, /\bSpeechToText\s*\(/, /\bAudio\.Recording\b/, /\brequestRecordingPermissionsAsync\b/, /\bVoice\.start\s*\(/, /\bPermission\.microphone\b/, /\bPERMISSIONS\.IOS\.MICROPHONE\b/, /\brecordAsync\s*\(/], depHint: /audio|record|voice|speech|microphone|\bmic\b|webrtc|agora|twilio|zoom|livekit|sound|video|call/i },
  photos: { crossPatterns: [/\bPhotoManager\b/, /\bMediaLibrary\s*\.\s*\w+/, /\bCameraRoll\b/, /\bPermission\.photos\b/, /\bPERMISSIONS\.IOS\.PHOTO_LIBRARY\b/, /\bImageSource\.gallery\b/, /\blaunchImageLibrary(?:Async)?\s*\(/], depHint: /photo|image|gallery|media|picker|camera-?roll/i },
  "photos-add": { crossPatterns: [/\bGallerySaver\b/, /\bImageGallerySaver\b/, /\bsaveToLibraryAsync\b/, /\bCameraRoll\s*\.\s*save\b/, /\bPermission\.photosAddOnly\b/, /\bPERMISSIONS\.IOS\.PHOTO_LIBRARY_ADD_ONLY\b/], depHint: /photo|image|gallery|media|saver|camera-?roll/i },
  location: { crossPatterns: [/\bGeolocator\s*\.\s*\w+/, /\bgetCurrentPositionAsync\b/, /\bwatchPositionAsync\b/, /\brequestForegroundPermissionsAsync\b/, /\bGeolocation\s*\.\s*(?:getCurrentPosition|watchPosition|requestAuthorization)\b/, /\bnavigator\.geolocation\b/, /\bPermission\.location\w*\b/, /\bPERMISSIONS\.IOS\.LOCATION\w*\b/, /\bLocation\s*\(\s*\)\s*\.\s*\w+/], depHint: /locat|geo|maps?\b|map[-_]|gps|places?\b|mapbox|tracking/i },
  "location-always": { crossPatterns: [/\brequestBackgroundPermissionsAsync\b/, /\bPermission\.locationAlways\b/, /\bPERMISSIONS\.IOS\.LOCATION_ALWAYS\b/, /\bstartLocationUpdatesAsync\b/, /\bLocationPermission\.always\b/], depHint: /locat|geo|gps|background-?geo|tracking/i },
  contacts: { crossPatterns: [/\bFlutterContacts\b/, /\bContactsService\b/, /\bContacts\s*\.\s*(?:getAll|getContactsAsync|requestPermissionsAsync|addContact)\b/, /\bPermission\.contacts\b/, /\bPERMISSIONS\.IOS\.CONTACTS\b/], depHint: /contact|address-?book|phone-?book/i },
  calendars: { crossPatterns: [/\bDeviceCalendarPlugin\b/, /\bCalendar\s*\.\s*(?:getCalendarsAsync|createEventAsync|requestCalendarPermissionsAsync)\b/, /\bRNCalendarEvents\b/, /\bPermission\.calendar\w*\b/, /\bPERMISSIONS\.IOS\.CALENDARS\w*\b/], depHint: /calendar|events?-?kit/i },
  reminders: { crossPatterns: [/\brequestRemindersPermissionsAsync\b/, /\bPermission\.reminders\b/, /\bPERMISSIONS\.IOS\.REMINDERS\b/], depHint: /remind|calendar/i },
  bluetooth: { crossPatterns: [/\bFlutterBluePlus\b/, /\bFlutterBlue\b/, /\bBleManager\b/, /\bFlutterReactiveBle\b/, /\bPermission\.bluetooth\w*\b/, /\bPERMISSIONS\.IOS\.BLUETOOTH\b/], depHint: /bluetooth|\bble\b|(?:^|[^a-z])ble[-_]|beacon|peripheral|nearby/i },
  motion: { crossPatterns: [/\bPedometer\b/, /\bPermission\.sensors\b/, /\bPERMISSIONS\.IOS\.MOTION\b/, /\bDeviceMotion\b/], depHint: /pedometer|motion|activity-?recognition|step-?count|fitness|health|sensor/i },
  health: { crossPatterns: [/\bHealth\s*\(\s*\)/, /\bHealthFactory\b/, /\bAppleHealthKit\b/, /\binitHealthKit\b/], depHint: /health|fitness/i },
  speech: { crossPatterns: [/\bSpeechToText\s*\(/, /\bVoice\.start\s*\(/, /\bPermission\.speech\b/, /\bPERMISSIONS\.IOS\.SPEECH_RECOGNITION\b/, /\bExpoSpeechRecognition\w*\b/], depHint: /speech|voice|dictation/i },
  faceid: { crossPatterns: [/\bLocalAuthentication\s*\(\s*\)/, /\bauthenticateAsync\b/, /\bReactNativeBiometrics\b/, /\bTouchID\b/, /\bPERMISSIONS\.IOS\.FACE_ID\b/, /\bbiometric\w*/i], depHint: /biometric|local.?auth|face.?id|touch.?id|keychain|passcode|secure-?store/i },
  tracking: { crossPatterns: [/\bAppTrackingTransparency\s*\.\s*requestTrackingAuthorization\b/, /\brequestTrackingPermissionsAsync\b/, /\brequestTrackingPermission\b/, /\bPermission\.appTrackingTransparency\b/, /\bPERMISSIONS\.IOS\.APP_TRACKING_TRANSPARENCY\b/], depHint: /tracking|transparency|\batt\b|idfa|ads|admob|adjust|appsflyer|branch|facebook|fbsdk|singular|kochava|applovin|ironsource|unity-?ads|tiktok/i },
  homekit: { crossPatterns: [], depHint: /homekit|home-?kit/i },
  "media-library": { crossPatterns: [/\bOnAudioQuery\b/, /\bPermission\.mediaLibrary\b/, /\bPERMISSIONS\.IOS\.MEDIA_LIBRARY\b/], depHint: /music|media|audio|player|song|itunes/i },
  "apple-events": { crossPatterns: [], depHint: /applescript|scripting-?bridge|automation/i },
  nfc: { crossPatterns: [/\bNfcManager\b/, /\bFlutterNfcKit\b/], depHint: /nfc/i }
};
var SANDBOX = "com.apple.security.app-sandbox";
var GET_TASK_ALLOW = "com.apple.security.get-task-allow";
var TEMP_EXCEPTION_PREFIX = "com.apple.security.temporary-exception.";
var MAC_RESOURCES = [
  { id: "camera", label: "camera", sandbox: ["com.apple.security.device.camera"], hardened: "com.apple.security.device.camera", checkUnused: true },
  { id: "microphone", label: "microphone", sandbox: ["com.apple.security.device.microphone", "com.apple.security.device.audio-input"], hardened: "com.apple.security.device.audio-input", checkUnused: true },
  { id: "location", label: "location", sandbox: ["com.apple.security.personal-information.location"], hardened: "com.apple.security.personal-information.location", checkUnused: true },
  { id: "contacts", label: "contacts", sandbox: ["com.apple.security.personal-information.addressbook"], hardened: "com.apple.security.personal-information.addressbook", checkUnused: true },
  { id: "calendars", label: "calendars and reminders", sandbox: ["com.apple.security.personal-information.calendars"], hardened: "com.apple.security.personal-information.calendars", checkUnused: true },
  { id: "photos", label: "Photos library", sandbox: ["com.apple.security.personal-information.photos-library", "com.apple.security.assets.pictures.read-only", "com.apple.security.assets.pictures.read-write"], hardened: "com.apple.security.personal-information.photos-library", checkUnused: true },
  { id: "bluetooth", label: "Bluetooth", sandbox: ["com.apple.security.device.bluetooth"], checkUnused: true },
  {
    id: "usb",
    label: "USB devices",
    sandbox: ["com.apple.security.device.usb"],
    checkUnused: true,
    code: [/\bIOUSBHost(?:Device|Interface)\b/, /\bkIOUSB(?:Host)?DeviceClassName\b/, /IOServiceMatching\s*\(\s*"IOUSB/],
    binary: ["IOUSBHostDevice", "IOUSBHostInterface"]
  },
  {
    id: "print",
    label: "printing",
    sandbox: ["com.apple.security.print"],
    checkUnused: true,
    code: [/\bNSPrintOperation\b/, /\.printOperation\s*\(/, /\bPDFView\b[^\n]*\bprint\s*\(/],
    binary: ["NSPrintOperation"]
  },
  {
    id: "network",
    label: "outgoing network connections",
    sandbox: ["com.apple.security.network.client"],
    checkUnused: false,
    code: [/\bURLSession\b/, /\bNSURLSession\b/, /\bAF\.request\s*\(/, /\bAlamofire\b/, /\bNWConnection\s*\(/, /\bURLSessionWebSocketTask\b/],
    binary: ["NSURLSessionDataTask", "NSURLSessionWebSocketTask", "nw_connection_create"]
  },
  {
    id: "user-files",
    label: "files the user picks (Open/Save panels)",
    sandbox: ["com.apple.security.files.user-selected.read-only", "com.apple.security.files.user-selected.read-write"],
    checkUnused: false,
    code: [/\bNSOpenPanel\b/, /\.fileImporter\s*\(/, /\bNSDocumentController\b/],
    binary: ["NSOpenPanel"]
  },
  {
    id: "user-files-write",
    label: "saving files where the user chooses (Save panel)",
    sandbox: ["com.apple.security.files.user-selected.read-write"],
    checkUnused: false,
    code: [/\bNSSavePanel\b/, /\.fileExporter\s*\(/],
    binary: ["NSSavePanel"]
  },
  {
    id: "apple-events",
    label: "sending Apple events to other apps",
    sandbox: ["com.apple.security.automation.apple-events", "com.apple.security.temporary-exception.apple-events", "com.apple.security.scripting-targets"],
    hardened: "com.apple.security.automation.apple-events",
    checkUnused: false,
    code: [/\bNSAppleScript\s*\(/, /\[\s*NSAppleScript\s+alloc\s*\]/, /\bSBApplication\s*\(/, /\bAESendMessage\s*\(/, /\bNSAppleEventDescriptor\b[^\n]*\bsendEvent\b/],
    binary: ["NSAppleScript", "SBApplication", "_AESendMessage"]
  }
];
var SHARED_TO_MAC = {
  camera: "camera",
  microphone: "microphone",
  location: "location",
  "location-always": "location",
  contacts: "contacts",
  calendars: "calendars",
  reminders: "calendars",
  photos: "photos",
  "photos-add": "photos",
  bluetooth: "bluetooth"
};
var BUILD_SETTING_ENTITLEMENTS = {
  ENABLE_OUTGOING_NETWORK_CONNECTIONS: ["com.apple.security.network.client"],
  ENABLE_INCOMING_NETWORK_CONNECTIONS: ["com.apple.security.network.server"],
  ENABLE_RESOURCE_ACCESS_CAMERA: ["com.apple.security.device.camera"],
  ENABLE_RESOURCE_ACCESS_AUDIO_INPUT: ["com.apple.security.device.audio-input", "com.apple.security.device.microphone"],
  ENABLE_RESOURCE_ACCESS_USB: ["com.apple.security.device.usb"],
  ENABLE_RESOURCE_ACCESS_BLUETOOTH: ["com.apple.security.device.bluetooth"],
  ENABLE_RESOURCE_ACCESS_PRINTING: ["com.apple.security.print"],
  ENABLE_RESOURCE_ACCESS_LOCATION: ["com.apple.security.personal-information.location"],
  ENABLE_RESOURCE_ACCESS_CONTACTS: ["com.apple.security.personal-information.addressbook"],
  ENABLE_RESOURCE_ACCESS_CALENDARS: ["com.apple.security.personal-information.calendars"],
  ENABLE_RESOURCE_ACCESS_PHOTO_LIBRARY: ["com.apple.security.personal-information.photos-library"]
};
var AUTO_UPDATERS = [
  {
    id: "sparkle",
    name: "Sparkle",
    frameworks: /^Sparkle$/,
    deps: /^(Sparkle|sparkle|sparkle-project\/Sparkle)$/i,
    code: [/\bSPUStandardUpdaterController\b/, /\bSPUUpdater\b/, /\bSUUpdater\b/, /^\s*import\s+Sparkle\b/m, /#import\s+<Sparkle\//],
    binary: ["SPUStandardUpdaterController", "SPUUpdater", "SUUpdater"],
    plistKeys: ["SUFeedURL", "SUPublicEDKey", "SUPublicDSAKeyFile", "SUEnableAutomaticChecks"]
  },
  { id: "squirrel", name: "Squirrel.Mac (Electron autoUpdater)", frameworks: /^Squirrel$/, deps: /^(Squirrel|squirrel\.mac|Squirrel\/Squirrel\.Mac|electron-updater|update-electron-app)$/i, code: [/\bSQRLUpdater\b/, /\bautoUpdater\s*\.\s*(?:checkForUpdates(?:AndNotify)?|setFeedURL)\s*\(/], binary: ["SQRLUpdater"], plistKeys: [] },
  { id: "devmate", name: "DevMate", frameworks: /^DevMateKit$/, deps: /^DevMateKit$/i, code: [/\bDM_SUUpdater\b|\bDevMateKit\b/], binary: ["DM_SUUpdater"], plistKeys: [] }
];
var LOGIN_APIS = [
  { id: "SMAppService", name: "SMAppService", approved: true, code: [/\bSMAppService\b/], binary: ["SMAppService"] },
  { id: "LaunchAtLogin", name: "LaunchAtLogin package (uses SMAppService)", approved: true, code: [/\bLaunchAtLogin\s*\.\s*(?:isEnabled|Toggle)\b/], binary: [] },
  { id: "electron-login", name: "Electron app.setLoginItemSettings (uses SMAppService)", approved: true, code: [/\bsetLoginItemSettings\s*\(\s*\{[^}]*\bopenAtLogin\s*:\s*true/], binary: [] },
  { id: "SMLoginItemSetEnabled", name: "SMLoginItemSetEnabled", approved: true, deprecated: true, code: [/\bSMLoginItemSetEnabled\s*\(/], binary: ["_SMLoginItemSetEnabled"] },
  { id: "LSSharedFileList", name: "LSSharedFileList login items", approved: false, code: [/\bkLSSharedFileListSessionLoginItems\b/, /\bLSSharedFileListInsertItemURL\b/], binary: ["_kLSSharedFileListSessionLoginItems", "_LSSharedFileListInsertItemURL"] },
  { id: "LaunchAgent file", name: "a hand-written LaunchAgents plist", approved: false, code: [/Library\/LaunchAgents\//, /\blaunchctl\b[^\n]{0,40}\b(?:load|bootstrap)\b/], binary: ["Library/LaunchAgents/", "launchctl load", "launchctl bootstrap"] },
  { id: "AppleScript", name: "a System Events login item (AppleScript)", approved: false, code: [/make\s+(?:new\s+)?login item/i], binary: ["make login item", "make new login item"] }
];
var LOGIN_CONSENT = /\b(?:launch|open|start|run)(?:s|ing)?\s+(?:\w+\s+){0,2}(?:at|on|when you)\s+(?:log ?in|login|start-?up|system start)|\bLaunchAtLogin\.Toggle\b|\bLogin Items?\b/i;
var INSTALL_OUTSIDE = [
  { id: "privileged-helper", name: "SMJobBless privileged helper", code: [/\bSMJobBless\s*\(/], binary: ["_SMJobBless"] },
  { id: "root", name: "AuthorizationExecuteWithPrivileges (root)", code: [/\bAuthorizationExecuteWithPrivileges\s*\(/], binary: ["_AuthorizationExecuteWithPrivileges"] },
  { id: "setuid", name: "setuid", code: [/\bsetuid\s*\(\s*0\s*\)/, /chmod\s+[ug]\+s\b/, /\bS_ISUID\b/], binary: ["chmod u+s", "chmod 4755"] },
  { id: "kext", name: "loads a kernel extension", code: [/\bkextload\b/, /\bKextManagerLoadKext\w*\s*\(/], binary: ["kextload", "_KextManagerLoadKextWithURL"] },
  { id: "installer", name: "runs the macOS installer", code: [/\/usr\/sbin\/installer\b/], binary: ["/usr/sbin/installer"] },
  { id: "shared-location", name: "writes to a shared system folder", code: [/["']\/(?:Library\/(?:LaunchDaemons|Extensions|PrivilegedHelperTools|Application Support)|usr\/local\/(?:bin|lib)|Applications)\/[^"']*["']/], binary: ["/Library/LaunchDaemons/", "/Library/PrivilegedHelperTools/", "/usr/local/bin/"] }
];
var CODE_EXECUTION = [
  { id: "dlopen", name: "loads a library at runtime (dlopen)", code: [/\bdlopen\s*\(\s*(?!["'](?:\/usr\/lib|\/System)\/)(?!NULL|nil\b)/], binary: [] },
  { id: "bundle-load", name: "loads a code bundle at runtime", code: [/\bBundle\s*\(\s*(?:url|path):[^)\n]*\)\s*[?!]?\s*\.\s*load(?:AndReturnError)?\s*\(/, /\[\s*\[\s*NSBundle\s+bundleWith(?:Path|URL):[^\]]*\]\s+load(?:AndReturnError:[^\]]*)?\]/], binary: [] },
  { id: "chmod-exec", name: "makes a file executable", code: [/posixPermissions[^\n]{0,60}(?:0o?7[57]5|\b493\b|\b511\b)/, /chmod\s*\([^\n]{0,60}0o?7[57]5/, /chmod\s+\+x\b/, /chmod\s+7[57]5\b/], binary: ["chmod +x", "chmod 755"] }
];
var SHELL_PATHS = /["'](?:\/bin\/(?:ba|z|c|tc)?sh|\/usr\/bin\/(?:env|python3?|ruby|perl|osascript|curl))["']/;
var PROCESS_API = /\bProcess\s*\(\s*\)|\bNSTask\b|\bposix_spawn\w*\s*\(|\bsystem\s*\(\s*"|\bpopen\s*\(|\bchild_process\b|\bexecSync\s*\(|\bspawn(?:Sync)?\s*\(/;
var SHELL_BINARY = ["/bin/bash", "/bin/zsh", "/bin/sh", "/usr/bin/python3", "/usr/bin/osascript", "/usr/bin/ruby", "/usr/bin/perl", "/usr/bin/env"];
var PROCESS_BINARY = ["NSTask", "_posix_spawn", "_system"];
var SDK_SIGNATURES = [
  {
    id: "firebase-analytics",
    name: "Firebase Analytics",
    category: "analytics",
    tracking: false,
    ios: { pods: ["FirebaseAnalytics", "Firebase/Analytics"], frameworks: ["FirebaseAnalytics"] },
    android: { gradle: ["com.google.firebase:firebase-analytics"], classes: ["com/google/firebase/analytics/", "com/google/android/gms/measurement/"] },
    npm: ["@react-native-firebase/analytics"],
    pub: ["firebase_analytics"],
    // Google Analytics for Firebase ships no privacy manifest; defaults per https://support.google.com/analytics/answer/10285841
    collects: ["DeviceID", "CoarseLocation", "PurchaseHistory", "ProductInteraction"],
    playCollects: ["PSL_DEVICE_ID", "PSL_APPROX_LOCATION", "PSL_PURCHASE_HISTORY", "PSL_USER_INTERACTION"],
    verified: { apple: "2026-11-23", play: "2026-11-23" },
    privacyDocs: "https://support.google.com/analytics/answer/10285841",
    playDocs: "https://support.google.com/analytics/answer/11582702"
  },
  {
    id: "firebase-crashlytics",
    name: "Firebase Crashlytics",
    category: "crash",
    tracking: false,
    ios: { pods: ["FirebaseCrashlytics", "Firebase/Crashlytics"], frameworks: ["FirebaseCrashlytics"] },
    android: { gradle: ["com.google.firebase:firebase-crashlytics"], classes: ["com/google/firebase/crashlytics/"] },
    npm: ["@react-native-firebase/crashlytics"],
    pub: ["firebase_crashlytics"],
    collects: ["CrashData", "OtherDiagnosticData"],
    playCollects: ["PSL_CRASH_LOGS", "PSL_PERFORMANCE_DIAGNOSTICS", "PSL_DEVICE_ID"],
    verified: { apple: "2026-11-23", play: "2026-11-23" },
    privacyDocs: "https://firebase.google.com/docs/ios/app-store-data-collection",
    playDocs: "https://firebase.google.com/docs/android/play-data-disclosure"
  },
  {
    id: "firebase-messaging",
    name: "Firebase Cloud Messaging",
    category: "messaging",
    tracking: false,
    ios: { pods: ["FirebaseMessaging", "Firebase/Messaging"], frameworks: ["FirebaseMessaging"] },
    android: { gradle: ["com.google.firebase:firebase-messaging"], classes: ["com/google/firebase/messaging/"] },
    npm: ["@react-native-firebase/messaging"],
    pub: ["firebase_messaging"],
    collects: ["DeviceID", "OtherDiagnosticData", "OtherDataTypes"],
    playCollects: ["PSL_DEVICE_ID"],
    verified: { apple: "2026-11-23", play: "2026-11-23" },
    privacyDocs: "https://firebase.google.com/docs/ios/app-store-data-collection",
    playDocs: "https://firebase.google.com/docs/android/play-data-disclosure"
  },
  {
    id: "google-mobile-ads",
    name: "Google Mobile Ads (AdMob)",
    category: "ads",
    tracking: true,
    ios: { pods: ["Google-Mobile-Ads-SDK"], spm: ["swift-package-manager-google-mobile-ads"], frameworks: ["GoogleMobileAds"] },
    android: { gradle: ["com.google.android.gms:play-services-ads"], classes: ["com/google/android/gms/ads/"] },
    npm: ["react-native-google-mobile-ads"],
    pub: ["google_mobile_ads"],
    collects: ["DeviceID", "AdvertisingData", "ProductInteraction", "CoarseLocation", "CrashData", "PerformanceData"],
    playCollects: ["PSL_APPROX_LOCATION", "PSL_USER_INTERACTION", "PSL_PERFORMANCE_DIAGNOSTICS", "PSL_DEVICE_ID"],
    verified: { apple: "2026-11-23", play: "2026-11-23" },
    privacyDocs: "https://developers.google.com/admob/ios/privacy/data-disclosure",
    playDocs: "https://developers.google.com/admob/android/privacy/play-data-disclosure"
  },
  {
    id: "facebook-sdk",
    name: "Meta (Facebook) SDK",
    category: "attribution",
    tracking: true,
    ios: { pods: ["FBSDKCoreKit", "FBSDKShareKit", "FacebookSDK"], spm: ["facebook-ios-sdk"], frameworks: ["FBSDKCoreKit", "FBAEMKit"] },
    android: { gradle: ["com.facebook.android:facebook-android-sdk", "com.facebook.android:facebook-core"], classes: ["com/facebook/FacebookSdk", "com/facebook/appevents/"] },
    npm: ["react-native-fbsdk-next"],
    pub: ["facebook_app_events"],
    collects: ["DeviceID", "AdvertisingData", "ProductInteraction", "OtherUsageData"]
  },
  {
    id: "appsflyer",
    name: "AppsFlyer",
    category: "attribution",
    tracking: true,
    ios: { pods: ["AppsFlyerFramework"], spm: ["appsflyerframework", "appsflyer-apple-sdk-spm"], frameworks: ["AppsFlyerLib"] },
    android: { gradle: ["com.appsflyer:af-android-sdk"], classes: ["com/appsflyer/"] },
    npm: ["react-native-appsflyer"],
    pub: ["appsflyer_sdk"],
    collects: ["DeviceID", "AdvertisingData", "ProductInteraction", "CoarseLocation"]
  },
  {
    id: "adjust",
    name: "Adjust",
    category: "attribution",
    tracking: true,
    ios: { pods: ["Adjust"], spm: ["ios_sdk"], frameworks: ["AdjustSdk", "Adjust"] },
    android: { gradle: ["com.adjust.sdk:adjust-android"], classes: ["com/adjust/sdk/"] },
    npm: ["react-native-adjust"],
    pub: ["adjust_sdk"],
    collects: ["DeviceID", "AdvertisingData", "ProductInteraction"],
    // Adjust's Play page: device IDs collected by default; sessions as app activity; purchases optional. No Apple label page found (2026-11-23).
    playCollects: ["PSL_DEVICE_ID"],
    verified: { play: "2026-11-23" },
    playDocs: "https://help.adjust.com/en/article/google-play-data-safety"
  },
  {
    id: "branch",
    name: "Branch",
    category: "attribution",
    tracking: true,
    ios: { pods: ["Branch", "BranchSDK"], spm: ["ios-branch-sdk-spm", "ios-branch-deep-linking-attribution"], frameworks: ["BranchSDK", "Branch"] },
    android: { gradle: ["io.branch.sdk.android:library"], classes: ["io/branch/referral/"] },
    npm: ["react-native-branch"],
    pub: ["flutter_branch_sdk"],
    // Branch's App Store guide: Browsing History and Other Data "Yes"; Identifiers "Yes" (sub-type not named, so not listed); Purchases/Usage optional.
    // Its Play guide marks every type optional, so Play stays unverified.
    collects: ["BrowsingHistory", "OtherDataTypes"],
    verified: { apple: "2026-11-23" },
    privacyDocs: "https://help.branch.io/developer-hub/docs/answering-the-app-store-connect-privacy-questions",
    playDocs: "https://help.branch.io/developer-hub/answering-the-google-play-store-privacy-questions.md"
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    category: "analytics",
    tracking: false,
    ios: { pods: ["Mixpanel", "Mixpanel-swift"], spm: ["mixpanel-swift", "mixpanel-iphone"], frameworks: ["Mixpanel"] },
    android: { gradle: ["com.mixpanel.android:mixpanel-android"], classes: ["com/mixpanel/android/"] },
    npm: ["mixpanel-react-native"],
    pub: ["mixpanel_flutter"],
    collects: ["DeviceID", "ProductInteraction", "OtherUsageData"]
  },
  {
    id: "amplitude",
    name: "Amplitude",
    category: "analytics",
    tracking: false,
    ios: { pods: ["Amplitude", "AmplitudeSwift"], spm: ["amplitude-ios", "amplitude-swift"], frameworks: ["Amplitude", "AmplitudeSwift"] },
    android: { gradle: ["com.amplitude:android-sdk", "com.amplitude:analytics-android"], classes: ["com/amplitude/"] },
    npm: ["@amplitude/analytics-react-native"],
    pub: ["amplitude_flutter"],
    collects: ["DeviceID", "ProductInteraction", "CoarseLocation"]
  },
  {
    id: "segment",
    name: "Segment",
    category: "analytics",
    tracking: false,
    ios: { pods: ["Analytics", "Segment"], spm: ["analytics-swift", "analytics-ios"], frameworks: ["Segment"] },
    android: { gradle: ["com.segment.analytics.android:analytics", "com.segment.analytics.kotlin:android"], classes: ["com/segment/analytics/"] },
    npm: ["@segment/analytics-react-native"],
    pub: ["analytics"],
    collects: ["DeviceID", "ProductInteraction"]
  },
  {
    id: "sentry",
    name: "Sentry",
    category: "crash",
    tracking: false,
    ios: { pods: ["Sentry"], spm: ["sentry-cocoa"], frameworks: ["Sentry"] },
    android: { gradle: ["io.sentry:sentry-android"], classes: ["io/sentry/"] },
    npm: ["@sentry/react-native"],
    pub: ["sentry_flutter"],
    // Sentry's own sample privacy manifest (sentry-cocoa 8.25.0+): not linked, not tracking. No Play Data safety page.
    collects: ["CrashData", "PerformanceData", "OtherDiagnosticData"],
    verified: { apple: "2026-11-23" },
    privacyDocs: "https://docs.sentry.io/platforms/apple/data-management/apple-privacy-manifest/"
  },
  {
    id: "onesignal",
    name: "OneSignal",
    category: "messaging",
    tracking: false,
    ios: { pods: ["OneSignal", "OneSignalXCFramework"], spm: ["onesignal-xcframework", "onesignal-ios-sdk"], frameworks: ["OneSignal", "OneSignalCore"] },
    android: { gradle: ["com.onesignal:OneSignal"], classes: ["com/onesignal/"] },
    npm: ["react-native-onesignal", "onesignal-expo-plugin"],
    pub: ["onesignal_flutter"],
    // OneSignal's App Store and Play guides: in-app purchases and app interactions (sessions, notification clicks) by default.
    // It also assigns a OneSignal ID ("Identifiers") without naming the Apple sub-type, so that isn't listed.
    collects: ["PurchaseHistory", "ProductInteraction"],
    playCollects: ["PSL_PURCHASE_HISTORY", "PSL_USER_INTERACTION"],
    verified: { apple: "2026-11-23", play: "2026-11-23" },
    privacyDocs: "https://documentation.onesignal.com/docs/en/apple-app-privacy-requirements",
    playDocs: "https://documentation.onesignal.com/docs/en/google-play-data-safety-requirements"
  },
  {
    id: "revenuecat",
    name: "RevenueCat",
    category: "payments",
    tracking: false,
    ios: { pods: ["RevenueCat"], spm: ["purchases-ios", "purchases-ios-spm"], frameworks: ["RevenueCat"] },
    android: { gradle: ["com.revenuecat.purchases:purchases"], classes: ["com/revenuecat/purchases/"] },
    npm: ["react-native-purchases"],
    pub: ["purchases_flutter"],
    // RevenueCat's guides: purchase history always; User ID / Device ID only with custom IDs or ad-ID integrations.
    collects: ["PurchaseHistory"],
    playCollects: ["PSL_PURCHASE_HISTORY"],
    verified: { apple: "2026-11-23", play: "2026-11-23" },
    privacyDocs: "https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy",
    playDocs: "https://www.revenuecat.com/docs/platform-resources/google-platform-resources/google-plays-data-safety"
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "payments",
    tracking: false,
    ios: { pods: ["Stripe", "StripePaymentSheet"], spm: ["stripe-ios", "stripe-ios-spm"], frameworks: ["Stripe", "StripeCore"] },
    android: { gradle: ["com.stripe:stripe-android"], classes: ["com/stripe/android/"] },
    npm: ["@stripe/stripe-react-native"],
    pub: ["flutter_stripe"],
    collects: ["PaymentInfo", "EmailAddress", "PhysicalAddress"]
  },
  {
    id: "google-play-billing",
    name: "Google Play Billing Library",
    category: "payments",
    tracking: false,
    android: { gradle: ["com.android.billingclient:billing"], classes: ["com/android/billingclient/"] },
    collects: ["PurchaseHistory"]
  },
  {
    id: "openai",
    name: "OpenAI client",
    category: "ai",
    tracking: false,
    ios: { spm: ["openai", "swiftopenai", "macpaw-openai"], pods: ["OpenAISwift"] },
    android: { gradle: ["com.aallam.openai:openai-client", "com.openai:openai-java"], classes: ["com/aallam/openai/", "com/openai/"] },
    npm: ["openai"],
    pub: ["dart_openai", "openai_dart"],
    collects: ["OtherUserContent"]
  },
  {
    id: "anthropic",
    name: "Anthropic client",
    category: "ai",
    tracking: false,
    ios: { spm: ["swiftanthropic", "anthropic-swift-sdk"] },
    android: { gradle: ["com.anthropic:anthropic-java"], classes: ["com/anthropic/"] },
    npm: ["@anthropic-ai/sdk"],
    pub: ["anthropic_sdk_dart"],
    collects: ["OtherUserContent"]
  },
  {
    id: "gemini",
    name: "Google Gemini / Firebase AI",
    category: "ai",
    tracking: false,
    ios: { pods: ["FirebaseAI", "FirebaseVertexAI"], spm: ["generative-ai-swift"] },
    android: { gradle: ["com.google.ai.client.generativeai:generativeai", "com.google.firebase:firebase-ai", "com.google.firebase:firebase-vertexai"], classes: ["com/google/ai/client/generativeai/", "com/google/firebase/ai/", "com/google/firebase/vertexai/"] },
    npm: ["@google/generative-ai", "@google/genai", "@react-native-firebase/ai"],
    pub: ["google_generative_ai", "firebase_ai", "firebase_vertexai"],
    collects: ["OtherUserContent"]
  },
  // Login SDKs (IOS-LOGIN-001, IOS-ACCT-001). Data lists are left empty: what they collect depends on the scopes the app asks for.
  {
    id: "google-sign-in",
    name: "Google Sign-In",
    category: "auth",
    tracking: false,
    ios: { pods: ["GoogleSignIn"], spm: ["googlesignin-ios"], frameworks: ["GoogleSignIn"] },
    android: { gradle: ["com.google.android.gms:play-services-auth", "androidx.credentials:credentials-play-services-auth"], classes: ["com/google/android/gms/auth/api/signin/"] },
    npm: ["@react-native-google-signin/google-signin"],
    pub: ["google_sign_in"],
    collects: []
  },
  {
    id: "facebook-login",
    name: "Facebook Login",
    category: "auth",
    tracking: false,
    ios: { pods: ["FBSDKLoginKit"], frameworks: ["FBSDKLoginKit"] },
    android: { gradle: ["com.facebook.android:facebook-login"], classes: ["com/facebook/login/"] },
    pub: ["flutter_facebook_auth", "flutter_login_facebook"],
    collects: []
  },
  {
    id: "sign-in-with-apple",
    name: "Sign in with Apple",
    category: "auth",
    tracking: false,
    npm: ["expo-apple-authentication", "@invertase/react-native-apple-authentication"],
    pub: ["sign_in_with_apple", "the_apple_sign_in"],
    collects: []
  },
  {
    id: "firebase-auth",
    name: "Firebase Authentication",
    category: "auth",
    tracking: false,
    ios: { pods: ["FirebaseAuth", "Firebase/Auth"], frameworks: ["FirebaseAuth"] },
    android: { gradle: ["com.google.firebase:firebase-auth"], classes: ["com/google/firebase/auth/"] },
    npm: ["@react-native-firebase/auth"],
    pub: ["firebase_auth"],
    collects: []
  },
  // Flutter / React Native plugins that request protected resources on their own.
  { id: "flutter-image-picker", name: "image_picker (Flutter)", category: "ui", tracking: false, pub: ["image_picker"], collects: [], impliesResources: ["photos", "camera"] },
  { id: "flutter-camera", name: "camera (Flutter)", category: "ui", tracking: false, pub: ["camera"], collects: [], impliesResources: ["camera", "microphone"] },
  { id: "flutter-geolocator", name: "geolocator (Flutter)", category: "other", tracking: false, pub: ["geolocator", "location"], collects: ["PreciseLocation"], impliesResources: ["location"] },
  { id: "rn-vision-camera", name: "react-native-vision-camera", category: "ui", tracking: false, npm: ["react-native-vision-camera"], collects: [], impliesResources: ["camera"] },
  { id: "expo-camera", name: "expo-camera", category: "ui", tracking: false, npm: ["expo-camera"], collects: [], impliesResources: ["camera"] },
  { id: "expo-location", name: "expo-location", category: "other", tracking: false, npm: ["expo-location", "react-native-geolocation-service", "@react-native-community/geolocation"], collects: ["PreciseLocation"], impliesResources: ["location"] },
  { id: "expo-contacts", name: "expo-contacts", category: "other", tracking: false, npm: ["expo-contacts", "react-native-contacts"], collects: ["Contacts"], impliesResources: ["contacts"] }
];
function findSignatureByPod(name) {
  const root = name.split("/")[0];
  return SDK_SIGNATURES.find((s) => s.ios?.pods?.some((p) => p === name || p === root));
}
function findSignatureBySpm(identity) {
  const id = identity.toLowerCase();
  return SDK_SIGNATURES.find((s) => s.ios?.spm?.some((p) => p.toLowerCase() === id));
}
function findSignatureByFramework(name) {
  return SDK_SIGNATURES.find((s) => s.ios?.frameworks?.includes(name));
}
function findSignatureByGradle(coord) {
  return SDK_SIGNATURES.find((s) => s.android?.gradle?.some((g) => coord === g || coord.startsWith(g + ":") || coord.startsWith(g + "-")));
}
function findSignatureByNpm(pkg) {
  return SDK_SIGNATURES.find((s) => s.npm?.includes(pkg));
}
function findSignatureByPub(pkg) {
  return SDK_SIGNATURES.find((s) => s.pub?.includes(pkg));
}
function findSignaturesInDex(dex) {
  return SDK_SIGNATURES.filter((s) => s.android?.classes?.some((c2) => dex.indexOf("L" + c2, 0, "latin1") >= 0));
}
var AsarArchive = class {
  constructor(buf) {
    this.buf = buf;
    if (buf.length < 16 || buf.readUInt32LE(0) !== 4) throw new Error("Not an asar archive");
    const headerSize = buf.readUInt32LE(4);
    const jsonLen = buf.readUInt32LE(12);
    if (16 + jsonLen > buf.length) throw new Error("Truncated asar header");
    const tree = JSON.parse(buf.toString("utf8", 16, 16 + jsonLen));
    this.base = 8 + headerSize;
    const walk2 = (n, prefix) => {
      for (const [name, child] of Object.entries(n.files ?? {})) {
        const p = prefix ? `${prefix}/${name}` : name;
        if (child.files) walk2(child, p);
        else if (child.size !== void 0) this.files.push({ path: p, offset: Number(child.offset ?? 0), size: Number(child.size), unpacked: !!child.unpacked });
      }
    };
    walk2(tree, "");
  }
  files = [];
  base;
  /** Contents of a packed file; undefined for unpacked ones (they live in app.asar.unpacked/). */
  read(f) {
    if (f.unpacked) return void 0;
    const start = this.base + f.offset;
    return start + f.size <= this.buf.length ? this.buf.subarray(start, start + f.size) : void 0;
  }
};
var ACCOUNT_CREATION = [
  { id: "firebase-auth", name: "Firebase Auth sign-up", re: /\bcreateUser(?:WithEmail(?:AndPassword)?|\s*\(\s*withEmail)\b/ },
  { id: "supabase-auth", name: "Supabase sign-up", re: /\bauth\s*\.\s*signUp\s*\(/ },
  { id: "amplify-auth", name: "Amplify sign-up", re: /\b(?:Amplify\s*\.\s*)?Auth\s*\.\s*signUp\s*\(/ },
  { id: "signup-endpoint", name: "sign-up API call", re: /(?:^|["'`])[^"'`\s]*\/(?:api\/)?(?:auth\/)?(?:sign-?up|register|accounts?\/create)(?:$|["'`?])/im },
  { id: "signup-ui", name: '"Create account" / "Sign up" UI', re: /(?:^|["'>`])\s*(?:Create (?:an |your |new )?account|Sign up(?: (?:with|for) [\w ]{1,20})?|Register (?:now|an account|for an account))\s*[.!]?\s*(?:$|["'<`])/im }
];
var ACCOUNT_DELETION = [
  { id: "delete-user-call", name: "deletes the signed-in user", re: /\b(?:currentUser|user|auth\.currentUser)\s*[?!]?\s*\.\s*delete\s*\(/ },
  { id: "delete-account-fn", name: "account deletion function", re: /\b(?:delete|remove|close)_?(?:My)?(?:User)?Account\w*\s*\(|\bdeleteUser\s*\(/i },
  { id: "delete-account-endpoint", name: "account deletion API call", re: /(?:^|["'`])[^"'`\s]*\/(?:account|accounts|users?|me)\/(?:delete|remove|close)\b|(?:^|["'`])[^"'`\s]*\/delete-?account/im },
  { id: "delete-account-ui", name: '"Delete account" UI', re: /\b(?:Delete|Remove|Close|Erase) (?:my |your |the )?account\b/i },
  { id: "siwa-revoke", name: "Sign in with Apple token revocation", re: /appleid\.apple\.com\/auth\/revoke|\brevokeToken\b|\brevokeAccessToken\b/ }
];
var THIRD_PARTY_LOGIN = [
  { id: "google", name: "Google Sign-In", re: /\bGIDSignIn\b|\bGoogleSignIn\s*\(|\bGoogleAuthProvider\b|\bGoogleSignin\s*\.\s*signIn\b|\bGoogleSignInClient\b/ },
  { id: "facebook", name: "Facebook Login", re: /\bFBSDKLoginManager\b|\bFBLoginButton\b|\bFacebookAuthProvider\b|\bLoginManager\s*\.\s*(?:logInWithPermissions|getInstance\s*\(\s*\)\s*\.\s*logIn)|\bFacebookAuth\s*\.\s*instance\s*\.\s*login\b/ },
  { id: "x", name: "Log in with X / Twitter", re: /\bTwitterAuthProvider\b|\bTWTRTwitter\b/ },
  { id: "linkedin", name: "Sign In with LinkedIn", re: /linkedin\.com\/oauth\/v2\/authorization/ },
  { id: "amazon", name: "Login with Amazon", re: /\bAMZNAuthorizeRequest\b|\bAMZNAuthorizationManager\b/ },
  { id: "wechat", name: "WeChat Login", re: /\bSendAuthReq\b|\bSendAuth\.Req\b/ }
];
var THIRD_PARTY_LOGIN_DEPS = [
  { id: "google", name: "Google Sign-In", deps: /^(GoogleSignIn|googlesignin-ios|GoogleSignInSwiftSupport|@react-native-google-signin\/google-signin|react-native-google-signin|google_sign_in|com\.google\.android\.gms:play-services-auth)$/ },
  { id: "facebook", name: "Facebook Login", deps: /^(FBSDKLoginKit|FacebookLogin|flutter_facebook_auth|flutter_login_facebook|com\.facebook\.android:facebook-login)$/ },
  { id: "amazon", name: "Login with Amazon", deps: /^(LoginWithAmazon)$/ },
  { id: "wechat", name: "WeChat Login", deps: /^(WechatOpenSDK|fluwx|react-native-wechat-lib)$/ }
];
var PRIVACY_LOGIN = [
  { id: "siwa", name: "Sign in with Apple", re: /\bASAuthorizationAppleIDProvider\b|\bSignInWithAppleButton\b|\bAppleAuthProvider\b|providerID:\s*"apple\.com"|\bOAuthProvider\s*\(\s*["']apple\.com["']|\bAppleAuthentication\s*\.\s*signInAsync\b|\bappleAuth\s*\.\s*performRequest\b|\bSignInWithApple\s*\.\s*getAppleIDCredential\b/ }
];
var PRIVACY_LOGIN_DEPS = /^(sign_in_with_apple|the_apple_sign_in|expo-apple-authentication|@invertase\/react-native-apple-authentication|react-native-apple-authentication)$/;
var AI_ENDPOINTS = [
  { id: "openai", name: "OpenAI API", re: /\bapi\.openai\.com\b|\.openai\.azure\.com\b/ },
  { id: "anthropic", name: "Anthropic API", re: /\bapi\.anthropic\.com\b/ },
  { id: "gemini", name: "Google Gemini API", re: /\bgenerativelanguage\.googleapis\.com\b|\baiplatform\.googleapis\.com\b/ },
  { id: "mistral", name: "Mistral API", re: /\bapi\.mistral\.ai\b/ },
  { id: "groq", name: "Groq API", re: /\bapi\.groq\.com\b/ },
  { id: "deepseek", name: "DeepSeek API", re: /\bapi\.deepseek\.com\b/ },
  { id: "xai", name: "xAI API", re: /\bapi\.x\.ai\b/ },
  { id: "openrouter", name: "OpenRouter API", re: /\bopenrouter\.ai\/api\b/ },
  { id: "perplexity", name: "Perplexity API", re: /\bapi\.perplexity\.ai\b/ },
  { id: "cohere", name: "Cohere API", re: /\bapi\.cohere\.(?:ai|com)\b/ },
  { id: "together", name: "Together AI API", re: /\bapi\.together\.(?:xyz|ai)\b/ }
];
var AI_WORD = String.raw`(?:\bAI\b|\bA\.I\.|OpenAI|ChatGPT|\bGPT\b|Anthropic|\bClaude\b|Gemini|artificial intelligence|language model|\bLLM\b|third[- ]party (?:AI|service|provider))`;
var CONSENT_WORD = String.raw`(?:consent|agree|opt[- ]?in|permission|allow|share[sd]?|sent to|send(?:s|ing)? (?:your|the|this)|processed by|shared with)`;
var AI_CONSENT = [
  { id: "ai-consent", name: "AI data-sharing consent text", re: new RegExp(`${CONSENT_WORD}[^\\n"]{0,120}${AI_WORD}|${AI_WORD}[^\\n"]{0,120}${CONSENT_WORD}`, "i") }
];
var AI_REPORTING = [
  { id: "report-content", name: "report / flag content UI", re: /\b(?:report|flag)(?:ing|ed)?\s+(?:this\s+|a\s+|an\s+)?(?:content|response|message|answer|output|image|reply|result|generation|chat|conversation|problem with (?:this|the) (?:response|answer|image))\b/i },
  { id: "report-offensive", name: "report offensive content UI", re: /\b(?:report|flag)\b[^\n"]{0,40}\b(?:inappropriate|offensive|harmful|abusive)\b|\b(?:inappropriate|offensive|harmful)\s+(?:content|response|output)\b/i },
  { id: "report-fn", name: "content reporting function", re: /\b(?:report|flag)(?:Content|Response|Message|Output|Generation|Image|Answer)\s*\(/ }
];
var SIGN_IN = [
  { id: "password-field", name: "password field", re: /\bSecureField\s*\(|\bisSecureTextEntry\s*=\s*(?:true|YES)\b|\.textContentType\s*\(\s*\.password\b|\bobscureText\s*:\s*true\b|\bsecureTextEntry(?:=\{true\}|\b(?!\s*=\s*\{?false))|android:inputType="textPassword"|\bPasswordVisualTransformation\s*\(/ },
  { id: "sign-in-call", name: "sign-in call", re: /\bsignIn(?:WithEmail)?(?:AndPassword)?\s*\(\s*(?:withEmail|email)|\bauth\s*\.\s*signInWithPassword\s*\(|\bsignInWithEmailAndPassword\s*\(|\bAuth\s*\.\s*signIn\s*\(/ }
];
var PURCHASES = [
  { id: "storekit2", name: "StoreKit purchase", re: /\bProduct\s*\.\s*products\s*\(\s*for:|\bproduct\s*\.\s*purchase\s*\(|\bSubscriptionStoreView\b|\bProductView\s*\(\s*id:/ },
  { id: "storekit1", name: "StoreKit 1 purchase", re: /\bSKPaymentQueue\b|\bSKProductsRequest\b/ },
  { id: "revenuecat", name: "RevenueCat purchase", re: /\bPurchases\s*\.\s*(?:shared|sharedInstance)\s*\.\s*purchase|\bPurchases\s*\.\s*purchase(?:Package|StoreProduct)?\s*\(/ },
  { id: "flutter-iap", name: "in_app_purchase plugin", re: /\bInAppPurchase\s*\.\s*instance\s*\.\s*buy(?:NonConsumable|Consumable)\b/ },
  { id: "rn-iap", name: "react-native-iap", re: /\brequest(?:Purchase|Subscription)\s*\(\s*\{/ }
];
var PURCHASE_DEPS = /^(RevenueCat|purchases-ios|purchases_flutter|react-native-purchases|react-native-iap|in_app_purchase|expo-in-app-purchases|flutter_inapp_purchase)$/i;
var SUBSCRIPTION = [
  { id: "subscription", name: "subscription", re: /\bSubscriptionStoreView\b|\.autoRenewable\b|\bsubscriptionGroupID\b|\brequestSubscription\s*\(|(?:^|["'>`])\s*(?:Subscribe(?: now)?|Start (?:your )?(?:free )?trial|Free trial|per (?:month|year)|\/ ?(?:month|year|mo|yr))\s*[.!]?\s*(?:$|["'<`])/im }
];
var RESTORE = [
  { id: "restore-call", name: "restore purchases call", re: /\brestoreCompletedTransactions\b|\bAppStore\s*\.\s*sync\s*\(|\brestorePurchases\s*\(|\brestorePurchases\b|\bgetAvailablePurchases\s*\(|\.storeButton\s*\(\s*\.visible\s*,\s*for:\s*[^)]*\.restorePurchases/ },
  { id: "restore-ui", name: '"Restore Purchases" UI', re: /\bRestore (?:Purchases?|Subscription|my purchases)\b/i }
];
var RESTORE_DEPS = /^(RevenueCatUI|purchases_ui_flutter|react-native-purchases-ui|superwall|SuperwallKit|superwallkit_flutter|@superwall\/react-native-superwall|adapty-ui|AdaptyUI)$/i;
var UGC = [
  { id: "ugc-ui", name: "posting / commenting UI", re: /(?:^|["'>`])\s*(?:Write|Add|Post|Leave) a (?:comment|reply|post|review)|(?:Create|New|Share) (?:a )?post|Post (?:a )?comment\b/im },
  { id: "ugc-call", name: "create post / comment call", re: /\b(?:create|add|submit|publish)(?:Post|Comment|Reply)\s*\(/ }
];
var UGC_DEPS = /^(StreamChat|StreamChatUI|StreamChatSwiftUI|stream_chat_flutter|stream_chat|stream-chat-react-native|stream-chat-expo|io\.getstream:stream-chat-android[\w-]*|SendbirdChatSDK|SendBirdSDK|sendbird_chat_sdk|@sendbird\/chat|com\.sendbird\.sdk:[\w-]+|CometChatSDK|cometchat_sdk|@cometchat\/chat-sdk-react-native|ExyteChat|MessageKit|flutter_chat_ui|react-native-gifted-chat)$/i;
var UGC_REPORT = [
  ...AI_REPORTING,
  { id: "report-ugc", name: "report post / user UI", re: /\bReport (?:post|comment|user|message|abuse|profile|this (?:post|comment|user|message|profile))\b/i },
  { id: "report-key", name: "report action (localization key)", re: /["'][\w-]*(?:\.[\w-]+)*\.(?:report|flag)(?:\.[\w-]+)*["']/ }
];
var UGC_BLOCK = [
  { id: "block-ui", name: "block user UI", re: /\bBlock (?:user|this user|account|this account|profile)\b|\bUnblock\b/i },
  { id: "block-call", name: "block user call", re: /\bblock(?:User|Member|Account)\s*\(|\bbanUser\s*\(/ },
  { id: "block-key", name: "block action (localization key)", re: /["'][\w-]*(?:\.[\w-]+)*\.(?:block|unblock)(?:\.[\w-]+)*["']/ }
];
var PRIVACY_LINK = [
  { id: "privacy-link", name: "privacy policy link", re: /\bPrivacy Policy\b|https?:\/\/[^\s"'<>]*privacy[^\s"'<>]*/i }
];
var BACKGROUND_MODES = {
  audio: { label: "play audio in the background", code: /\.playback\b|AVAudioSessionCategoryPlayback|\bAVPlayer\b|\bAVQueuePlayer\b|\bAVAudioPlayer\b|\bAVAudioEngine\b|\.playAndRecord\b|\bAudioPlayer\s*\(|\bTrackPlayer\b|\bjust_audio\b|\baudio_service\b/, deps: /audio|player|music|sound|podcast|radio|tts|voice|webrtc|agora|twilio|livekit|zoom|video|call/i },
  location: { label: "track location in the background", code: /\ballowsBackgroundLocationUpdates\b|\bstartMonitoringSignificantLocationChanges\b|\bstartUpdatingLocation\b|\bCLBackgroundActivitySession\b|\bCLMonitor\b|\bstartMonitoring\s*\(\s*for:|\bstartLocationUpdatesAsync\b|\bBackgroundGeolocation\b|\bGeolocator\b/, deps: /locat|geo|gps|tracking|fence/i },
  voip: { label: "receive VoIP calls", code: /\bPKPushRegistry\b|\bCXProvider\b|\bpushRegistry\s*\(/, deps: /voip|callkit|call|twilio|agora|vonage|sinch|webrtc|livekit|stream-?video|zego/i },
  "bluetooth-central": { label: "talk to Bluetooth accessories in the background", code: /\bCBCentralManager\b|\bFlutterBluePlus\b|\bBleManager\b/, deps: /bluetooth|\bble\b|ble[-_]|beacon/i },
  "bluetooth-peripheral": { label: "act as a Bluetooth accessory in the background", code: /\bCBPeripheralManager\b/, deps: /bluetooth|peripheral|ble/i },
  fetch: { label: "refresh content in the background", code: /\bsetMinimumBackgroundFetchInterval\b|\bBGAppRefreshTask\b|\bperformFetchWithCompletionHandler\b|\.appRefresh\b|\bBackgroundFetch\b|\bregisterTaskAsync\b/, deps: /background[-_]?fetch|workmanager|background[-_]?task/i },
  processing: { label: "run long background tasks", code: /\bBGProcessingTask(?:Request)?\b|\bBGTaskScheduler\b|\bregisterTaskAsync\b/, deps: /background|workmanager/i }
};
var SECRET_FORMATS = [
  { id: "stripe", name: "Stripe secret key", re: /\b[sr]k_live_[0-9A-Za-z]{20,}/ },
  { id: "openai", name: "OpenAI API key", re: /\bsk-(?:proj|svcacct|admin)-[A-Za-z0-9_-]{40,}|\bsk-[A-Za-z0-9]{20}T3BlbkFJ[A-Za-z0-9]{20}/ },
  { id: "anthropic", name: "Anthropic API key", re: /\bsk-ant-(?:api|admin)\d\d-[A-Za-z0-9_-]{60,}/ },
  { id: "aws", name: "AWS access key", re: /\bAKIA[0-9A-Z]{16}\b/, check: (m) => !/EXAMPLE$/.test(m) },
  { id: "github", name: "GitHub token", re: /\bgh[pousr]_[A-Za-z0-9]{36}\b|\bgithub_pat_[A-Za-z0-9_]{60,}/ },
  { id: "slack", name: "Slack token", re: /\bxox[abp]-\d{8,}-[A-Za-z0-9-]{20,}/ },
  { id: "sendgrid", name: "SendGrid API key", re: /\bSG\.[A-Za-z0-9_-]{22}\.[A-Za-z0-9_-]{43}\b/ },
  { id: "private-key", name: "private key", re: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----(?:\\n|\s)+[A-Za-z0-9+/=]{48,}/ },
  { id: "supabase", name: "Supabase service_role key", re: /\beyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}/, check: isServiceRole }
];
function isServiceRole(jwt) {
  try {
    const p = JSON.parse(Buffer.from(jwt.split(".")[1], "base64url").toString("utf8"));
    return p.role === "service_role";
  } catch {
    return false;
  }
}
var NOT_APP = /(?:^|\/)(?:[^/]*tests?|__mocks__|mocks?|fixtures?|examples?|samples?|docs?)\//i;
function findSecrets(sources, binary) {
  const out = [];
  for (const f of SECRET_FORMATS) {
    let n = 0;
    for (const src of sources) {
      if (n >= 3) break;
      if (!binary && NOT_APP.test(src.file)) continue;
      const g = new RegExp(f.re.source, "g");
      let m;
      let guard = 0;
      while ((m = g.exec(src.text)) && guard++ < 200) {
        if (f.check && !f.check(m[0])) continue;
        if (src.code && src.lines && isCommentLine(src.text, m.index)) continue;
        const shown = f.id === "private-key" ? "-----BEGIN \u2026 PRIVATE KEY-----" : `${m[0].slice(0, f.id === "supabase" ? 4 : 8)}\u2026 (hidden)`;
        const evidence = src.lines ? { file: src.file, line: lineOf(src.text, m.index), detail: shown } : { file: src.file, detail: shown };
        out.push({ id: f.id, name: f.name, evidence, via: binary ? "binary" : "code" });
        n++;
        break;
      }
    }
  }
  return out;
}
var LANG_BY_EXT = [
  [".swift", "Swift"],
  [".m", "Objective-C"],
  [".mm", "Objective-C"],
  [".kt", "Kotlin"],
  [".java", "Java"],
  [".dart", "Dart"],
  [".tsx", "TypeScript"],
  [".ts", "TypeScript"],
  [".jsx", "JavaScript"],
  [".js", "JavaScript"],
  [".mjs", "JavaScript"]
];
var STRING_EXTS = [".strings", ".xcstrings", ".storyboard", ".xib", ".arb"];
var JS_EXTS = [".js", ".jsx", ".ts", ".tsx", ".mjs"];
var JS_SKIP = /* @__PURE__ */ new Set([...VENDOR_DIRS, "ios", "android", "web-build", "coverage", "__tests__", "__mocks__", "e2e", "scripts", "server", "backend", "functions", "supabase", "docs", ".storybook", "storybook"]);
var TEST_SRC = /\/src\/(?:test|androidTest|testFixtures|sharedTest)\w*\//;
function collectAppCode(root, framework, native) {
  const files = /* @__PURE__ */ new Set();
  if (native.iosDir) {
    for (const f of walk(native.iosDir, { exts: [".swift", ".m", ".mm"] })) files.add(f);
    for (const f of walk(native.iosDir, { exts: STRING_EXTS, maxSize: 16 * 1024 * 1024 })) files.add(f);
  }
  for (const d of native.androidSrcDirs ?? []) {
    for (const f of walk(d, { exts: [".kt", ".java"] })) if (!TEST_SRC.test(f)) files.add(f);
    for (const f of walk(d, { exts: [".xml"] })) if (/\/res\/values[^/]*\/strings\.xml$/.test(f)) files.add(f);
  }
  if (framework === "flutter") {
    const lib = join4(root, "lib");
    if (exists(lib)) for (const f of walk(lib, { exts: [".dart", ".arb"] })) files.add(f);
    for (const f of walk(root, { exts: [".arb"], maxFiles: 500 })) if (!f.includes("/ios/") && !f.includes("/android/")) files.add(f);
  }
  if (framework === "react-native" || framework === "expo") {
    for (const f of walk(root, { exts: [...JS_EXTS, ".json"], skipDirs: JS_SKIP, maxFiles: 2e4 })) {
      if (f.endsWith(".json")) {
        if (/\/(locales?|i18n|translations|lang)\//.test(f)) files.add(f);
      } else if (!/\.(test|spec|stories|d)\.[jt]sx?$/.test(f) && !/(babel|metro|jest|eslint|prettier|tailwind|webpack|app)\.config\.[jt]s$/.test(f)) {
        files.add(f);
      }
    }
  }
  const list2 = [...files].sort();
  const searched = /* @__PURE__ */ new Set();
  for (const f of list2) {
    const lang = LANG_BY_EXT.find(([e]) => f.endsWith(e))?.[1];
    if (lang) searched.add(lang);
    else searched.add("UI strings");
  }
  return { files: list2, searched: [...searched] };
}
function readSources(root, files) {
  const out = [];
  for (const f of files) {
    const text = readText(f);
    const shown = text && /\.(?:swift|mm?)$/.test(f) ? text.replace(/\bcomment:\s*"(?:[^"\\\n]|\\.)*"/g, (c2) => " ".repeat(c2.length)) : text;
    if (shown) out.push({ file: rel(root, f), text: shown, lines: true, code: LANG_BY_EXT.some(([e]) => f.endsWith(e)) });
  }
  return out;
}
function crossPlatformDeps(root, projectDir) {
  const out = [];
  const pkgPath = join4(projectDir, "package.json");
  const pkgText = readText(pkgPath);
  if (pkgText) {
    try {
      const pkg = JSON.parse(pkgText);
      for (const [name, version2] of Object.entries(pkg.dependencies ?? {})) {
        out.push({ id: name, name, via: "npm", version: version2, evidence: { file: rel(root, pkgPath), line: lineOf(pkgText, pkgText.indexOf(`"${name}"`)), detail: `${name}@${version2}` }, filesAvailable: false });
      }
    } catch {
    }
  }
  const lockPath = join4(projectDir, "pubspec.lock");
  const lock = readText(lockPath);
  if (lock) {
    for (const m of lock.matchAll(/^ {2}([a-z0-9_]+):\n((?: {4}.*\n)+)/gm)) {
      if (/dependency: "?transitive"?/.test(m[2])) continue;
      const version2 = m[2].match(/version: "([^"]+)"/)?.[1];
      out.push({ id: m[1], name: m[1], via: "pub", version: version2, evidence: { file: rel(root, lockPath), line: lineOf(lock, m.index), detail: `${m[1]}${version2 ? ` (${version2})` : ""}` }, filesAvailable: false });
    }
  } else {
    const specPath = join4(projectDir, "pubspec.yaml");
    const spec = readText(specPath);
    const deps = spec?.match(/^dependencies:\n((?:[ \t]+.*\n?|\n)+)/m)?.[1] ?? "";
    for (const m of deps.matchAll(/^ {2}([a-z0-9_]+):/gm)) {
      if (m[1] === "flutter") continue;
      out.push({ id: m[1], name: m[1], via: "pub", evidence: { file: rel(root, specPath), detail: m[1] }, filesAvailable: false });
    }
  }
  return out;
}
function scanPatterns(sources, groups, origin, maxPerKey = 3) {
  const out = [];
  const counts = /* @__PURE__ */ new Map();
  for (const src of sources) {
    for (const g of groups) {
      if ((counts.get(g.key) ?? 0) >= maxPerKey) continue;
      const hit = firstMatch(src, g.patterns);
      if (!hit) continue;
      out.push({ key: g.key, symbol: hit.detail ?? "", origin, evidence: hit });
      counts.set(g.key, (counts.get(g.key) ?? 0) + 1);
    }
  }
  return out;
}
function firstMatch(src, patterns) {
  for (const re of patterns) {
    const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    let m;
    let guard = 0;
    while ((m = g.exec(src.text)) && guard++ < 50) {
      if (src.code && src.lines && isCommentLine(src.text, m.index)) continue;
      const detail = m[0].replace(/\s+/g, " ").trim().slice(0, 80);
      return src.lines ? { file: src.file, line: lineOf(src.text, m.index), detail } : { file: src.file, detail };
    }
  }
  return void 0;
}
var sigById = new Map(SDK_SIGNATURES.map((s) => [s.id, s]));
function scanSignals(sources, deps, opts) {
  const via = opts.binary ? "binary" : "code";
  const find = (patterns, max = 3) => {
    const out = [];
    for (const p of patterns) {
      let n = 0;
      for (const src of sources) {
        if (n >= max) break;
        const e = firstMatch(src, [p.re]);
        if (e) {
          out.push({ id: p.id, name: p.name, evidence: e, via });
          n++;
        }
      }
    }
    return out;
  };
  const thirdPartyLogin = find(THIRD_PARTY_LOGIN, 2);
  const privacyLogin = find(PRIVACY_LOGIN, 2);
  const aiProviders = find(AI_ENDPOINTS, 2);
  for (const d of deps) {
    const login = THIRD_PARTY_LOGIN_DEPS.find((l) => l.deps.test(d.name));
    if (login) thirdPartyLogin.push({ id: login.id, name: login.name, evidence: d.evidence, via: "dependency" });
    if (PRIVACY_LOGIN_DEPS.test(d.name)) privacyLogin.push({ id: "siwa", name: "Sign in with Apple", evidence: d.evidence, via: "dependency" });
    const sig = sigById.get(d.id);
    if (sig?.category === "ai") aiProviders.push({ id: sig.id, name: sig.name, evidence: d.evidence, via: "dependency" });
  }
  if (opts.entitlements?.["com.apple.developer.applesignin"]) {
    privacyLogin.push({ id: "siwa", name: "Sign in with Apple", evidence: { detail: "com.apple.developer.applesignin entitlement" }, via: "config" });
  }
  const purchases = find(PURCHASES, 2);
  const restorePurchases = find(RESTORE, 2);
  const ugc = find(UGC, 2);
  for (const d of deps) {
    if (PURCHASE_DEPS.test(d.name)) purchases.push({ id: "iap-dep", name: d.name, evidence: d.evidence, via: "dependency" });
    if (RESTORE_DEPS.test(d.name)) restorePurchases.push({ id: "paywall-dep", name: `${d.name} (paywall with a restore button)`, evidence: d.evidence, via: "dependency" });
    if (UGC_DEPS.test(d.name)) ugc.push({ id: "chat-dep", name: `${d.name} (chat between users)`, evidence: d.evidence, via: "dependency" });
  }
  return {
    secrets: findSecrets(sources, !!opts.binary),
    signIn: find(SIGN_IN, 2),
    purchases,
    subscriptions: find(SUBSCRIPTION, 2),
    restorePurchases,
    ugc,
    ugcReport: find(UGC_REPORT, 2),
    ugcBlock: find(UGC_BLOCK, 2),
    privacyLink: find(PRIVACY_LINK, 1),
    backgroundUses: find(Object.entries(BACKGROUND_MODES).map(([id, m]) => ({ id, name: m.label, re: m.code })), 1),
    codeScanned: sources.length > 0,
    searched: opts.searched,
    accountCreation: find(ACCOUNT_CREATION, 2),
    accountDeletion: find(ACCOUNT_DELETION, 2),
    thirdPartyLogin,
    privacyLogin,
    aiProviders,
    aiConsent: find(AI_CONSENT, 2),
    aiReporting: find(AI_REPORTING, 2)
  };
}
function printableStrings(buf, minLen = 6, maxOut = 24 * 1024 * 1024) {
  const parts = [];
  let start = -1;
  let total = 0;
  for (let i = 0; i <= buf.length; i++) {
    const c2 = i < buf.length ? buf[i] : 0;
    const printable = c2 >= 32 && c2 < 127;
    if (printable) {
      if (start < 0) start = i;
    } else if (start >= 0) {
      if (i - start >= minLen) {
        parts.push(buf.toString("latin1", start, i));
        total += i - start + 1;
        if (total > maxOut) break;
      }
      start = -1;
    }
  }
  return parts.join("\n");
}
function scanSources(root, files, groups, maxPerKey = 3) {
  const out = [];
  const counts = /* @__PURE__ */ new Map();
  for (const file of files) {
    const text = readText(file);
    if (!text) continue;
    for (const g of groups) {
      if ((counts.get(g.key) ?? 0) >= maxPerKey) continue;
      for (const re of g.patterns) {
        const global = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
        let m;
        let found = false;
        while (m = global.exec(text)) {
          if (isCommentLine(text, m.index)) continue;
          out.push({
            key: g.key,
            symbol: m[0].trim().slice(0, 80),
            origin: "code",
            evidence: { file: rel(root, file), line: lineOf(text, m.index), detail: m[0].trim().slice(0, 80) }
          });
          counts.set(g.key, (counts.get(g.key) ?? 0) + 1);
          found = true;
          break;
        }
        if (found) break;
      }
    }
  }
  return out;
}
function scanBinary(binary, file, groups) {
  const out = [];
  for (const g of groups) {
    for (const sym of g.symbols) {
      const needle = sym.endsWith("\0") ? "\0" + sym : sym;
      if (binary.indexOf(needle, 0, "latin1") >= 0) {
        const clean = sym.replace(/\0/g, "");
        out.push({ key: g.key, symbol: clean, origin: "binary", evidence: { file, detail: `binary references ${clean}` } });
        break;
      }
    }
  }
  return out;
}
function entitlementsFromBuildSettings(settings, resolve22 = (v) => v) {
  const out = {};
  const val = (k) => (resolve22(settings[k]) ?? "").trim();
  const yes = (k) => /^(YES|true)$/i.test(val(k));
  if (yes("ENABLE_APP_SANDBOX")) out[SANDBOX] = true;
  for (const [setting, ents] of Object.entries(BUILD_SETTING_ENTITLEMENTS)) if (yes(setting)) for (const e of ents) out[e] = true;
  const files = {
    ENABLE_USER_SELECTED_FILES: "com.apple.security.files.user-selected",
    ENABLE_FILE_ACCESS_DOWNLOADS_FOLDER: "com.apple.security.files.downloads",
    ENABLE_FILE_ACCESS_PICTURE_FOLDER: "com.apple.security.assets.pictures",
    ENABLE_FILE_ACCESS_MUSIC_FOLDER: "com.apple.security.assets.music",
    ENABLE_FILE_ACCESS_MOVIES_FOLDER: "com.apple.security.assets.movies"
  };
  for (const [setting, prefix] of Object.entries(files)) {
    const v = val(setting).toLowerCase().replace(/[^a-z]/g, "");
    if (v === "readonly") out[`${prefix}.read-only`] = true;
    else if (v === "readwrite") out[`${prefix}.read-write`] = true;
  }
  return out;
}
function temporaryExceptions(ents) {
  return Object.keys(ents ?? {}).filter((k) => k.startsWith(TEMP_EXCEPTION_PREFIX) && ents[k] !== false);
}
function chooseDistribution(option, certKind) {
  if (option) return { distribution: option, distributionSource: "option" };
  if (certKind === "developer-id") return { distribution: "direct", distributionSource: "signature" };
  if (certKind === "app-store-resigned" || certKind === "apple-distribution" || certKind === "mac-app-distribution") return { distribution: "app-store", distributionSource: "signature" };
  return { distribution: "app-store", distributionSource: "default" };
}
function readDistributionConfig(dir) {
  const text = readText(join5(dir, ".okayed", "config.json"));
  if (!text) return void 0;
  try {
    const d = JSON.parse(text);
    const v = d.macos?.distribution ?? d.distribution;
    return v === "direct" || v === "app-store" ? v : void 0;
  } catch {
    return void 0;
  }
}
function imageSize(b) {
  if (b.length > 24 && b.readUInt32BE(0) === 2303741511) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  if (b.length > 4 && b[0] === 255 && b[1] === 216) {
    let p = 2;
    while (p + 9 < b.length) {
      if (b[p] !== 255) return void 0;
      const marker = b[p + 1];
      const len = b.readUInt16BE(p + 2);
      if (marker >= 192 && marker <= 207 && ![196, 200, 204].includes(marker)) return { height: b.readUInt16BE(p + 5), width: b.readUInt16BE(p + 7) };
      p += 2 + len;
    }
  }
  return void 0;
}
function readScreenshots(root, dirs) {
  for (const d of dirs) {
    const shots = join5(d, "fastlane", "screenshots");
    if (!exists(shots)) continue;
    const out = [];
    for (const f of walk(shots, { exts: [".png", ".jpg", ".jpeg"], skipDirs: /* @__PURE__ */ new Set(), maxSize: 64 * 1024 * 1024 })) {
      let head;
      try {
        head = readFileSync4(f).subarray(0, 256 * 1024);
      } catch {
        continue;
      }
      out.push({ file: rel(root, f), ...imageSize(head) });
    }
    return out;
  }
  return [];
}
function emptyMacSignals() {
  return { installOutsideContainer: [], codeExecution: [], autoUpdaters: [], loginItems: [], loginConsent: [], resourceUse: [] };
}
function firstHit(src, res) {
  for (const re of res) {
    const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    let m;
    let guard = 0;
    while ((m = g.exec(src.text)) && guard++ < 50) {
      if (src.code && src.lines && isCommentLine(src.text, m.index)) continue;
      const detail = m[0].replace(/\s+/g, " ").trim().slice(0, 80);
      return src.lines ? { file: src.file, line: lineOf(src.text, m.index), detail } : { file: src.file, detail };
    }
  }
  return void 0;
}
var push = (list2, item, key, max = 3) => {
  if (list2.filter((x) => key(x) === key(item)).length < max) list2.push(item);
};
function scanMacText(sources, into = emptyMacSignals(), opts = {}) {
  const origin = opts.binary ? "binary" : "code";
  const via = opts.binary ? "binary" : "code";
  const strHit = (src, needles) => {
    for (const n of needles) if (src.text.includes(n)) return { file: src.file, detail: `binary references ${n.replace(/^_/, "")}` };
    return void 0;
  };
  const hit = (src, code, binary) => opts.binary ? strHit(src, binary) : src.code ? firstHit(src, code) : void 0;
  for (const src of sources) {
    for (const p of INSTALL_OUTSIDE) {
      const e = hit(src, p.code, p.binary);
      if (e) push(into.installOutsideContainer, { key: p.id, symbol: p.name, origin, evidence: e }, (x) => x.key, 2);
    }
    for (const p of CODE_EXECUTION) {
      const e = hit(src, p.code, p.binary);
      if (e) push(into.codeExecution, { key: p.id, symbol: p.name, origin, evidence: e }, (x) => x.key, 2);
    }
    if (opts.binary ? strHit(src, PROCESS_BINARY) : src.code && PROCESS_API.test(src.text)) {
      const e = opts.binary ? strHit(src, SHELL_BINARY) : firstHit(src, [SHELL_PATHS]);
      if (e) push(into.codeExecution, { key: "shell", symbol: "runs a shell or script interpreter", origin, evidence: e }, (x) => x.key, 2);
    }
    for (const u of AUTO_UPDATERS) {
      const e = hit(src, u.code, u.binary);
      if (e) push(into.autoUpdaters, { id: u.id, name: u.name, evidence: e, via }, (x) => x.id, 2);
    }
    for (const l of LOGIN_APIS) {
      const e = hit(src, l.code, l.binary);
      if (e) push(into.loginItems, { id: l.id, name: l.name, evidence: e, via }, (x) => x.id, 2);
    }
    const consent = firstHit({ ...src, code: false }, [LOGIN_CONSENT]);
    if (consent) push(into.loginConsent, { id: "toggle", name: "launch-at-login setting", evidence: consent, via }, (x) => x.id, 3);
    for (const r of MAC_RESOURCES) {
      if (!r.code && !r.binary) continue;
      const e = hit(src, r.code ?? [], r.binary ?? []);
      if (e) push(into.resourceUse, { key: r.id, symbol: e.detail ?? r.label, origin, evidence: e }, (x) => x.key, 3);
    }
  }
  return into;
}
function findAppBundles(fs) {
  const roots = /* @__PURE__ */ new Set();
  for (const f of fs.files) {
    const m = f.match(/^(.*?[^/]+\.app)\/Contents\/Info\.plist$/);
    if (m && !/\.app\//.test(m[1])) roots.add(m[1]);
  }
  return [...roots].sort((a, b) => a.length - b.length);
}
var RESOURCE_EXT = /\.(png|jpe?g|gif|icns|ico|tiff?|heic|car|nib|storyboardc|strings|stringsdict|plist|json|txt|md|html?|css|js|mjs|map|svg|pdf|mp3|mp4|mov|wav|m4a|aiff?|caf|ttf|otf|woff2?|xcprivacy|sig|asar|pak|dat|bin|db|sqlite|xml|yml|yaml|lproj|mom|omo|momd|cer|der|pem|metallib|lua|py|rb|sh|h|swiftmodule|swiftdoc|modulemap|tbd|a|o|zip|gz|tar)$/i;
function parseMacApp(fs, app, opts) {
  const C = `${app}/Contents/`;
  const notAudited = [...opts.notAudited ?? [], "Binary symbol matches show an API is referenced, not that the code path runs, so they are reported as 'likely'."];
  const files = fs.files.filter((f) => f.startsWith(C) && !/\.framework\/Versions\/Current\//.test(f));
  const has = new Set(files);
  const infoPath = `${C}Info.plist`;
  const infoPlist = parsePlist(fs.read(infoPath) ?? Buffer.alloc(0)) ?? {};
  if (!Object.keys(infoPlist).length) throw new Error(`Not a macOS app bundle: ${infoPath} is missing or unreadable`);
  const exe = typeof infoPlist.CFBundleExecutable === "string" ? infoPlist.CFBundleExecutable : void 0;
  const exePath = exe ? `${C}MacOS/${exe}` : void 0;
  const mainBin = exePath && has.has(exePath) ? fs.read(exePath) : void 0;
  if (!exePath || !mainBin) throw new Error("The app's main executable (Contents/MacOS/<CFBundleExecutable>) is missing");
  const code = [];
  const binaries = /* @__PURE__ */ new Map([[exePath, mainBin]]);
  const addCode = (path, role, bin, bundleId) => {
    const m = parseMachO(bin);
    const s = m ? primarySlice(m) : void 0;
    const sig = s?.signature;
    const signed = !!sig && !sig.linkerSigned;
    const executable = role !== "framework" && (s?.fileType ?? "execute") === "execute";
    code.push({
      path,
      role: executable || role === "main" ? role : "framework",
      bundleId,
      executable: role === "main" || executable,
      evidence: { file: path, detail: "embedded code signature" },
      signed,
      adhoc: sig ? sig.adhoc || sig.linkerSigned : void 0,
      teamId: sig?.teamId,
      authority: sig?.authority,
      certKind: sig?.certKind,
      secureTimestamp: sig?.secureTimestamp,
      hardenedRuntime: sig?.hardenedRuntime,
      entitlements: sig ? sig.entitlements : void 0,
      entitlementsBinaryPlist: sig?.entitlementsBinaryPlist,
      sdk: s?.sdk,
      minOS: s?.minOS,
      platform: s?.platform
    });
  };
  addCode(exePath, "main", mainBin, str(infoPlist.CFBundleIdentifier));
  const nestedExes = /* @__PURE__ */ new Set();
  for (const f of files) {
    const m = f.match(/^(.+\.(app|xpc|appex|systemextension))\/Contents\/Info\.plist$/);
    if (!m || m[1] === app) continue;
    const b = m[1];
    const plist3 = parsePlist(fs.read(f) ?? Buffer.alloc(0)) ?? {};
    const e = str(plist3.CFBundleExecutable);
    const p = e ? `${b}/Contents/MacOS/${e}` : void 0;
    if (!p || !has.has(p)) continue;
    const inner = b.slice(C.length);
    const role = m[2] === "xpc" ? "xpc-service" : m[2] === "appex" ? "app-extension" : m[2] === "systemextension" ? "system-extension" : /^Library\/LoginItems\//.test(inner) ? "login-item" : "helper-app";
    const bin = fs.read(p);
    if (!bin) continue;
    nestedExes.add(p);
    binaries.set(p, bin);
    addCode(p, role, bin, str(plist3.CFBundleIdentifier));
  }
  let machoCount = 0;
  for (const f of files) {
    if (f === exePath || nestedExes.has(f) || machoCount > 600) continue;
    const base = posix2.basename(f);
    if (RESOURCE_EXT.test(base) || /\.lproj\//.test(f) || /\/_CodeSignature\//.test(f)) continue;
    if (base.includes(".") && !/\.(dylib|so|node|bundle|plugin)$/.test(base)) continue;
    if ((fs.size(f) ?? 0) < 4096) continue;
    const head = fs.head(f, 8);
    if (!head || !isMachO(head)) continue;
    machoCount++;
    const bin = fs.read(f);
    if (!bin) continue;
    const inner = f.slice(C.length);
    const inFramework = /\.framework\//.test(inner);
    const role = /^Library\/LaunchServices\//.test(inner) ? "privileged-helper" : "helper-tool";
    addCode(f, role, bin);
    if (code[code.length - 1].executable && !inFramework) binaries.set(f, bin);
  }
  const main2 = code[0];
  const entitlements = main2.entitlements ?? {};
  if (!main2.signed) notAudited.push("The main executable isn't signed (or only linker-signed), so its entitlements are unknown. Scan the build you export for upload or notarization.");
  if (main2.certKind === "development" || main2.adhoc) notAudited.push("This build is signed for development, not distribution. Scan the copy you export from Xcode (Organizer > Distribute App).");
  const privacyManifests = files.filter((f) => f.endsWith(".xcprivacy")).map((f) => {
    const inner = f.slice(C.length);
    const fw = inner.match(/Frameworks\/([^/]+)\.framework\//);
    const bundle = inner.match(/^Resources\/([^/]+)\.bundle\//);
    const nested = inner.match(/([^/]+)\.(?:app|xpc|appex)\//);
    const owner = fw ? fw[1] : bundle ? bundle[1].replace(/_Privacy$|Privacy$/, "") : nested ? nested[1] : inner === "Resources/PrivacyInfo.xcprivacy" ? "app" : inner.split("/")[0];
    return { path: f, owner, data: parsePlist(fs.read(f) ?? Buffer.alloc(0)) ?? {}, inBuild: true };
  });
  const withManifest = new Set(privacyManifests.map((m) => m.owner.toLowerCase()));
  const frameworkNames = /* @__PURE__ */ new Set();
  const bundleNames = /* @__PURE__ */ new Set();
  for (const f of files) {
    const fw = f.slice(C.length).match(/^Frameworks\/([^/]+)\.framework\//);
    if (fw) frameworkNames.add(fw[1]);
    const b = f.slice(C.length).match(/^Resources\/([^/]+)\.bundle\//);
    if (b) bundleNames.add(b[1]);
  }
  const linkedSdks = [];
  for (const name of frameworkNames) {
    linkedSdks.push({ id: findSignatureByFramework(name)?.id ?? name, name, via: "framework", evidence: { file: `${C}Frameworks/${name}.framework`, detail: `${name}.framework` }, filesAvailable: true, hasPrivacyManifest: withManifest.has(name.toLowerCase()) });
  }
  for (const b of bundleNames) {
    const name = b.replace(/_Privacy$|Privacy$/, "");
    if (frameworkNames.has(name)) continue;
    linkedSdks.push({ id: findSignatureByFramework(name)?.id ?? name, name, via: "bundle", evidence: { file: `${C}Resources/${b}.bundle`, detail: `${b}.bundle` }, filesAvailable: true, hasPrivacyManifest: withManifest.has(name.toLowerCase()) || withManifest.has(b.toLowerCase()) });
  }
  let framework = "native";
  let frameworkEvidence;
  if (frameworkNames.has("FlutterMacOS")) {
    framework = "flutter";
    frameworkEvidence = { file: `${C}Frameworks/FlutterMacOS.framework`, detail: "Flutter engine" };
  } else if (has.has(`${C}Resources/main.jsbundle`) || frameworkNames.has("React") || frameworkNames.has("hermes")) {
    framework = "react-native";
    frameworkEvidence = { file: `${C}Resources/main.jsbundle`, detail: "React Native macOS" };
  } else if (frameworkNames.has("Electron Framework")) {
    framework = "unknown";
    frameworkEvidence = { file: `${C}Frameworks/Electron Framework.framework`, detail: "Electron" };
  }
  const electron = framework === "unknown" && frameworkEvidence?.detail === "Electron" ? readElectron(fs, `${C}Resources/app.asar`) : void 0;
  if (frameworkEvidence?.detail === "Electron") {
    if (!electron) notAudited.push("Electron app: no readable Contents/Resources/app.asar, so its JavaScript wasn't searched.");
    else {
      for (const d of electron.deps) if (!linkedSdks.some((s) => s.name === d.name)) linkedSdks.push(d);
      if (electron.truncated) notAudited.push("Electron app: only the first 32 MB of its own JavaScript were searched.");
    }
  }
  const texts = [];
  const searched = [];
  let budget = 96 * 1024 * 1024;
  const addText = (file, label, text) => {
    if (budget <= 0) return;
    budget -= text.length;
    texts.push({ file, text, lines: false, code: false });
    if (!searched.includes(label)) searched.push(label);
  };
  for (const [p, bin] of binaries) addText(p, "app binary strings", printableStrings(bin, 6, budget));
  const dartApp = `${C}Frameworks/App.framework/Versions/A/App`;
  if (has.has(dartApp)) addText(dartApp, "Dart AOT strings", printableStrings(fs.read(dartApp), 6, budget));
  if (has.has(`${C}Resources/main.jsbundle`)) addText(`${C}Resources/main.jsbundle`, "JS bundle", printableStrings(fs.read(`${C}Resources/main.jsbundle`), 6, budget));
  for (const f of files) {
    if (texts.length > 80) break;
    if (/^Resources\/[^/]+\.lproj\/[^/]+\.strings$/.test(f.slice(C.length))) addText(f, "UI strings", decodeStrings(fs.read(f)));
  }
  const jsTexts = electron?.texts ?? [];
  if (jsTexts.length) searched.push("Electron JavaScript (app.asar)");
  const signals = scanSignals([...texts, ...jsTexts], linkedSdks, { searched, entitlements, binary: true });
  const mac = scanMacText(texts.filter((t) => t.file !== dartApp && !t.file.endsWith("main.jsbundle")), emptyMacSignals(), { binary: true });
  if (jsTexts.length) scanMacText(jsTexts, mac);
  for (const d of electron?.deps ?? []) {
    const u = AUTO_UPDATERS.find((x) => x.deps.test(d.name));
    if (u) mac.autoUpdaters.push({ id: u.id, name: u.name, via: "dependency", evidence: d.evidence });
  }
  const usesProtectedResources = scanBinary(mainBin, exePath, protectedResourcesFor(main2.platform === "maccatalyst" ? "ios" : "macos").map((r) => ({ key: r.id, symbols: r.binarySymbols })));
  for (const u of AUTO_UPDATERS) {
    const fw = [...frameworkNames].find((n) => u.frameworks.test(n));
    if (fw) mac.autoUpdaters.unshift({ id: u.id, name: u.name, via: "binary", evidence: { file: `${C}Frameworks/${fw}.framework`, detail: `${fw}.framework is bundled` } });
    const key = u.plistKeys.find((k) => k in infoPlist);
    if (key) mac.autoUpdaters.push({ id: u.id, name: u.name, via: "config", evidence: { file: infoPath, detail: `Info.plist ${key}` } });
  }
  for (const c2 of code) if (c2.role === "login-item") mac.loginItems.push({ id: "login-item-bundle", name: "login item helper app", via: "binary", evidence: { file: c2.path.replace(/\/Contents\/MacOS\/.*$/, ""), detail: "Contents/Library/LoginItems" } });
  const bundledInstallers = [];
  const seen = /* @__PURE__ */ new Set();
  for (const f of files) {
    const inner = f.slice(C.length);
    const kext = f.match(/^(.*?[^/]+\.kext)\//)?.[1];
    const pkg = /\.m?pkg$/i.test(f) ? f : f.match(/^(.*?[^/]+\.m?pkg)\//i)?.[1];
    const item = kext ? { kind: "kext", file: kext } : pkg ? { kind: "installer", file: pkg } : /^Library\/LaunchServices\/[^/]+$/.test(inner) ? { kind: "privileged-helper", file: f } : /^Library\/LaunchDaemons\/[^/]+\.plist$/.test(inner) ? { kind: "launch-daemon", file: f } : void 0;
    if (item && !seen.has(item.file)) {
      seen.add(item.file);
      bundledInstallers.push({ kind: item.kind, evidence: { file: item.file, detail: "inside the app bundle" } });
    }
  }
  if (infoPlist.SMPrivilegedExecutables) bundledInstallers.push({ kind: "privileged-helper", evidence: { file: infoPath, detail: "Info.plist SMPrivilegedExecutables (SMJobBless)" } });
  const tempExceptions = code.flatMap((c2) => temporaryExceptions(c2.entitlements).map((key) => ({ key, path: c2.path, evidence: { file: c2.path, detail: key } })));
  const macos = {
    ...chooseDistribution(opts.distribution, main2.certKind),
    builtBinary: true,
    catalyst: main2.platform === "maccatalyst" || void 0,
    sandboxEnabled: main2.signed ? entitlements[SANDBOX] === true : void 0,
    entitlementsEvidence: { file: exePath, detail: "embedded code signature" },
    temporaryExceptionEntitlements: tempExceptions,
    hardenedRuntime: main2.signed ? main2.hardenedRuntime : void 0,
    code,
    embeddedHelpers: code.filter((c2) => c2.role !== "main" && c2.executable).map((c2) => c2.path),
    bundledInstallers,
    bundlesInstallersOrKexts: bundledInstallers.length > 0,
    ...mac,
    downloadsExecutableCode: mac.codeExecution.length > 0,
    screenshots: [],
    stapled: has.has(`${C}CodeResources`),
    installer: opts.installer
  };
  return {
    platform: "macos",
    inputKind: opts.inputKind,
    framework,
    frameworkEvidence,
    signals,
    root: opts.root,
    bundleId: str(infoPlist.CFBundleIdentifier),
    version: str(infoPlist.CFBundleShortVersionString),
    notAudited,
    listing: [],
    ios: { infoPlist, infoPlistPath: infoPath, privacyManifests, linkedSdks, entitlements, usesRequiredReasonApis: [], usesProtectedResources },
    macos
  };
}
function str(v) {
  return typeof v === "string" ? v : void 0;
}
function decodeStrings(buf) {
  if (!buf) return "";
  if (buf.subarray(0, 6).toString("latin1") === "bplist") {
    const p = parsePlist(buf);
    return p ? Object.entries(p).map(([k, v]) => `"${k}" = "${String(v)}";`).join("\n") : "";
  }
  if (buf[0] === 255 && buf[1] === 254 || buf.length > 1 && buf[1] === 0) return buf.toString("utf16le");
  if (buf[0] === 254 && buf[1] === 255) return Buffer.from(buf).swap16().toString("utf16le");
  return buf.toString("utf8");
}
var JS_FILE = /\.(?:c|m)?js$/;
function readElectron(fs, asarPath) {
  const buf = fs.read(asarPath);
  if (!buf) return void 0;
  let asar;
  try {
    asar = new AsarArchive(buf);
  } catch {
    return void 0;
  }
  const texts = [];
  let budget = 32 * 1024 * 1024;
  let truncated = false;
  for (const f of asar.files) {
    if (!JS_FILE.test(f.path) || /(^|\/)node_modules\//.test(f.path) || /\.(?:min\.)?map$/.test(f.path)) continue;
    if (f.size > budget) {
      truncated = true;
      continue;
    }
    const data = asar.read(f);
    if (!data) continue;
    budget -= f.size;
    texts.push({ file: `${asarPath}:${f.path}`, text: data.toString("utf8"), lines: true, code: true });
  }
  const names2 = /* @__PURE__ */ new Set();
  const pkg = asar.files.find((f) => f.path === "package.json");
  const pkgData = pkg ? asar.read(pkg) : void 0;
  if (pkgData) {
    try {
      const j = JSON.parse(pkgData.toString("utf8"));
      for (const n of Object.keys(j.dependencies ?? {})) names2.add(n);
    } catch {
    }
  }
  for (const f of asar.files) {
    const m = f.path.match(/^node_modules\/((?:@[^/]+\/)?[^/]+)\/package\.json$/);
    if (m) names2.add(m[1]);
  }
  const deps = [...names2].sort().map((name) => ({
    id: findSignatureByNpm(name)?.id ?? name,
    name,
    via: "npm",
    evidence: { file: asarPath, detail: name },
    filesAvailable: false
  }));
  return { texts, deps, truncated };
}
var XarArchive = class {
  constructor(buf) {
    this.buf = buf;
    if (buf.length < 28 || buf.toString("latin1", 0, 4) !== "xar!") throw new Error("Not a .pkg installer (no xar header)");
    const headerSize = buf.readUInt16BE(4);
    const tocLen = Number(buf.readBigUInt64BE(8));
    this.heap = headerSize + tocLen;
    const tocXml = inflateSync(buf.subarray(headerSize, headerSize + tocLen)).toString("utf8");
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@", isArray: (name) => name === "file" || name === "X509Certificate" });
    const toc = parser.parse(tocXml).xar?.toc;
    if (!toc) throw new Error("Not a .pkg installer (empty table of contents)");
    const walk2 = (nodes, prefix) => {
      for (const n of nodes ?? []) {
        const name = String(Array.isArray(n.name) ? n.name[0] : n.name);
        const path = prefix ? `${prefix}/${name}` : name;
        const data = n.data;
        const f = {
          path,
          type: String(n.type ?? "file"),
          offset: data ? Number(data.offset) : void 0,
          length: data ? Number(data.length) : void 0,
          size: data ? Number(data.size) : void 0,
          encoding: data?.encoding?.["@style"]
        };
        this.files.push(f);
        this.byPath.set(path, f);
        if (n.file) walk2(n.file, path);
      }
    };
    walk2(toc.file, "");
    const sig = toc.signature;
    const xsig = toc["x-signature"];
    if (sig || xsig) {
      const certs = (sig ?? xsig)?.KeyInfo?.X509Data?.X509Certificate ?? [];
      const leafDer = certs[0] ? Buffer.from(String(certs[0]).replace(/\s+/g, ""), "base64") : void 0;
      const authority = leafDer ? matchInstallerCert(leafDer.toString("latin1")) ?? readCms(leafDer).authority : void 0;
      let secureTimestamp = false;
      if (xsig && xsig.offset !== void 0) {
        const off = this.heap + Number(xsig.offset);
        secureTimestamp = readCms(buf.subarray(off, off + Number(xsig.size ?? 0))).secureTimestamp;
      }
      this.signature = { style: String(sig?.["@style"] ?? xsig?.["@style"] ?? ""), authority, certKind: installerKind(authority), secureTimestamp };
    }
  }
  files = [];
  signature;
  heap;
  byPath = /* @__PURE__ */ new Map();
  has(path) {
    return this.byPath.has(path);
  }
  /** Decoded contents of a file (gzip / zlib / stored). Throws for bzip2/xz, which Node can't decode. */
  read(path) {
    const f = this.byPath.get(path);
    if (!f || f.offset === void 0 || f.length === void 0) throw new Error(`Not in package: ${path}`);
    const raw = this.buf.subarray(this.heap + f.offset, this.heap + f.offset + f.length);
    const enc = f.encoding ?? "application/octet-stream";
    if (enc === "application/octet-stream") return Buffer.from(raw);
    if (enc === "application/x-gzip") return raw[0] === 31 && raw[1] === 139 ? gunzipSync(raw) : inflateSync(raw);
    throw new Error(`${path} uses ${enc} compression, which Okayed can't read yet`);
  }
};
function matchInstallerCert(text) {
  return text.match(/(Developer ID Installer|3rd Party Mac Developer Installer|Mac Installer Distribution)(: [\x20-\x7e]{1,120}?\([A-Z0-9]{10}\))?/)?.[0];
}
function installerKind(authority) {
  if (!authority) return void 0;
  if (/Developer ID Installer/.test(authority)) return "developer-id";
  if (/3rd Party Mac Developer Installer|Mac Installer Distribution/.test(authority)) return "mac-app-distribution";
  return certKindOf(authority);
}
function parseCpio(buf) {
  const out = [];
  let p = 0;
  while (p + 6 <= buf.length) {
    const magic = buf.toString("latin1", p, p + 6);
    let nameSize;
    let fileSize;
    let mode;
    let hdr;
    let pad = (n) => n;
    if (magic === "070707") {
      const oct = (o, n) => parseInt(buf.toString("latin1", p + o, p + o + n), 8);
      mode = oct(18, 6);
      nameSize = oct(59, 6);
      fileSize = oct(65, 11);
      hdr = 76;
    } else if (magic === "070701" || magic === "070702") {
      const hex = (i) => parseInt(buf.toString("latin1", p + 6 + i * 8, p + 14 + i * 8), 16);
      mode = hex(1);
      fileSize = hex(6);
      nameSize = hex(11);
      hdr = 110;
      pad = (n) => n + 3 & ~3;
    } else break;
    const nameStart = p + hdr;
    const name = buf.toString("utf8", nameStart, nameStart + nameSize - 1);
    const dataStart = magic === "070707" ? nameStart + nameSize : p + pad(hdr + nameSize);
    if (name === "TRAILER!!!") break;
    const data = buf.subarray(dataStart, dataStart + fileSize);
    out.push({ path: name.replace(/^\.\//, "").replace(/^\.$/, ""), mode, data });
    p = magic === "070707" ? dataStart + fileSize : p + pad(dataStart - p + fileSize);
  }
  return out.filter((e) => e.path);
}
function parsePkg(path, opts = {}) {
  const xar = new XarArchive(opts.buf ?? readFileSync5(path));
  const payloads = xar.files.filter((f) => /(^|\/)Payload$/.test(f.path) && f.type === "file").map((f) => f.path);
  if (!payloads.length) throw new Error("This .pkg has no Payload (it may be a metapackage or a receipt-only package)");
  const hasScripts = xar.files.some((f) => /(^|\/)Scripts$/.test(f.path));
  const installer = {
    file: "installer package",
    signed: !!xar.signature,
    authority: xar.signature?.authority,
    certKind: xar.signature?.certKind,
    secureTimestamp: xar.signature?.secureTimestamp,
    hasScripts
  };
  const notAudited = [];
  const entries = [];
  for (const p of payloads) {
    let raw;
    try {
      raw = xar.read(p);
    } catch (e) {
      notAudited.push(`${p} couldn't be read: ${e.message}.`);
      continue;
    }
    let cpio;
    if (raw[0] === 31 && raw[1] === 139) cpio = gunzipSync2(raw);
    else if (raw.subarray(0, 6).toString("latin1").startsWith("0707")) cpio = raw;
    else {
      const kind = raw.subarray(0, 4).toString("latin1") === "pbzx" ? "pbzx (LZMA)" : raw.subarray(0, 3).toString("latin1") === "BZh" ? "bzip2" : "an unknown format";
      notAudited.push(`${p} is compressed with ${kind}, which Okayed can't unpack yet. Scan the .app instead.`);
      continue;
    }
    entries.push(...parseCpio(cpio));
  }
  const fs = new MemoryBundleFS(entries);
  const apps = findAppBundles(fs);
  if (!apps.length) {
    if (notAudited.length) throw new Error(notAudited.join(" "));
    throw new Error("No .app bundle was found in this installer package");
  }
  if (apps.length > 1) notAudited.push(`The package installs ${apps.length} apps; only ${apps[0]} was checked.`);
  return [parseMacApp(fs, apps[0], { root: path, inputKind: "pkg", distribution: opts.distribution, notAudited, installer })];
}
function baseConfigName(body) {
  const rel2 = body.match(/baseConfigurationReferenceRelativePath = ("(?:[^"\\]|\\.)*"|[^;]+);/)?.[1];
  if (rel2) return basename2(rel2.replace(/^"|"$/g, "").trim());
  const named = body.match(/baseConfigurationReference = \w+ \/\* (.+?) \*\//)?.[1];
  return named ? basename2(named) : void 0;
}
function parseBuildConfigs(pbx) {
  const out = [];
  let from = 0;
  while (true) {
    const at = pbx.indexOf("isa = XCBuildConfiguration;", from);
    if (at < 0) break;
    const bsKey = pbx.indexOf("buildSettings = {", at);
    if (bsKey < 0) break;
    const header = pbx.slice(at, bsKey);
    const baseConfigFile = baseConfigName(header);
    let depth = 0;
    let i = bsKey + "buildSettings = ".length;
    const start = i;
    for (; i < pbx.length; i++) {
      const ch = pbx[i];
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) break;
      }
    }
    const body = pbx.slice(start + 1, i);
    const settings = {};
    const re = /^\s*"?([A-Za-z0-9_]+(?:\[[^\]]*\])?)"?\s*=\s*("(?:[^"\\]|\\.)*"|[^;(\n]+);/gm;
    let m;
    while (m = re.exec(body)) {
      let v = m[2].trim();
      if (v.startsWith('"')) v = v.slice(1, -1).replace(/\\"/g, '"').replace(/\\n/g, "\n");
      settings[m[1]] = v;
    }
    const after = pbx.slice(i, i + 200);
    const name = after.match(/name = "?([^";]+)"?;/)?.[1] ?? "";
    out.push({ name, settings, baseConfigFile });
    from = i;
  }
  if (!out.length) {
    const settings = {};
    const re = /(?:^|[\s{;])([A-Z][A-Z0-9_]+)\s*=\s*("(?:[^"\\]|\\.)*"|[^;(\n{}]+);/gm;
    let m;
    while (m = re.exec(pbx)) {
      let v = m[2].trim();
      if (v.startsWith('"')) v = v.slice(1, -1);
      if (!(m[1] in settings)) settings[m[1]] = v;
    }
    out.push({ name: "", settings });
  }
  return out;
}
function readXcconfig(file, seen = /* @__PURE__ */ new Set()) {
  if (seen.has(file)) return {};
  seen.add(file);
  const vars = {};
  for (const line of (readText(file) ?? "").split("\n")) {
    const inc = line.match(/^\s*#include\??\s+"([^"]+)"/);
    if (inc) {
      Object.assign(vars, readXcconfig(join6(dirname(file), inc[1]), seen));
      continue;
    }
    const l = line.replace(/(^|\s)\/\/.*$/, "").trim();
    const m = l.match(/^([A-Za-z0-9_]+)(\[[^\]]*\])?\s*=\s*(.*)$/);
    if (!m) continue;
    const key = m[1] + (m[2] && /sdk=macosx/.test(m[2]) ? "[sdk=macosx*]" : "");
    if (m[2] && !key.includes("[")) continue;
    vars[key] = m[3].trim().replace(/;+$/, "").trim();
  }
  return vars;
}
function readXcconfigs(dir) {
  const out = /* @__PURE__ */ new Map();
  for (const f of walk(dir, { exts: [".xcconfig", ".xcconfig.template"] })) out.set(basename2(f), readXcconfig(f));
  return out;
}
var NON_APP_BUNDLE = /(tests?|uitests|extension|widget|watch|intents|clip|notification|share|keyboard|action)(\b|$)/i;
function mainTargetSettings(pbx, iosDir, infoPlistRel) {
  const configs = parseBuildConfigs(pbx);
  const xcconfigs = readXcconfigs(iosDir);
  const isTarget = (c2) => !!c2.settings.PRODUCT_BUNDLE_IDENTIFIER || !!c2.settings.INFOPLIST_FILE || !!c2.settings.PRODUCT_NAME;
  const projectLevel = configs.filter((c2) => !isTarget(c2));
  let candidates = infoPlistRel ? configs.filter((c2) => c2.settings.INFOPLIST_FILE?.replace(/^"|"$/g, "").replace(/^\$\(SRCROOT\)\//, "") === infoPlistRel) : [];
  if (!candidates.length) {
    candidates = configs.filter((c2) => {
      const id = c2.settings.PRODUCT_BUNDLE_IDENTIFIER;
      return id && !NON_APP_BUNDLE.test(id) && !/TEST_HOST|BUNDLE_LOADER/.test(Object.keys(c2.settings).join(" "));
    });
    candidates.sort((a, b) => a.settings.PRODUCT_BUNDLE_IDENTIFIER.length - b.settings.PRODUCT_BUNDLE_IDENTIFIER.length);
    const first = candidates[0]?.settings.PRODUCT_BUNDLE_IDENTIFIER;
    candidates = candidates.filter((c2) => c2.settings.PRODUCT_BUNDLE_IDENTIFIER === first);
  }
  const pick = (list2) => list2.find((c2) => /release/i.test(c2.name)) ?? list2[0];
  const target = pick(candidates);
  const project = pick(projectLevel);
  const xc = (file) => file ? xcconfigs.get(file) ?? xcconfigs.get(file + ".template") : void 0;
  const anyXcconfig = (key) => {
    for (const vars of xcconfigs.values()) if (vars[key] !== void 0) return vars[key];
    return void 0;
  };
  const settings = {
    ...project?.settings ?? {},
    ...xc(project?.baseConfigFile) ?? {},
    ...xc(target?.baseConfigFile) ?? {},
    ...target?.settings ?? {}
  };
  const lookup = (key) => settings[key] ?? anyXcconfig(key);
  const resolve22 = (value) => {
    if (value === void 0) return void 0;
    let v = value;
    for (let pass = 0; pass < 5 && /\$[({]/.test(v); pass++) {
      v = v.replace(/\$[({]([A-Za-z0-9_]+)(?::[^)}]*)?[)}]/g, (whole, key) => {
        if (key === "inherited") return "";
        const r = lookup(key);
        return r !== void 0 ? r : whole;
      });
    }
    return v.trim();
  };
  return { settings, resolve: resolve22 };
}
function pbxObjects(pbx) {
  const out = /* @__PURE__ */ new Map();
  const re = /^\s*([0-9A-Fa-f]{24})\s*(?:\/\*[^*]*\*\/\s*)?=\s*\{/gm;
  let m;
  while (m = re.exec(pbx)) {
    let depth = 0;
    let i = m.index + m[0].length - 1;
    const start = i;
    for (; i < pbx.length; i++) {
      const ch = pbx[i];
      if (ch === '"') {
        for (i++; i < pbx.length && pbx[i] !== '"'; i++) if (pbx[i] === "\\") i++;
      } else if (ch === "{") depth++;
      else if (ch === "}" && --depth === 0) break;
    }
    out.set(m[1], pbx.slice(start + 1, i));
    re.lastIndex = i;
  }
  return out;
}
function settingsOf(body) {
  const bs = body.indexOf("buildSettings = {");
  if (bs < 0) return {};
  const settings = {};
  const re = /^\s*"?([A-Za-z0-9_]+(?:\[[^\]]*\])?)"?\s*=\s*("(?:[^"\\]|\\.)*"|[^;(\n]+);/gm;
  const sub = body.slice(bs + "buildSettings = {".length);
  let m;
  while (m = re.exec(sub)) {
    let v = m[2].trim();
    if (v.startsWith('"')) v = v.slice(1, -1).replace(/\\"/g, '"');
    settings[m[1]] = v;
  }
  return settings;
}
function parseTargets(pbx, iosDir) {
  const objs = pbxObjects(pbx);
  const xcconfigs = readXcconfigs(iosDir);
  const field = (body, key) => body.match(new RegExp(`\\b${key} = ("(?:[^"\\\\]|\\\\.)*"|[^;]+);`))?.[1]?.replace(/^"|"$/g, "").trim();
  const configsOf = (listId) => {
    const list2 = listId ? objs.get(listId) : void 0;
    const ids = list2?.match(/buildConfigurations = \(([^)]*)\)/)?.[1]?.match(/[0-9A-Fa-f]{24}/g) ?? [];
    const cfgs = ids.map((id) => objs.get(id) ?? "").filter(Boolean);
    const release = cfgs.find((c2) => /\bname = "?Release"?;/.test(c2)) ?? cfgs[0];
    if (!release) return void 0;
    const base = baseConfigName(release);
    return { settings: settingsOf(release), base };
  };
  const projectBody = [...objs.values()].find((b) => /\bisa = PBXProject;/.test(b));
  const project = configsOf(projectBody?.match(/buildConfigurationList = ([0-9A-Fa-f]{24})/)?.[1]);
  const xc = (file) => file ? xcconfigs.get(file) ?? xcconfigs.get(file + ".template") : void 0;
  const anyXcconfig = (key) => {
    for (const vars of xcconfigs.values()) if (vars[key] !== void 0) return vars[key];
    return void 0;
  };
  const out = [];
  for (const [id, body] of objs) {
    if (!/\bisa = PBXNativeTarget;/.test(body)) continue;
    const cfg = configsOf(body.match(/buildConfigurationList = ([0-9A-Fa-f]{24})/)?.[1]);
    const settings = { ...project?.settings ?? {}, ...xc(project?.base) ?? {}, ...xc(cfg?.base) ?? {}, ...cfg?.settings ?? {} };
    const resolve22 = (value) => {
      if (value === void 0) return void 0;
      let v = value;
      for (let pass = 0; pass < 5 && /\$[({]/.test(v); pass++) {
        v = v.replace(/\$[({]([A-Za-z0-9_]+)(?::[^)}]*)?[)}]/g, (whole, key) => key === "inherited" ? "" : key === "TARGET_NAME" || key === "PRODUCT_NAME" && !settings.PRODUCT_NAME ? field(body, "name") ?? whole : settings[key] ?? anyXcconfig(key) ?? whole);
      }
      return v.trim();
    };
    out.push({ id, name: field(body, "name") ?? id, productType: field(body, "productType") ?? "", settings, resolve: resolve22 });
  }
  return out;
}
var APP_TYPE = "com.apple.product-type.application";
var TEST_TYPE = /bundle\.(?:unit-test|ui-testing)/;
function buildsForIos(t) {
  const sdk = t.resolve(t.settings.SDKROOT) ?? "";
  const supported = t.resolve(t.settings.SUPPORTED_PLATFORMS) ?? "";
  if (supported) return /\biphoneos\b/.test(supported);
  return !sdk || sdk === "iphoneos" || sdk === "auto";
}
function buildsForMac(t) {
  const sdk = t.resolve(t.settings.SDKROOT) ?? "";
  const supported = t.resolve(t.settings.SUPPORTED_PLATFORMS) ?? "";
  if (supported ? /\bmacosx\b/.test(supported) : sdk === "macosx") return true;
  return /^YES$/i.test(t.resolve(t.settings.SUPPORTS_MACCATALYST) ?? "") && buildsForIos(t);
}
function mainAppTarget(pbx, dir, platform, distribution) {
  const apps = parseTargets(pbx, dir).filter((t) => t.productType === APP_TYPE && (platform === "macos" ? buildsForMac(t) : buildsForIos(t)));
  const store = (t) => /app.?store|\bmas\b/i.test(t.name);
  const id = (t) => t.resolve(t.settings.PRODUCT_BUNDLE_IDENTIFIER) ?? "";
  return [...apps].sort((a, b) => {
    if (platform === "macos" && store(a) !== store(b)) return store(a) === (distribution !== "direct") ? -1 : 1;
    const variant = (t) => /alpha|beta|staging|dev(?:elop\w*)?\b|debug|nightly|canary|internal|demo|sample|example|local|experimental/i.test(t.name) ? 1 : 0;
    return variant(a) - variant(b) || id(a).length - id(b).length || a.name.length - b.name.length;
  })[0];
}
function groupPaths(objs) {
  const parent = /* @__PURE__ */ new Map();
  const ids = (body, field) => body.match(new RegExp(`\\b${field} = \\(([^)]*)\\)`))?.[1]?.match(/[0-9A-Fa-f]{24}/g) ?? [];
  for (const [id, b] of objs) if (/isa = PBX(?:Group|VariantGroup);/.test(b)) for (const c2 of ids(b, "children")) parent.set(c2, id);
  const pathOf = (id) => {
    const b = objs.get(id) ?? "";
    const own = b.match(/\bpath = ("(?:[^"\\]|\\.)*"|[^;]+);/)?.[1]?.replace(/^"|"$/g, "") ?? "";
    const tree = b.match(/sourceTree = ("[^"]*"|\w+);/)?.[1]?.replace(/"/g, "");
    const up = parent.get(id);
    const base = tree === "SOURCE_ROOT" || !up ? "" : pathOf(up);
    return [base, own].filter(Boolean).join("/");
  };
  const out = /* @__PURE__ */ new Map();
  for (const id of objs.keys()) out.set(id, pathOf(id));
  return out;
}
function outOfScope(pbx, dir, platform) {
  const objs = pbxObjects(pbx);
  const paths = groupPaths(objs);
  const keepFiles = /* @__PURE__ */ new Set(), dropFiles = /* @__PURE__ */ new Set(), keepDirs = [], dropDirs = [];
  for (const t of parseTargets(pbx, dir)) {
    const body = objs.get(t.id) ?? "";
    const inScope = !TEST_TYPE.test(t.productType) && (platform === "macos" ? buildsForMac(t) : buildsForIos(t));
    const groups = body.match(/fileSystemSynchronizedGroups = \(([^)]*)\)/)?.[1]?.match(/[0-9A-Fa-f]{24}/g) ?? [];
    for (const g of groups) (inScope ? keepDirs : dropDirs).push(`${paths.get(g) ?? ""}/`);
    const phases = body.match(/buildPhases = \(([^)]*)\)/)?.[1]?.match(/[0-9A-Fa-f]{24}/g) ?? [];
    for (const ph of phases) {
      const pb = objs.get(ph) ?? "";
      if (!/isa = PBXSourcesBuildPhase;/.test(pb)) continue;
      for (const bf of pb.match(/files = \(([^)]*)\)/)?.[1]?.match(/[0-9A-Fa-f]{24}/g) ?? []) {
        const ref = (objs.get(bf) ?? "").match(/fileRef = ([0-9A-Fa-f]{24})/)?.[1];
        const p = ref ? paths.get(ref) : void 0;
        if (p) (inScope ? keepFiles : dropFiles).add(p);
      }
    }
  }
  const under = (p, dirs) => dirs.some((d) => d.length > 1 && p.startsWith(d));
  return (p) => !keepFiles.has(p) && !under(p, keepDirs) && (dropFiles.has(p) || under(p, dropDirs));
}
var ROLE_BY_TYPE = {
  "com.apple.product-type.application": "helper-app",
  "com.apple.product-type.xpc-service": "xpc-service",
  "com.apple.product-type.tool": "helper-tool",
  "com.apple.product-type.app-extension": "app-extension",
  "com.apple.product-type.extensionkit-extension": "app-extension",
  "com.apple.product-type.system-extension": "system-extension",
  "com.apple.product-type.driver-extension": "system-extension",
  "com.apple.product-type.framework": "framework",
  "com.apple.product-type.library.dynamic": "framework",
  "com.apple.product-type.bundle": "framework"
};
function isMacTarget(t) {
  return buildsForMac(t);
}
function isCatalyst(t) {
  return /^YES$/i.test(t.resolve(t.settings.SUPPORTS_MACCATALYST) ?? "") && (t.resolve(t.settings.SDKROOT) ?? "") !== "macosx" && buildsForIos(t);
}
function forMac(t) {
  const settings = { ...t.settings };
  for (const [k, v] of Object.entries(t.settings)) {
    const m = k.match(/^(\w+)\[sdk=macosx[^\]]*\]$/);
    if (m) settings[m[1]] = v;
  }
  return { ...t, settings };
}
function xcodePlatforms(pbx, iosDir) {
  const apps = parseTargets(pbx, iosDir).filter((t) => t.productType === "com.apple.product-type.application");
  const out = /* @__PURE__ */ new Set();
  const iosApp = mainAppTarget(pbx, iosDir, "ios");
  for (const t of apps) {
    if (isMacTarget(t) && (!isCatalyst(t) || t.id === iosApp?.id)) out.add("macos");
    if (isCatalyst(t) || buildsForIos(t)) out.add("ios");
  }
  return out.size ? ["ios", "macos"].filter((p) => out.has(p)) : ["ios"];
}
function macProjectFacts(args) {
  const { root, iosDir, pbx, pbxPath } = args;
  const targets = parseTargets(pbx, iosDir).map(forMac).filter((t) => isMacTarget(t) && (ROLE_BY_TYPE[t.productType] !== void 0 || t.productType === "com.apple.product-type.kernel-extension"));
  const apps = targets.filter((t) => t.productType === "com.apple.product-type.application");
  const main2 = apps.find((t) => t.resolve(t.settings.PRODUCT_BUNDLE_IDENTIFIER) === args.bundleId) ?? apps.find((t) => !/helper|launcher|login/i.test(t.name)) ?? apps[0];
  const pbxRel = rel(root, pbxPath);
  const settingEvidence = (key) => {
    const i = pbx.indexOf(key);
    return { file: pbxRel, line: i >= 0 ? lineOf(pbx, i) : void 0, detail: key };
  };
  const code = [];
  const bundledInstallers = [];
  let mainEnts = {};
  let mainEvidence;
  for (const t of targets) {
    if (t.productType === "com.apple.product-type.kernel-extension") {
      bundledInstallers.push({ kind: "kext", evidence: { file: pbxRel, detail: `target ${t.name} builds a kernel extension` } });
      continue;
    }
    let role = ROLE_BY_TYPE[t.productType];
    if (t === main2) role = "main";
    else if (role === "helper-app" && /launcher|login.?(item|helper)|autostart/i.test(`${t.name} ${t.settings.PRODUCT_BUNDLE_IDENTIFIER ?? ""}`)) role = "login-item";
    const executable = role !== "framework";
    const entFile = t.resolve(t.settings.CODE_SIGN_ENTITLEMENTS)?.replace(/^\$[({]SRCROOT[)}]\/?/, "").replace(/^\.\//, "");
    const entAbs = entFile ? join7(iosDir, entFile) : void 0;
    const entText = entAbs && exists(entAbs) ? readText(entAbs) : void 0;
    const fromFile = entText && parsePlist(Buffer.from(entText)) || {};
    const fromSettings = entitlementsFromBuildSettings(t.settings, t.resolve);
    const entitlements = executable ? { ...fromSettings, ...fromFile } : void 0;
    const evidence = entText ? { file: rel(root, entAbs), detail: `${t.name} entitlements` } : fromSettings[SANDBOX] ? settingEvidence("ENABLE_APP_SANDBOX") : { file: pbxRel, detail: `target ${t.name}` };
    const flags = t.resolve(t.settings.OTHER_CODE_SIGN_FLAGS) ?? "";
    code.push({
      path: t.name,
      role,
      bundleId: t.resolve(t.settings.PRODUCT_BUNDLE_IDENTIFIER),
      executable,
      evidence,
      // "$(DEVELOPMENT_TEAM)" left unresolved means it comes from an xcconfig we can't see: unknown, not different.
      teamId: (t.resolve(t.settings.DEVELOPMENT_TEAM) || void 0)?.replace(/^.*\$[({].*$/, "") || void 0,
      hardenedRuntime: /^YES$/i.test(t.resolve(t.settings.ENABLE_HARDENED_RUNTIME) ?? "") || /(--options[= ]|-o\s*)\S*runtime/.test(flags),
      entitlements
    });
    if (t === main2) {
      mainEnts = entitlements ?? {};
      mainEvidence = evidence;
    }
  }
  if (!main2) code.unshift({ path: "app", role: "main", executable: true, evidence: { file: pbxRel }, entitlements: {} });
  const mainCode = code.find((c2) => c2.role === "main");
  if (mainCode !== code[0]) code.splice(code.indexOf(mainCode), 1), code.unshift(mainCode);
  const sig = scanMacText(args.texts.filter((t) => t.code || /\.(strings|xcstrings|storyboard|xib)$/.test(t.file)), emptyMacSignals());
  for (const u of AUTO_UPDATERS) {
    const dep = args.linkedSdks.find((d) => u.deps.test(d.name));
    if (dep) sig.autoUpdaters.unshift({ id: u.id, name: u.name, via: "dependency", evidence: dep.evidence });
    const key = u.plistKeys.find((k) => k in args.infoPlist);
    if (key) sig.autoUpdaters.push({ id: u.id, name: u.name, via: "config", evidence: { file: args.infoPlistPath, detail: `Info.plist ${key}` } });
  }
  const cart = readText(join7(iosDir, "Cartfile.resolved")) ?? readText(join7(root, "Cartfile.resolved"));
  const cartHit = cart?.match(/^github "sparkle-project\/Sparkle".*$/m);
  if (cartHit) sig.autoUpdaters.unshift({ id: "sparkle", name: "Sparkle", via: "dependency", evidence: { file: "Cartfile.resolved", line: lineOf(cart, cartHit.index), detail: cartHit[0] } });
  for (const d of args.linkedSdks) {
    if (/^LaunchAtLogin(-Modern|-Legacy)?$/i.test(d.name)) {
      sig.loginItems.push({ id: "LaunchAtLogin", name: "LaunchAtLogin package (uses SMAppService)", via: "dependency", evidence: d.evidence });
    }
  }
  for (const c2 of code) if (c2.role === "login-item") sig.loginItems.push({ id: "login-item-bundle", name: "login item helper target", via: "config", evidence: c2.evidence });
  const catalyst = !!main2 && isCatalyst(main2);
  const tempExceptions = code.flatMap((c2) => temporaryExceptions(c2.entitlements).map((key) => ({ key, path: c2.path, evidence: { ...c2.evidence, detail: key } })));
  const macos = {
    ...chooseDistribution(args.distribution),
    builtBinary: false,
    catalyst: catalyst || void 0,
    sandboxEnabled: mainEnts[SANDBOX] === true,
    entitlementsEvidence: mainEvidence,
    temporaryExceptionEntitlements: tempExceptions,
    hardenedRuntime: mainCode.hardenedRuntime,
    code,
    embeddedHelpers: code.filter((c2) => c2.role !== "main" && c2.executable).map((c2) => c2.path),
    bundledInstallers,
    bundlesInstallersOrKexts: bundledInstallers.length > 0,
    ...sig,
    downloadsExecutableCode: sig.codeExecution.length > 0,
    screenshots: readScreenshots(root, [iosDir, root])
  };
  return { macos, entitlements: mainEnts };
}
function looksDirect(m) {
  if (m.distributionSource !== "default" || m.sandboxEnabled && !m.autoUpdaters.length) return void 0;
  const why = [m.autoUpdaters.length && m.autoUpdaters[0].name, m.installOutsideContainer.some((u) => u.key === "privileged-helper") && "a privileged helper", m.hardenedRuntime && "Hardened Runtime"].filter(Boolean);
  return why.length ? `This Mac app looks like a direct download (${[!m.sandboxEnabled && "no App Sandbox", ...why].filter(Boolean).join(", ")}), but it was checked against Mac App Store rules. If you ship it yourself, run with --outside-store (or set "distribution": "direct" in .okayed/config.json).` : void 0;
}
var DIRECT_PROJECT_NOTE = "Developer ID certificate, secure timestamp and notarization are set when you export, so they weren't checked here. Scan the exported .app (or its .zip / .pkg) too.";
var REQUIRED_REASON_CATEGORIES = [
  {
    key: "NSPrivacyAccessedAPICategoryFileTimestamp",
    label: "File timestamp APIs",
    patterns: [
      /\bNSFile(Creation|Modification)Date\b/,
      /\bFileAttributeKey\s*\.\s*(creationDate|modificationDate)\b/,
      /\[\s*\.(creationDate|modificationDate)\s*\]/,
      /\b(contentModificationDateKey|creationDateKey|contentModificationDate|fileModificationDate)\b/,
      /\bNSURL(ContentModificationDate|CreationDate)Key\b/,
      /\b(getattrlist|fgetattrlist|getattrlistbulk|getattrlistat|fstatat|lstat|fstat)\s*\(/,
      /(?<![\w.])stat\s*\(/
    ],
    binarySymbols: ["NSFileModificationDate", "NSFileCreationDate", "NSURLContentModificationDateKey", "NSURLCreationDateKey", "_getattrlist", "_stat\0", "_fstat\0", "_lstat\0"],
    reasons: [
      { code: "DDA9.1", summary: "Display timestamps to the user" },
      { code: "C617.1", summary: "Access timestamps of files inside the app container, app group, or CloudKit container" },
      { code: "3B52.1", summary: "Access timestamps of files the user granted access to (e.g. document picker)" },
      { code: "0A2A.1", summary: "Third-party SDK wrapper functions (SDKs only)" }
    ]
  },
  {
    key: "NSPrivacyAccessedAPICategorySystemBootTime",
    label: "System boot time APIs",
    patterns: [/\bsystemUptime\b/, /\bmach_absolute_time\s*\(/],
    binarySymbols: ["systemUptime", "_mach_absolute_time"],
    reasons: [
      { code: "35F9.1", summary: "Measure time between events inside the app" },
      { code: "8FFB.1", summary: "Calculate absolute timestamps for events (e.g. UIKit/AVFoundation events)" },
      { code: "3D61.1", summary: "Include boot time in optional bug reports the user chooses to submit" }
    ]
  },
  {
    key: "NSPrivacyAccessedAPICategoryDiskSpace",
    label: "Disk space APIs",
    patterns: [
      /\bvolume(Available|Total)Capacity(ForImportantUsage|ForOpportunisticUsage)?Key\b/,
      /\bNSURLVolume(Available|Total)Capacity\w*Key\b/,
      /\bNSFileSystem(Free)?Size\b/,
      /\bFileAttributeKey\s*\.\s*(systemFreeSize|systemSize)\b/,
      /\b(statfs|statvfs|fstatfs|fstatvfs)\s*\(/
    ],
    binarySymbols: ["NSURLVolumeAvailableCapacityKey", "NSURLVolumeAvailableCapacityForImportantUsageKey", "NSURLVolumeTotalCapacityKey", "NSFileSystemFreeSize", "NSFileSystemSize", "_statfs", "_statvfs"],
    reasons: [
      { code: "85F4.1", summary: "Display disk space to the user" },
      { code: "E174.1", summary: "Check there is enough space before writing files" },
      { code: "7D9E.1", summary: "Include disk space in optional bug reports" },
      { code: "B728.1", summary: "Health research apps: detect low disk space affecting data collection" }
    ]
  },
  {
    key: "NSPrivacyAccessedAPICategoryActiveKeyboards",
    label: "Active keyboard APIs",
    patterns: [/\bactiveInputModes\b/],
    binarySymbols: ["activeInputModes"],
    reasons: [
      { code: "3EC4.1", summary: "Custom keyboard apps determining active keyboards" },
      { code: "54BD.1", summary: "Customize the UI based on the active keyboard" }
    ]
  },
  {
    key: "NSPrivacyAccessedAPICategoryUserDefaults",
    label: "UserDefaults",
    patterns: [/\bUserDefaults\b/, /\bNSUserDefaults\b/, /@AppStorage\b/],
    binarySymbols: ["NSUserDefaults"],
    reasons: [
      { code: "CA92.1", summary: "Read/write data only accessible to the app itself" },
      { code: "1C8F.1", summary: "Read/write data shared within an App Group" },
      { code: "C56D.1", summary: "Third-party SDK wrapper functions (SDKs only)" },
      { code: "AC6B.1", summary: "Read com.apple.configuration.managed / feedback keys (MDM)" }
    ]
  }
];
var APPLE_FIELDS = /* @__PURE__ */ new Set([
  "name",
  "subtitle",
  "description",
  "keywords",
  "promotional_text",
  "release_notes",
  "marketing_url",
  "support_url",
  "privacy_url"
]);
function readAppleListing(root, searchDirs) {
  const out = [];
  for (const dir of searchDirs) {
    const meta = join8(dir, "fastlane", "metadata");
    if (!exists(meta)) continue;
    for (const locale of safeList(meta)) {
      const ldir = join8(meta, locale);
      if (locale === "android" || locale === "review_information" || !isDir(ldir)) continue;
      for (const f of safeList(ldir)) {
        const field = f.replace(/\.txt$/, "");
        if (!f.endsWith(".txt") || !APPLE_FIELDS.has(field)) continue;
        const text = readText(join8(ldir, f));
        if (text !== void 0) out.push({ locale, field, text, file: rel(root, join8(ldir, f)) });
      }
    }
    if (out.length) break;
  }
  return out;
}
function readAppleReviewInfo(root, searchDirs) {
  for (const dir of searchDirs) {
    const ri = join8(dir, "fastlane", "metadata", "review_information");
    if (!exists(ri) || !isDir(ri)) continue;
    const read = (f) => readText(join8(ri, f))?.trim() || void 0;
    return { demoUser: read("demo_user.txt"), demoPassword: read("demo_password.txt") ? "set" : void 0, notes: read("notes.txt"), file: rel(root, ri) };
  }
  return void 0;
}
function safeList(d) {
  try {
    return readdirSync3(d);
  } catch {
    return [];
  }
}
function isDir(p) {
  try {
    return statSync2(p).isDirectory();
  } catch {
    return false;
  }
}
function transparentPixels(png) {
  if (png.length < 33 || png.readUInt32BE(0) !== 2303741511) return 0;
  const w = png.readUInt32BE(16);
  const h = png.readUInt32BE(20);
  const depth = png[24];
  const color = png[25];
  const channels = color === 6 ? 4 : color === 4 ? 2 : 0;
  if (!channels || depth !== 8 && depth !== 16 || png[28] !== 0 || w * h > 4096 * 4096) return 0;
  const idat = [];
  for (let p = 8; p + 12 <= png.length; ) {
    const len = png.readUInt32BE(p);
    const type = png.toString("latin1", p + 4, p + 8);
    if (type === "IDAT") idat.push(png.subarray(p + 8, p + 8 + len));
    if (type === "IEND") break;
    p += 12 + len;
  }
  let raw;
  try {
    raw = inflateSync2(Buffer.concat(idat));
  } catch {
    return 0;
  }
  const bpp = channels * depth / 8;
  const stride = w * bpp;
  if (raw.length < (stride + 1) * h) return 0;
  let prev = new Uint8Array(stride);
  let clear = 0;
  for (let y = 0; y < h; y++) {
    const at = y * (stride + 1);
    const filter = raw[at];
    const row = new Uint8Array(stride);
    for (let x = 0; x < stride; x++) {
      const left = x >= bpp ? row[x - bpp] : 0;
      const up = prev[x];
      const corner = x >= bpp ? prev[x - bpp] : 0;
      let add = 0;
      if (filter === 1) add = left;
      else if (filter === 2) add = up;
      else if (filter === 3) add = left + up >> 1;
      else if (filter === 4) {
        const e = left + up - corner;
        const a = Math.abs(e - left);
        const b = Math.abs(e - up);
        const c2 = Math.abs(e - corner);
        add = a <= b && a <= c2 ? left : b <= c2 ? up : corner;
      }
      row[x] = raw[at + 1 + x] + add & 255;
    }
    const alphaAt = bpp - depth / 8;
    for (let x = alphaAt; x < stride; x += bpp) if (row[x] < 250) clear++;
    prev = row;
  }
  return clear;
}
var SOURCE_EXTS = [".swift", ".m", ".mm", ".h", ".c", ".cpp"];
var NON_APP_TARGET = /(Tests?|UITests|Extension|Widget|Watch|Intents|Clip|NotificationService|Share|Keyboard)(\b|\/|$)/i;
function parseIosProject(root, iosDir, framework, opts = {}) {
  const notAudited = [];
  const pbxPath = findPbxproj(iosDir);
  const pbx = pbxPath ? readText(pbxPath) : void 0;
  if (!pbx) notAudited.push("No .xcodeproj found: build settings (bundle id, generated Info.plist keys) were not read.");
  const platform = opts.as ?? (pbx?.match(/SDKROOT = (\w+);/)?.[1] === "macosx" ? "macos" : "ios");
  const mainTarget = pbx ? mainAppTarget(pbx, iosDir, platform, opts.distribution) : void 0;
  const skip = pbx && mainTarget ? outOfScope(pbx, iosDir, platform) : () => false;
  const inScope = (abs) => !skip(rel(iosDir, abs));
  const plists = walk(iosDir, { exts: ["Info.plist"] }).filter((p) => basename3(p) === "Info.plist");
  const appPlists = plists.filter((p) => !NON_APP_TARGET.test(rel(iosDir, p)));
  const declared = mainTarget?.resolve(mainTarget.settings.INFOPLIST_FILE)?.replace(/^\$[({](?:SRCROOT|PROJECT_DIR)[)}]\/?/, "").replace(/^\.\//, "");
  const declaredAbs = declared && !/\$[({]/.test(declared) ? join9(iosDir, declared) : void 0;
  const chosen = declaredAbs && exists(declaredAbs) ? declaredAbs : mainTarget && !declared && mainTarget.settings.GENERATE_INFOPLIST_FILE ? void 0 : pickMainPlist(appPlists.length ? appPlists : plists);
  let infoPlist = {};
  const infoPlistKeyEvidence = {};
  if (chosen) {
    const raw = readText(chosen);
    infoPlist = raw && parsePlist(Buffer.from(raw)) || {};
    for (const key of Object.keys(infoPlist)) {
      const line = raw ? plistKeyLine(raw, key) : void 0;
      infoPlistKeyEvidence[key] = { file: rel(root, chosen), line };
    }
  }
  const target = mainTarget ?? (pbx ? mainTargetSettings(pbx, iosDir, chosen ? rel(iosDir, chosen) : void 0) : void 0);
  if (target) {
    for (const [k, v] of Object.entries(target.settings)) {
      const cond = k.match(/^INFOPLIST_KEY_(\w+)(?:\[sdk=(iphone(?:os|simulator)|macosx)[^\]]*\])?$/);
      const key = cond && (!cond[2] || cond[2] === (platform === "macos" ? "macosx" : "iphoneos")) ? cond[1] : void 0;
      if (key && !(key in infoPlist)) {
        infoPlist[key] = target.resolve(v) ?? v;
        const idx = pbx.indexOf(k);
        infoPlistKeyEvidence[key] = { file: rel(root, pbxPath), line: idx >= 0 ? lineOf(pbx, idx) : void 0 };
      }
    }
  }
  const pick = (plistVal, setting) => {
    const v = str2(plistVal);
    const resolved = target?.resolve(v && v.includes("$") ? v : v ?? target.settings[setting]);
    const out = resolved && !resolved.includes("$") ? resolved : target?.resolve(target.settings[setting]);
    return out && !/\$[({]/.test(out) ? out : v && !v.includes("$") ? v : void 0;
  };
  const bundleId = pick(infoPlist.CFBundleIdentifier, "PRODUCT_BUNDLE_IDENTIFIER");
  const version2 = pick(infoPlist.CFBundleShortVersionString, "MARKETING_VERSION");
  if (!bundleId) notAudited.push("Bundle identifier could not be resolved (it may come from an xcconfig file that isn't in the repo).");
  const syncedGroups = !!pbx?.includes("PBXFileSystemSynchronizedRootGroup");
  const privacyManifests = walk(iosDir, { exts: [".xcprivacy"] }).filter((p) => !NON_APP_TARGET.test(rel(iosDir, p)) && inScope(p)).map((p) => {
    const raw = readText(p) ?? "";
    const data = parsePlist(Buffer.from(raw)) ?? {};
    const inBuild = !pbx ? void 0 : syncedGroups || pbx.includes(basename3(p));
    return { path: rel(root, p), owner: "app", data, inBuild };
  });
  let entitlements = {};
  for (const e of walk(iosDir, { exts: [".entitlements"] }).filter((p) => !NON_APP_TARGET.test(rel(iosDir, p)))) {
    const raw = readText(e);
    entitlements = { ...entitlements, ...raw && parsePlist(Buffer.from(raw)) || {} };
  }
  const linkedSdks = detectIosSdks(root, iosDir);
  for (const sdk of linkedSdks) {
    if (sdk.via !== "pod" || !sdk.filesAvailable || !sdk.hasPrivacyManifest) continue;
    for (const p of walk(join9(iosDir, "Pods", sdk.name), { exts: [".xcprivacy"], skipDirs: /* @__PURE__ */ new Set() })) {
      const data = parsePlist(Buffer.from(readText(p) ?? "")) ?? {};
      privacyManifests.push({ path: rel(root, p), owner: sdk.name, data, inBuild: true });
    }
  }
  const sources = walk(iosDir, { exts: SOURCE_EXTS }).filter(inScope);
  const usesProtectedResources = scanSources(root, sources, IOS_PROTECTED_RESOURCES.map((r) => ({ key: r.id, patterns: r.patterns })));
  const uiWebView = scanSources(root, sources.filter((f) => !/\/Pods\//.test(f)), [{ key: "UIWebView", patterns: [/\bUIWebView\s*\(|:\s*UIWebView\b|\bUIWebView\s*\*|\[UIWebView\b/] }]).map((u) => u.evidence);
  const usesRequiredReasonApis = scanSources(root, sources, REQUIRED_REASON_CATEGORIES.map((c2) => ({ key: c2.key, patterns: c2.patterns })));
  for (const sdk of linkedSdks) {
    const sig = findSignatureByPub(sdk.name) ?? findSignatureByNpm(sdk.name);
    for (const r of sig?.impliesResources ?? []) {
      if (!usesProtectedResources.some((u) => u.key === r)) {
        usesProtectedResources.push({ key: r, symbol: sdk.name, origin: "sdk", evidence: { ...sdk.evidence, detail: `${sdk.name} requests ${r} access` } });
      }
    }
  }
  const code = collectAppCode(root, framework, { iosDir });
  const texts = readSources(root, code.files.filter((f) => !f.startsWith(iosDir) || inScope(f)));
  const crossTexts = texts.filter((t) => /\.(dart|[jt]sx?|mjs)$/.test(t.file));
  if (crossTexts.length) {
    for (const u of scanPatterns(crossTexts, Object.entries(IOS_RESOURCE_HINTS).map(([key, h]) => ({ key, patterns: h.crossPatterns })), "plugin")) {
      if (usesProtectedResources.some((x) => x.key === u.key && x.origin !== "sdk")) continue;
      for (let i = usesProtectedResources.length - 1; i >= 0; i--) if (usesProtectedResources[i].key === u.key) usesProtectedResources.splice(i, 1);
      usesProtectedResources.push(u);
    }
  }
  const projectDir = framework === "native" ? iosDir : dirname2(iosDir);
  const allDeps = [...linkedSdks, ...framework === "native" ? [] : crossPlatformDeps(root, projectDir).filter((d) => !linkedSdks.some((l) => l.name === d.name))];
  const signals = scanSignals(texts, allDeps, { searched: code.searched, entitlements });
  if ((framework === "flutter" || framework === "react-native" || framework === "expo") && !crossTexts.length) {
    notAudited.push(`No ${framework === "flutter" ? "Dart (lib/)" : "JavaScript/TypeScript"} app code was found; plugin permissions are inferred from dependencies only.`);
  }
  if (!sources.length && framework === "native") notAudited.push("No Swift/Objective-C source files found to scan.");
  const sdkroot = target?.settings.SDKROOT ?? pbx?.match(/SDKROOT = (\w+);/)?.[1];
  const isMac = opts.as ? opts.as === "macos" : sdkroot === "macosx";
  const mac = isMac && pbx && pbxPath ? macProjectFacts({ root, iosDir, pbx, pbxPath, bundleId, infoPlist, infoPlistPath: chosen ? rel(root, chosen) : void 0, linkedSdks, texts, distribution: opts.distribution }) : void 0;
  if (mac) entitlements = mac.entitlements;
  if (mac?.macos.distribution === "direct") notAudited.push(DIRECT_PROJECT_NOTE);
  const hint = mac ? looksDirect(mac.macos) : void 0;
  if (hint) notAudited.unshift(hint);
  if (mac?.macos.catalyst) notAudited.push("This is the Mac Catalyst build of an iPad app target; Mac App Store rules were run on its Mac settings (`[sdk=macosx*]` overrides).");
  return {
    platform: isMac ? "macos" : "ios",
    macos: mac?.macos,
    inputKind: "xcode-project",
    framework,
    frameworkEvidence: frameworkEvidenceFor(root, framework),
    signals,
    root,
    bundleId,
    version: version2,
    notAudited,
    listing: readAppleListing(root, [iosDir, root]),
    reviewInfo: readAppleReviewInfo(root, [iosDir, root]),
    ios: {
      infoPlist,
      infoPlistPath: chosen ? rel(root, chosen) : void 0,
      allDependencies: allDeps.map((d) => d.name),
      infoPlistKeyEvidence,
      privacyManifests,
      linkedSdks,
      entitlements,
      usesRequiredReasonApis,
      usesProtectedResources,
      pbxprojText: pbx,
      uiWebView,
      deviceFamily: isMac ? void 0 : deviceFamily(target),
      appIcon: isMac || framework === "expo" ? void 0 : appIcon(root, iosDir, target?.resolve(target.settings.ASSETCATALOG_COMPILER_APPICON_NAME), inScope)
    }
  };
}
function deviceFamily(target) {
  if (!target) return void 0;
  const sdk = target.resolve(target.settings.SDKROOT) ?? "";
  if (/tvos|watchos|xros|macosx/.test(sdk)) return void 0;
  const raw = target.resolve(target.settings.TARGETED_DEVICE_FAMILY);
  const list2 = raw?.replace(/"/g, "").split(",").map((x) => Number(x.trim())).filter((n) => n > 0);
  return list2?.length ? list2 : void 0;
}
function appIcon(root, iosDir, setName, inScope) {
  const name = setName && !/\$[({]/.test(setName) ? setName.replace(/"/g, "") : "AppIcon";
  const sets = walk(iosDir, { exts: ["Contents.json"], assets: true }).filter((p) => p.endsWith(`/${name}.appiconset/Contents.json`) && inScope(p) && !NON_APP_TARGET.test(rel(iosDir, p)));
  if (sets.length !== 1) return void 0;
  if (walk(iosDir, { exts: ["icon.json"] }).some((p) => p.endsWith(`/${name}.icon/icon.json`))) return void 0;
  let json;
  try {
    json = JSON.parse(readText(sets[0]) ?? "");
  } catch {
    return void 0;
  }
  const store = (json.images ?? []).filter((i) => i.size === "1024x1024" && !i.appearances && (i.idiom === "ios-marketing" || i.idiom === "universal" && i.platform === "ios"));
  if (!store.length) return (json.images ?? []).some((i) => i.idiom === "iphone" || i.idiom === "ipad" || i.platform === "ios") ? { name, problem: "missing", evidence: { file: rel(root, sets[0]), detail: "no 1024x1024 slot" } } : void 0;
  const file = store.find((i) => i.filename)?.filename;
  if (!file) return { name, problem: "missing", evidence: { file: rel(root, sets[0]), detail: "the 1024x1024 slot has no image" } };
  const path = join9(dirname2(sets[0]), file);
  if (!exists(path)) return void 0;
  const head = readFileSync6(path);
  if (head.length < 33 || head.readUInt32BE(0) !== 2303741511) return void 0;
  const w = head.readUInt32BE(16);
  const h = head.readUInt32BE(20);
  const evidence = { file: rel(root, path) };
  if (w !== 1024 || h !== 1024) return { name, problem: "size", size: `${w}\xD7${h}`, evidence: { ...evidence, detail: `${w}\xD7${h}` } };
  const clear = transparentPixels(head);
  return clear ? { name, problem: "alpha", evidence: { ...evidence, detail: `${clear} see-through pixels` } } : void 0;
}
function findPbxproj(dir) {
  const candidates = [];
  for (const name of safeList2(dir)) {
    if (name.endsWith(".xcodeproj") && name !== "Pods.xcodeproj") {
      const p = join9(dir, name, "project.pbxproj");
      if (exists(p)) candidates.push(p);
    }
  }
  return candidates[0];
}
function pickMainPlist(plists) {
  const scored = plists.map((p) => {
    const raw = readText(p) ?? "";
    const isApp = /<key>CFBundlePackageType<\/key>\s*<string>(APPL|\$\(PRODUCT_BUNDLE_PACKAGE_TYPE\))<\/string>/.test(raw);
    const hasUsage = /UsageDescription<\/key>/.test(raw);
    return { p, score: (isApp ? 10 : 0) + (hasUsage ? 5 : 0) - p.split("/").length * 0.1 };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.p;
}
function str2(v) {
  return typeof v === "string" ? v : void 0;
}
function safeList2(d) {
  try {
    return readdirSync4(d);
  } catch {
    return [];
  }
}
function detectIosSdks(root, iosDir) {
  const sdks = [];
  const seen = /* @__PURE__ */ new Set();
  const add = (s) => {
    const k = `${s.via}:${s.name.toLowerCase()}`;
    if (seen.has(k)) return;
    seen.add(k);
    sdks.push(s);
  };
  const podLock = join9(iosDir, "Podfile.lock");
  const podsDir = join9(iosDir, "Pods");
  const lockText = readText(podLock);
  if (lockText) {
    const podsSection = lockText.split(/\n(?=[A-Z ]+:\n)/)[0] ?? "";
    const re = /^\s{2}- "?([^\s("]+)\s+\(([^)]+)\)/gm;
    let m;
    const rootNames = /* @__PURE__ */ new Map();
    while (m = re.exec(podsSection)) {
      const rootName = m[1].split("/")[0];
      if (!rootNames.has(rootName)) rootNames.set(rootName, m[2]);
    }
    for (const [name, version2] of rootNames) {
      const podDir = join9(podsDir, name);
      const filesAvailable = exists(podDir) && isDir2(podDir);
      add({
        id: findSignatureByPod(name)?.id ?? name,
        name,
        via: "pod",
        version: version2,
        evidence: { file: rel(root, podLock), line: lineOf(lockText, lockText.indexOf(`- ${name} (`)), detail: `${name} (${version2})` },
        filesAvailable,
        hasPrivacyManifest: filesAvailable ? walk(podDir, { exts: [".xcprivacy"], skipDirs: /* @__PURE__ */ new Set() }).length > 0 : void 0
      });
    }
  }
  for (const resolved of findPackageResolved(iosDir)) {
    const text = readText(resolved);
    if (!text) continue;
    try {
      const json = JSON.parse(text);
      const pins = json.pins ?? json.object?.pins ?? [];
      for (const pin of pins) {
        const identity = pin.identity ?? pin.package ?? "";
        if (!identity) continue;
        const version2 = pin.state?.version ?? void 0;
        add({
          id: findSignatureBySpm(identity)?.id ?? identity,
          name: identity,
          via: "spm",
          version: version2,
          evidence: { file: rel(root, resolved), line: lineOf(text, Math.max(0, text.indexOf(`"${identity}"`))), detail: `${identity}${version2 ? ` (${version2})` : ""}` },
          filesAvailable: false
        });
      }
    } catch {
    }
  }
  const pkgJson = join9(dirname2(iosDir), "package.json");
  const pkgText = iosDir !== root || exists(pkgJson) ? readText(pkgJson) : void 0;
  if (pkgText) {
    try {
      const pkg = JSON.parse(pkgText);
      for (const [name, version2] of Object.entries(pkg.dependencies ?? {})) {
        const sig = findSignatureByNpm(name);
        if (!sig && name !== "react-native") continue;
        add({ id: sig?.id ?? name, name, via: "npm", version: version2, evidence: { file: rel(root, pkgJson), detail: `${name}@${version2}` }, filesAvailable: false });
      }
    } catch {
    }
  }
  const pubLock = join9(dirname2(iosDir), "pubspec.lock");
  const pubText = readText(pubLock);
  if (pubText) {
    const re = /^ {2}([a-z0-9_]+):\n(?:\s{4}.*\n)*?\s{4}version: "([^"]+)"/gm;
    let m;
    while (m = re.exec(pubText)) {
      add({ id: findSignatureByPub(m[1])?.id ?? m[1], name: m[1], via: "pub", version: m[2], evidence: { file: rel(root, pubLock), line: lineOf(pubText, m.index), detail: `${m[1]} (${m[2]})` }, filesAvailable: false });
    }
    add({ id: "Flutter", name: "Flutter", via: "pub", evidence: { file: rel(root, pubLock), detail: "Flutter engine" }, filesAvailable: false });
  }
  return sdks;
}
function findPackageResolved(iosDir) {
  const out = [];
  const direct = join9(iosDir, "Package.resolved");
  if (exists(direct)) out.push(direct);
  for (const name of safeList2(iosDir)) {
    if (name.endsWith(".xcworkspace")) {
      const p = join9(iosDir, name, "xcshareddata", "swiftpm", "Package.resolved");
      if (exists(p)) out.push(p);
    }
    if (name.endsWith(".xcodeproj")) {
      const p = join9(iosDir, name, "project.xcworkspace", "xcshareddata", "swiftpm", "Package.resolved");
      if (exists(p)) out.push(p);
    }
  }
  return out;
}
function isDir2(p) {
  try {
    return statSync3(p).isDirectory();
  } catch {
    return false;
  }
}
function frameworkEvidenceFor(root, framework) {
  if (framework === "flutter") return { file: "pubspec.yaml", detail: "Flutter project (pubspec.yaml)" };
  if (framework === "react-native") return { file: "package.json", detail: "react-native dependency" };
  if (framework === "expo") return { file: exists(join9(root, "app.json")) ? "app.json" : "package.json", detail: "Expo project" };
  return void 0;
}
function minLoadAlignment(b) {
  if (b.length < 64 || b.readUInt32BE(0) !== 2135247942) return void 0;
  const is64 = b[4] === 2;
  const le = b[5] === 1;
  const u16 = (o) => le ? b.readUInt16LE(o) : b.readUInt16BE(o);
  const u32 = (o) => le ? b.readUInt32LE(o) : b.readUInt32BE(o);
  const u64 = (o) => Number(le ? b.readBigUInt64LE(o) : b.readBigUInt64BE(o));
  const phoff = is64 ? u64(32) : u32(28);
  const phentsize = u16(is64 ? 54 : 42);
  const phnum = u16(is64 ? 56 : 44);
  let min;
  for (let i = 0; i < phnum; i++) {
    const ph = phoff + i * phentsize;
    if (ph + phentsize > b.length) break;
    const pType = u32(ph);
    if (pType !== 1) continue;
    const align = is64 ? u64(ph + 48) : u32(ph + 28);
    if (min === void 0 || align < min) min = align;
  }
  return min;
}
var FGS_TYPE_FLAGS = {
  dataSync: 1,
  mediaPlayback: 2,
  phoneCall: 4,
  location: 8,
  connectedDevice: 16,
  mediaProjection: 32,
  camera: 64,
  microphone: 128,
  health: 256,
  remoteMessaging: 512,
  systemExempted: 1024,
  shortService: 2048,
  fileManagement: 4096,
  mediaProcessing: 8192,
  specialUse: 1073741824
};
function decodeFgsTypes(v) {
  if (v === void 0 || v === false) return void 0;
  if (typeof v === "number") {
    if (v === 0) return [];
    return Object.entries(FGS_TYPE_FLAGS).filter(([, f]) => (v & f) === f).map(([n]) => n);
  }
  return String(v).split("|").map((s) => s.trim()).filter(Boolean);
}
function manifestFromTree(root) {
  const manifest = root.tag === "manifest" ? root : root.children.find((c2) => c2.tag === "manifest");
  const facts = { permissions: [], features: [], services: [], metaData: {}, launcherCategories: [] };
  if (!manifest) return facts;
  const a = (n, k) => n.attrs[k] ?? n.attrs[`android:${k}`];
  facts.packageName = str3(manifest.attrs.package);
  facts.versionName = str3(a(manifest, "versionName"));
  const visit = (n, inApp) => {
    if (/^(?:activity|activity-alias|service|receiver)$/.test(n.tag) && inApp && n.attrs["tools:node"] !== "remove") {
      const name = str3(a(n, "name")) ?? n.tag;
      if (a(n, "exported") === void 0 && n.children.some((c2) => c2.tag === "intent-filter")) (facts.missingExported ??= []).push(name);
      const bound = str3(a(n, "permission"));
      if (n.tag === "service" && bound && /\.BIND_(?:ACCESSIBILITY|VPN)_SERVICE$/.test(bound)) (facts.boundServices ??= []).push({ name, permission: bound });
    }
    switch (n.tag) {
      case "application": {
        const d = a(n, "debuggable");
        if (d === true || d === "true") facts.debuggable = true;
        break;
      }
      case "uses-sdk": {
        facts.usesSdk = { minSdk: num(a(n, "minSdkVersion")), targetSdk: num(a(n, "targetSdkVersion")) };
        break;
      }
      case "uses-permission":
      case "uses-permission-sdk-23": {
        const name = str3(a(n, "name"));
        if (name && !facts.permissions.includes(name)) facts.permissions.push(name);
        break;
      }
      case "uses-feature": {
        const name = str3(a(n, "name"));
        const req = a(n, "required");
        if (name) facts.features.push({ name, required: !(req === false || req === "false") });
        break;
      }
      case "service": {
        const name = str3(a(n, "name")) ?? "";
        const raw = a(n, "foregroundServiceType");
        facts.services.push({ name, foregroundServiceTypes: decodeFgsTypes(raw), rawTypeMissing: raw === void 0 });
        break;
      }
      case "meta-data": {
        const name = str3(a(n, "name"));
        const value = a(n, "value");
        if (name && inApp && value !== void 0) facts.metaData[name] = String(value);
        break;
      }
      case "category": {
        const name = str3(a(n, "name"));
        if (name && /LAUNCHER/.test(name)) facts.launcherCategories.push(name);
        break;
      }
    }
    for (const c2 of n.children) visit(c2, inApp || n.tag === "application");
  };
  for (const c2 of manifest.children) visit(c2, false);
  return facts;
}
function parseManifestXml(text) {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "", preserveOrder: true, allowBooleanAttributes: true });
  const parsed = parser.parse(text);
  const convert = (obj) => {
    const tag = Object.keys(obj).find((k) => k !== ":@");
    if (!tag || tag === "#text" || tag === "?xml" || tag === "#comment") return void 0;
    const attrs = {};
    for (const [k, v] of Object.entries(obj[":@"] ?? {})) attrs[k] = String(v);
    const children22 = obj[tag].map(convert).filter(Boolean);
    return { tag, attrs, children: children22 };
  };
  const children2 = parsed.map(convert).filter(Boolean);
  return { tag: "#document", attrs: {}, children: children2 };
}
function formFactorOf(m) {
  const has = (n) => m.features.some((f) => f.name === n && f.required);
  if (has("android.hardware.type.watch")) return "wear";
  if (has("android.hardware.type.automotive")) return "auto";
  if (has("android.software.leanback") || m.launcherCategories.includes("android.intent.category.LEANBACK_LAUNCHER") && !m.launcherCategories.includes("android.intent.category.LAUNCHER")) return "tv";
  if (m.features.some((f) => f.required && /^android\.software\.xr\./.test(f.name))) return "xr";
  return "phone";
}
function locateManifestLines(facts, text, file) {
  const lineOfName = (name) => {
    const idx = text.indexOf(`android:name="${name}"`);
    return idx < 0 ? void 0 : text.slice(0, idx).split("\n").length;
  };
  facts.permissionEvidence ??= {};
  for (const p of facts.permissions) {
    if (facts.permissionEvidence[p]) continue;
    const line = lineOfName(p);
    if (line) facts.permissionEvidence[p] = { file, line, detail: p };
  }
  for (const s of facts.services) {
    if (s.manifestFile === file && s.line === void 0) s.line = lineOfName(s.name);
  }
}
function str3(v) {
  return v === void 0 || v === null ? void 0 : String(v);
}
function num(v) {
  if (v === void 0) return void 0;
  const n = typeof v === "number" ? v : parseInt(String(v), 10);
  return Number.isFinite(n) ? n : void 0;
}
var P = (n) => `android.permission.${n}`;
var ANDROID_PERMISSION_USES = [
  {
    permissions: [P("CAMERA")],
    label: "camera",
    patterns: [/\bCameraManager\b/, /\bCamera2\w*/, /\bandroidx\.camera\b/, /\bProcessCameraProvider\b/, /\bCameraX\b/, /\bandroid\.hardware\.Camera\b/, /\bCamera\.open\s*\(/, /\bMediaStore\.ACTION_(?:IMAGE|VIDEO)_CAPTURE\b/, /\bBarcodeScanning\b/, /\bCameraView\b/],
    crossPatterns: [/\bCameraController\s*\(/, /\bImageSource\.camera\b/, /\bavailableCameras\s*\(/, /\bMobileScanner\b/, /\buseCameraPermission\b/, /\brequestCameraPermission\w*\s*\(/, /\blaunchCamera(?:Async)?\s*\(/, /<Camera(?:View)?\b/, /\bPermission\.camera\b/],
    depHint: /camera|scanner|barcode|qr|vision|mlkit|zxing|image_?picker|image-?picker|document-?scanner/i
  },
  {
    permissions: [P("RECORD_AUDIO")],
    label: "microphone",
    patterns: [/\bAudioRecord\b/, /\bMediaRecorder\b/, /\bSpeechRecognizer\b/, /\bRecognizerIntent\b/, /\bsetAudioSource\b/],
    crossPatterns: [/\bAudioRecorder\s*\(/, /\bFlutterSoundRecorder\b/, /\bspeech_to_text\b/, /\bSpeechToText\s*\(/, /\bAudio\.Recording\b/, /\brequestRecordingPermissionsAsync\b/, /\bVoice\.start\s*\(/, /\bPermission\.microphone\b/, /\brecordAsync\s*\(/],
    depHint: /audio|record|voice|speech|microphone|\bmic\b|webrtc|agora|twilio|zoom|livekit|sound|video|call/i
  },
  {
    permissions: [P("ACCESS_FINE_LOCATION"), P("ACCESS_COARSE_LOCATION"), P("ACCESS_BACKGROUND_LOCATION")],
    label: "location",
    patterns: [/\bLocationManager\b/, /\bFusedLocationProviderClient\b/, /\bLocationServices\b/, /\brequestLocationUpdates\b/, /\bgetLastKnownLocation\b/, /\bGeofencingClient\b/, /\bisMyLocationEnabled\b/, /\bLocationRequest\b/],
    crossPatterns: [/\bGeolocator\s*\.\s*\w+/, /\bLocation\s*\(\s*\)\s*\.\s*\w+/, /\bgetCurrentPositionAsync\b/, /\bwatchPositionAsync\b/, /\brequestForegroundPermissionsAsync\b/, /\bGeolocation\s*\.\s*(?:getCurrentPosition|watchPosition)\b/, /\bnavigator\.geolocation\b/, /\bPermission\.location\w*\b/],
    depHint: /locat|geo|maps?\b|map[-_]|gps|places?\b|mapbox|here-?sdk|tracking/i
  },
  {
    permissions: [P("READ_CONTACTS"), P("WRITE_CONTACTS")],
    label: "contacts",
    patterns: [/\bContactsContract\b/],
    crossPatterns: [/\bFlutterContacts\b/, /\bContactsService\b/, /\bContacts\s*\.\s*(?:getAll|getContactsAsync|requestPermissionsAsync|addContact)\b/, /\bPermission\.contacts\b/],
    depHint: /contact|address-?book|phone-?book/i
  },
  {
    permissions: [P("READ_CALENDAR"), P("WRITE_CALENDAR")],
    label: "calendar",
    patterns: [/\bCalendarContract\b/],
    crossPatterns: [/\bDeviceCalendarPlugin\b/, /\bCalendar\s*\.\s*(?:getCalendarsAsync|createEventAsync|requestCalendarPermissionsAsync)\b/, /\bRNCalendarEvents\b/, /\bPermission\.calendar\w*\b/],
    depHint: /calendar|events?-?kit/i
  },
  {
    permissions: [P("BLUETOOTH_SCAN"), P("BLUETOOTH_CONNECT"), P("BLUETOOTH_ADVERTISE"), P("BLUETOOTH"), P("BLUETOOTH_ADMIN")],
    label: "Bluetooth",
    patterns: [/\bBluetoothAdapter\b/, /\bBluetoothManager\b/, /\bBluetoothLeScanner\b/, /\bBluetoothGatt\b/, /\bBluetoothDevice\b/, /\bCompanionDeviceManager\b/],
    crossPatterns: [/\bFlutterBluePlus\b/, /\bFlutterBlue\b/, /\bBleManager\b/, /\bFlutterReactiveBle\b/, /\bPermission\.bluetooth\w*\b/],
    depHint: /bluetooth|\bble\b|(?:^|[^a-z])ble[-_]|beacon|peripheral|nearby/i
  },
  {
    permissions: [P("BODY_SENSORS"), P("BODY_SENSORS_BACKGROUND")],
    label: "body sensors",
    patterns: [/\bTYPE_HEART_RATE\b/, /\bHealthServices\b/, /\bandroidx\.health\b/],
    crossPatterns: [/\bPermission\.sensors\w*\b/, /\bHealth\s*\(\s*\)/, /\bHealthFactory\b/],
    depHint: /health|heart|sensor|fitness|wear/i
  },
  {
    permissions: [P("ACTIVITY_RECOGNITION")],
    label: "physical activity",
    patterns: [/\bActivityRecognition\b/, /\bTYPE_STEP_COUNTER\b/, /\bTYPE_STEP_DETECTOR\b/, /\bandroidx\.health\b/],
    crossPatterns: [/\bPedometer\b/, /\bPermission\.activityRecognition\b/, /\bActivityRecognition\b/],
    depHint: /pedometer|activity-?recognition|step-?count|fitness|health|motion/i
  },
  {
    permissions: [P("READ_PHONE_STATE"), P("READ_PHONE_NUMBERS"), P("CALL_PHONE"), P("ANSWER_PHONE_CALLS")],
    label: "phone",
    patterns: [/\bTelephonyManager\b/, /\bACTION_CALL\b/, /\bTelecomManager\b/, /\bSubscriptionManager\b/, /\bPhoneStateListener\b/, /\bTelephonyCallback\b/],
    crossPatterns: [/\bPermission\.phone\b/, /\bFlutterPhoneDirectCaller\b/, /\bRNCallKeep\b/],
    depHint: /phone|telephony|\bsim\b|voip|callkeep|call-?log/i
  },
  {
    permissions: [P("SEND_SMS"), P("READ_SMS"), P("RECEIVE_SMS")],
    label: "SMS",
    patterns: [/\bSmsManager\b/, /\bTelephony\.Sms\b/, /\bSMS_RECEIVED\b/, /\bSmsRetriever\b/],
    crossPatterns: [/\bPermission\.sms\b/, /\bTelephony\.instance\b/],
    depHint: /sms|otp|telephony/i
  },
  {
    permissions: [P("READ_CALL_LOG"), P("WRITE_CALL_LOG")],
    label: "call log",
    patterns: [/\bCallLog\b/],
    crossPatterns: [/\bCallLog\s*\.\s*(?:get|query)\b/],
    depHint: /call-?log/i
  },
  {
    permissions: [P("READ_MEDIA_IMAGES"), P("READ_MEDIA_VIDEO"), P("READ_MEDIA_VISUAL_USER_SELECTED"), P("READ_EXTERNAL_STORAGE")],
    label: "photos and videos",
    patterns: [/\bMediaStore\.(?:Images|Video|Files)\b/, /\bACTION_PICK\b/, /\bACTION_GET_CONTENT\b/, /\bEXTERNAL_CONTENT_URI\b/, /\bEnvironment\.getExternalStorage\w*\b/],
    crossPatterns: [/\bPhotoManager\b/, /\bImageSource\.gallery\b/, /\bpickImage\s*\(/, /\bpickMultiImage\s*\(/, /\blaunchImageLibrary(?:Async)?\s*\(/, /\bMediaLibrary\s*\.\s*\w+/, /\bCameraRoll\b/, /\bFilePicker\b/, /\bPermission\.(?:photos|storage|videos)\b/],
    depHint: /photo|image|gallery|media|picker|file|storage|video|camera-?roll/i
  },
  {
    permissions: [P("READ_MEDIA_AUDIO")],
    label: "audio files",
    patterns: [/\bMediaStore\.Audio\b/],
    crossPatterns: [/\bOnAudioQuery\b/, /\bPermission\.audio\b/, /\bMediaLibrary\s*\.\s*getAssetsAsync\b/],
    depHint: /audio|music|media|player|song/i
  },
  {
    permissions: [P("NEARBY_WIFI_DEVICES")],
    label: "nearby Wi-Fi devices",
    patterns: [/\bWifiManager\b/, /\bWifiP2pManager\b/, /\bWifiAwareManager\b/],
    crossPatterns: [/\bPermission\.nearbyWifiDevices\b/, /\bWiFiForIoTPlugin\b/, /\bNetworkInfo\s*\(\s*\)\s*\.\s*getWifi\w*/],
    depHint: /wifi|wi-fi|network_info|nearby|p2p|iot/i
  },
  {
    permissions: [P("POST_NOTIFICATIONS")],
    label: "notifications",
    patterns: [/\bNotificationManager\w*\b/, /\bNotificationCompat\b/, /\bFirebaseMessagingService\b/],
    crossPatterns: [/\bFlutterLocalNotificationsPlugin\b/, /\bFirebaseMessaging\b/, /\bNotifications\s*\.\s*\w+/, /\bnotifee\b/, /\bPushNotification\w*\b/, /\bPermission\.notification\b/, /\bmessaging\s*\(\s*\)\s*\.\s*requestPermission\b/],
    depHint: /notif|messaging|push|onesignal|fcm|firebase-messaging|firebase_messaging|braze|airship|clevertap|alarm|reminder/i
  }
];
var ANDROID_PERMISSION_USE_BY_NAME = new Map(
  ANDROID_PERMISSION_USES.flatMap((u) => u.permissions.map((p) => [p, u]))
);
function requestsByName(text, permission) {
  const short = permission.replace("android.permission.", "");
  return text.match(new RegExp(`Manifest\\.permission\\.${short}\\b|["']android\\.permission\\.${short}["']|PermissionsAndroid\\.PERMISSIONS\\.${short}\\b|PERMISSIONS\\.ANDROID\\.${short}\\b`));
}
function parseAndroidProject(root, androidDir, framework, moduleDirArg) {
  const notAudited = [];
  const moduleDir = moduleDirArg ?? findAppModules(androidDir)[0];
  if (!moduleDir) throw new Error(`No Android application module (com.android.application) found in ${androidDir}`);
  const gradleFile = ["build.gradle.kts", "build.gradle"].map((f) => join10(moduleDir, f)).find(exists);
  const segments = withAppliedScripts(gradleFile, moduleDir);
  const gradle = segments.map((x) => x.text).join("\n");
  const where = (index) => {
    if (index === void 0) return { file: rel(root, gradleFile) };
    let seg = segments[0];
    for (const x of segments) if (x.offset <= index) seg = x;
    return { file: rel(root, seg.file), line: lineOf(seg.text, index - seg.offset) };
  };
  const catalog = readCatalog(androidDir);
  const props = readGradleProps(androidDir);
  const rootGradle = ["build.gradle.kts", "build.gradle"].map((f) => readText(join10(androidDir, f))).find(Boolean) ?? "";
  const manifestPath = join10(moduleDir, "src", "main", "AndroidManifest.xml");
  const manifestText = readText(manifestPath);
  const manifest = manifestText ? manifestFromTree(parseManifestXml(manifestText)) : { permissions: [], features: [], services: [], metaData: {}, launcherCategories: [] };
  if (!manifestText) notAudited.push("No src/main/AndroidManifest.xml found in the app module.");
  for (const s of manifest.services) s.manifestFile = rel(root, manifestPath);
  if (manifestText) locateManifestLines(manifest, manifestText, rel(root, manifestPath));
  const localModules = collectLocalModules(gradle, androidDir);
  const moduleSegments = [];
  for (const mod of localModules) {
    const libManifestPath = join10(mod, "src", "main", "AndroidManifest.xml");
    const libText = readText(libManifestPath);
    if (libText) {
      const lib = manifestFromTree(parseManifestXml(libText));
      const libRel = rel(root, libManifestPath);
      for (const s of lib.services) s.manifestFile = libRel;
      locateManifestLines(lib, libText, libRel);
      manifest.permissionEvidence = { ...lib.permissionEvidence, ...manifest.permissionEvidence };
      for (const p of lib.permissions) if (!manifest.permissions.includes(p)) manifest.permissions.push(p);
      for (const s of lib.services) manifest.services.push(s);
      manifest.features.push(...lib.features);
      manifest.metaData = { ...lib.metaData, ...manifest.metaData };
    }
    const g = ["build.gradle.kts", "build.gradle"].map((f) => join10(mod, f)).find(exists);
    if (g) moduleSegments.push({ file: g, text: readText(g) ?? "", offset: 0 });
  }
  notAudited.push(
    localModules.length ? `Merged manifests from ${localModules.length} local module(s); manifests from external SDKs are only visible in a built APK.` : "Manifests from external SDKs aren't merged in a source scan; scan the built APK for the full merged manifest."
  );
  const target = resolveSdkLevel(gradle, "targetSdk", catalog, props, rootGradle);
  const min = resolveSdkLevel(gradle, "minSdk", catalog, props, rootGradle);
  const convention = target.value === void 0 && !target.raw ? conventionSdkLevel(androidDir, "targetSdk", catalog) : void 0;
  const flutterDefault = /^flutter\./.test(target.raw ?? "") ? flutterSdkLevel(androidDir, "targetSdk") : void 0;
  let targetSdk = target.value ?? convention?.value ?? flutterDefault ?? manifest.usesSdk?.targetSdk;
  let targetSdkSource = convention ? { file: rel(root, convention.file), line: convention.line, detail: `targetSdk ${convention.value}` } : target.value || flutterDefault ? { ...where(target.index), detail: flutterDefault ? `${target.raw} (${flutterDefault} in the installed Flutter SDK)` : target.raw } : manifest.usesSdk?.targetSdk ? { file: rel(root, manifestPath), detail: "uses-sdk targetSdkVersion" } : void 0;
  if (targetSdk === void 0) {
    notAudited.push(
      target.raw ? `targetSdk is set indirectly (${target.raw}) and could not be resolved. Scan the built APK to check it.` : "targetSdk could not be found in the app module build file."
    );
  }
  const deps = gradleDependencies(gradle, catalog).map((d) => ({ ...d, evidenceAt: where(d.index) }));
  for (const seg of moduleSegments) {
    for (const d of gradleDependencies(seg.text, catalog)) {
      if (!deps.some((x) => x.coord === d.coord)) deps.push({ ...d, evidenceAt: { file: rel(root, seg.file), line: d.line } });
    }
  }
  const linkedSdks = deps.map((d) => ({
    id: findSignatureByGradle(d.coord)?.id ?? d.coord,
    name: d.coord,
    via: "gradle",
    version: d.version,
    evidence: { ...d.evidenceAt, detail: `${d.coord}${d.version ? ":" + d.version : ""}` },
    filesAvailable: false
  }));
  linkedSdks.push(...crossPlatformSdks(root, root));
  const billing = deps.find((d) => d.coord === "com.android.billingclient:billing" || d.coord === "com.android.billingclient:billing-ktx");
  const sources = [moduleDir, ...localModules].flatMap((m) => walk(join10(m, "src"), { exts: [".kt", ".java"] })).filter((f) => !TEST_SRC.test(f));
  const startForegroundClasses = [];
  for (const f of sources) {
    const t = readText(f);
    if (t && /\bstartForeground\s*\(/.test(t)) startForegroundClasses.push(basename4(f).replace(/\.(kt|java)$/, ""));
  }
  const code = collectAppCode(root, framework, { androidSrcDirs: [moduleDir, ...localModules].map((m) => join10(m, "src")) });
  const texts = readSources(root, code.files);
  const crossDeps = framework === "native" ? [] : crossPlatformDeps(root, root);
  const allDeps = [...linkedSdks, ...crossDeps.filter((d) => !linkedSdks.some((l) => l.name === d.name))];
  const signals = scanSignals(texts, allDeps, { searched: code.searched });
  const permissionUsage = texts.length ? findPermissionUsage(manifest.permissions, texts, allDeps) : void 0;
  const nativeLibs = [];
  const jni = join10(moduleDir, "src", "main", "jniLibs");
  for (const so of exists(jni) ? walk(jni, { exts: [".so"], maxSize: 512 * 1024 * 1024 }) : []) {
    const abi = basename4(dirname3(so));
    let minAlign;
    try {
      minAlign = minLoadAlignment(readFileSync7(so));
    } catch {
    }
    nativeLibs.push({ path: rel(root, so), abi, minLoadAlign: minAlign });
  }
  return {
    platform: "android",
    inputKind: "android-project",
    framework,
    frameworkEvidence: frameworkEvidenceFor(root, framework),
    signals,
    root,
    module: rel(root, moduleDir) || void 0,
    bundleId: resolveApplicationId(gradle) ?? gradle.match(/\bnamespace\s*=?\s*["']([^"']+)["']/)?.[1] ?? manifest.packageName,
    version: (gradle.match(/versionName\s*=?\s*["']([^"']+)["']/) ?? [])[1] ?? manifest.versionName,
    notAudited,
    listing: [],
    android: {
      manifest,
      manifestPath: manifestText ? rel(root, manifestPath) : void 0,
      targetSdk,
      targetSdkSource,
      targetSdkFromFlutter: targetSdk === void 0 && /^flutter\./.test(target.raw ?? "") ? true : void 0,
      minSdk: min.value ?? manifest.usesSdk?.minSdk,
      formFactor: formFactorOf(manifest),
      permissions: manifest.permissions,
      linkedSdks,
      allDependencies: allDeps.map((d) => d.name),
      permissionUsage,
      playBillingVersion: billing?.version,
      playBillingEvidence: billing ? { ...billing.evidenceAt, detail: `${billing.coord}:${billing.version ?? "?"}` } : void 0,
      nativeLibs,
      startForegroundClasses,
      hasSource: sources.length > 0
    }
  };
}
var APP_PLUGIN = /(com\.android\.application|plugins\.android\.application|android\.application)/;
var BUILD_LOGIC = /^(?:buildSrc|build-?(?:logic|plugins?|conventions?|tools?)|gradle-?plugins?|convention(?:-plugins?)?|plugins?)$/i;
function isAppModule(dir) {
  if (BUILD_LOGIC.test(basename4(dir))) return false;
  for (const f of ["build.gradle.kts", "build.gradle"]) {
    const t = readText(join10(dir, f));
    if (!t) continue;
    for (const line of t.split("\n")) {
      if (APP_PLUGIN.test(line) && !/apply\s*\(?\s*false/.test(line) && !/^\s*\/\//.test(line)) return true;
    }
    if (/^\s*applicationId\s*(?:=|\(|\s)\s*["']/m.test(t) && /\bandroid\s*\{|\bandroidComponents\b/.test(t)) return true;
  }
  return false;
}
function findAppModules(androidDir) {
  if (isAppModule(androidDir)) return [androidDir];
  const dirs = /* @__PURE__ */ new Set();
  const settings = ["settings.gradle.kts", "settings.gradle"].map((f) => readText(join10(androidDir, f))).find(Boolean) ?? "";
  for (const m of settings.matchAll(/["']:([\w\-:.]+)["']/g)) dirs.add(join10(androidDir, ...m[1].split(":")));
  for (const name of safeList3(androidDir)) {
    if (!name.startsWith(".") && name !== "build" && name !== "gradle") dirs.add(join10(androidDir, name));
  }
  let apps = [...dirs].filter((d) => isDir3(d) && isAppModule(d));
  const real = apps.filter((d) => !/(?:^|[/_-])(?:demos?|samples?|examples?|playground|catalog|benchmarks?|\w*tests?)(?=$|[/_-])/i.test(rel(androidDir, d)));
  if (real.length) apps = real;
  apps.sort((a, b) => basename4(a) === "app" ? -1 : basename4(b) === "app" ? 1 : a.localeCompare(b));
  return apps;
}
function collectLocalModules(appGradle, androidDir) {
  const found = /* @__PURE__ */ new Set();
  const queue = [appGradle];
  while (queue.length && found.size < 300) {
    const text = queue.shift();
    for (const m of text.matchAll(/project\s*\(\s*(?:path\s*[:=]\s*)?["']:([\w\-:.]+)["']\s*\)/g)) {
      const dir = join10(androidDir, ...m[1].split(":"));
      if (found.has(dir) || !isDir3(dir)) continue;
      found.add(dir);
      const g = ["build.gradle.kts", "build.gradle"].map((f) => readText(join10(dir, f))).find(Boolean);
      if (g) queue.push(g);
    }
  }
  return [...found];
}
function withAppliedScripts(gradleFile, moduleDir) {
  const main2 = readText(gradleFile) ?? "";
  const segs = [{ file: gradleFile, text: main2, offset: 0 }];
  let offset = main2.length + 1;
  for (const m of main2.matchAll(/apply\s*\(?\s*from\s*[:=]\s*["']([^"']+\.gradle(?:\.kts)?)["']/g)) {
    const file = join10(moduleDir, m[1]);
    const text = readText(file);
    if (!text) continue;
    segs.push({ file, text, offset });
    offset += text.length + 1;
  }
  return segs;
}
function readCatalog(androidDir) {
  const out = { versions: {}, libraries: {} };
  const text = readText(join10(androidDir, "gradle", "libs.versions.toml"));
  if (!text) return out;
  let section = "";
  for (const rawLine of text.split("\n")) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;
    const sec = line.match(/^\[(\w+)\]$/);
    if (sec) {
      section = sec[1];
      continue;
    }
    const kv = line.match(/^([\w.-]+)\s*=\s*(.+)$/);
    if (!kv) continue;
    const key = kv[1];
    const val = kv[2].trim();
    if (section === "versions") {
      out.versions[key] = val.replace(/^["']|["']$/g, "");
    } else if (section === "libraries") {
      if (val.startsWith('"')) {
        const [g, a, v] = val.replace(/"/g, "").split(":");
        out.libraries[normAlias(key)] = { module: `${g}:${a}`, version: v };
      } else {
        const module = val.match(/module\s*=\s*"([^"]+)"/)?.[1] ?? (() => {
          const g = val.match(/group\s*=\s*"([^"]+)"/)?.[1];
          const n = val.match(/name\s*=\s*"([^"]+)"/)?.[1];
          return g && n ? `${g}:${n}` : void 0;
        })();
        const ref = val.match(/version\.ref\s*=\s*"([^"]+)"/)?.[1];
        const direct = val.match(/version\s*=\s*"([^"]+)"/)?.[1];
        if (module) out.libraries[normAlias(key)] = { module, version: ref ? out.versions[ref] : direct };
      }
    }
  }
  return out;
}
var normAlias = (k) => k.replace(/[-_]/g, ".").toLowerCase();
function readGradleProps(androidDir) {
  const out = {};
  const text = readText(join10(androidDir, "gradle.properties")) ?? "";
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.+?)\s*$/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}
function conventionSdkLevel(androidDir, name, catalog) {
  const files = safeList3(androidDir).filter((d) => BUILD_LOGIC.test(d) && isDir3(join10(androidDir, d))).flatMap((d) => walk(join10(androidDir, d), { exts: [".kt", ".kts", ".gradle", ".java"], skipDirs: /* @__PURE__ */ new Set(["build", ".gradle", ".git"]) }));
  const texts = files.map((f) => ({ file: f, text: readText(f) ?? "" }));
  const found = [];
  for (const { file, text } of texts) {
    if (/test|benchmark|baselineprofile|sample|lint/i.test(basename4(file))) continue;
    for (const m of text.matchAll(new RegExp(`\\b${name}(?:Version)?\\s*(?:=|\\(|\\.set\\()\\s*([^\\n)}]+)`, "g"))) {
      const raw = m[1].trim();
      let value = /^\d+$/.test(raw) ? +raw : void 0;
      const lib = raw.match(/libs\.versions\.([\w.]+?)\.get|findVersion\(\s*"([\w.-]+)"/);
      if (value === void 0 && lib) {
        const want = normAlias(lib[1] ?? lib[2]);
        const key = Object.keys(catalog.versions).find((k) => normAlias(k) === want);
        if (key) value = parseInt(catalog.versions[key], 10);
      }
      const ident = raw.match(/^(?:\w+\.)*([A-Za-z_]\w*)$/)?.[1];
      if (value === void 0 && ident) {
        const all = new Set(texts.flatMap((t) => [...t.text.matchAll(new RegExp(`\\b${ident}\\b\\s*(?::\\s*Int\\s*)?=\\s*(\\d+)\\b`, "g"))].map((x) => +x[1])));
        if (all.size === 1) value = [...all][0];
      }
      if (value !== void 0 && Number.isFinite(value)) found.push({ value, file, line: lineOf(text, m.index) });
    }
  }
  return new Set(found.map((f) => f.value)).size === 1 ? found[0] : void 0;
}
function flutterSdkLevel(androidRoot, name) {
  const local = readText(join10(androidRoot, "local.properties"));
  const sdk = local?.match(/^\s*flutter\.sdk\s*=\s*(.+?)\s*$/m)?.[1]?.replace(/\\(.)/g, "$1");
  if (!sdk) return void 0;
  const dir = join10(sdk, "packages", "flutter_tools", "gradle", "src", "main");
  for (const f of ["kotlin/FlutterExtension.kt", "groovy/FlutterExtension.groovy", "groovy/flutter.groovy"]) {
    const v = readText(join10(dir, f))?.match(new RegExp(`\\b${name}Version\\b\\s*(?::\\s*Int\\s*)?=\\s*(\\d+)`))?.[1];
    if (v) return +v;
  }
  return void 0;
}
function resolveSdkLevel(gradle, name, catalog, props, rootGradle) {
  const re = new RegExp(`\\b${name}(?:Version)?\\b\\s*(?:=|\\()?\\s*([^\\n]+)`, "g");
  let m;
  while (m = re.exec(gradle)) {
    const raw = m[1].trim().replace(/\s*\/\/.*$/, "").replace(/[;,]$/, "").replace(/^\((.*)\)$/, "$1");
    const line = lineOf(gradle, m.index);
    const index = m.index;
    if (/^flutter\./.test(raw)) return { raw, line, index };
    const direct = raw.match(/^(\d+)\)?$/);
    if (direct) return { value: +direct[1], raw, line, index };
    const cat = raw.match(/libs\.versions\.([\w.]+?)\.get\(\)/);
    if (cat) {
      const key = Object.keys(catalog.versions).find((k) => normAlias(k) === normAlias(cat[1]));
      const v = key ? parseInt(catalog.versions[key], 10) : NaN;
      if (Number.isFinite(v)) return { value: v, raw, line, index };
    }
    const ident = raw.match(/([A-Za-z_][\w]*)\W*$/)?.[1] ?? raw.match(/["']([\w.]+)["']/)?.[1];
    if (ident && !/^flutter$/.test(ident)) {
      if (props[ident] && /^\d+$/.test(props[ident])) return { value: +props[ident], raw, line, index };
      const ext = rootGradle.match(new RegExp(`\\b${ident}\\s*=\\s*(\\d+)`));
      if (ext) return { value: +ext[1], raw, line, index };
    }
    return { raw, line, index };
  }
  return {};
}
function resolveApplicationId(gradle) {
  return gradle.match(/applicationId\s*=?\s*["']([^"']+)["']/)?.[1];
}
function gradleDependencies(gradle, catalog) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  const lit = /\b(?:implementation|api|compileOnly|runtimeOnly|kapt|ksp|debugImplementation|releaseImplementation)\s*\(?\s*(?:platform\()?["']([\w.-]+):([\w.-]+)(?::([^"'@]+))?/g;
  let m;
  while (m = lit.exec(gradle)) {
    const coord = `${m[1]}:${m[2]}`;
    if (seen.has(coord)) continue;
    seen.add(coord);
    out.push({ coord, version: m[3], line: lineOf(gradle, m.index), index: m.index });
  }
  const alias = /\b(?:implementation|api|compileOnly|runtimeOnly|kapt|ksp)\s*\(\s*libs\.([\w.]+)\s*\)/g;
  while (m = alias.exec(gradle)) {
    const lib = catalog.libraries[normAlias(m[1])];
    if (!lib || seen.has(lib.module)) continue;
    seen.add(lib.module);
    out.push({ coord: lib.module, version: lib.version, line: lineOf(gradle, m.index), index: m.index });
  }
  return out;
}
function crossPlatformSdks(root, projectDir) {
  const out = [];
  const pkgText = readText(join10(projectDir, "package.json"));
  if (pkgText) {
    try {
      const pkg = JSON.parse(pkgText);
      for (const [name, version2] of Object.entries(pkg.dependencies ?? {})) {
        const sig = findSignatureByNpm(name);
        if (sig) out.push({ id: sig.id, name, via: "npm", version: version2, evidence: { file: rel(root, join10(projectDir, "package.json")), detail: `${name}@${version2}` }, filesAvailable: false });
      }
    } catch {
    }
  }
  const pub = readText(join10(projectDir, "pubspec.lock"));
  if (pub) {
    const re = /^ {2}([a-z0-9_]+):\n(?:\s{4}.*\n)*?\s{4}version: "([^"]+)"/gm;
    let m;
    while (m = re.exec(pub)) {
      const sig = findSignatureByPub(m[1]);
      if (sig) out.push({ id: sig.id, name: m[1], via: "pub", version: m[2], evidence: { file: rel(root, join10(projectDir, "pubspec.lock")), detail: `${m[1]} (${m[2]})` }, filesAvailable: false });
    }
  }
  return out;
}
function safeList3(d) {
  try {
    return readdirSync5(d);
  } catch {
    return [];
  }
}
function isDir3(p) {
  try {
    return statSync4(p).isDirectory();
  } catch {
    return false;
  }
}
function findPermissionUsage(permissions, texts, deps) {
  const out = {};
  const native = texts.filter((t) => /\.(kt|java)$/.test(t.file));
  const cross = texts.filter((t) => /\.(dart|[jt]sx?|mjs)$/.test(t.file));
  const codeOnly = texts.filter((t) => t.code);
  const hit = (srcs, patterns) => {
    for (const t of srcs) {
      for (const re of patterns) {
        const m = re.exec(t.text);
        if (m) return { file: t.file, line: lineOf(t.text, m.index), detail: m[0].slice(0, 80) };
      }
    }
    return void 0;
  };
  for (const p of permissions) {
    const use = ANDROID_PERMISSION_USE_BY_NAME.get(p);
    if (!use) continue;
    let e = hit(native, use.patterns) ?? hit(cross, use.crossPatterns);
    if (!e) {
      for (const t of codeOnly) {
        const m = requestsByName(t.text, p);
        if (m) {
          e = { file: t.file, line: lineOf(t.text, m.index ?? 0), detail: m[0] };
          break;
        }
      }
    }
    if (!e) {
      const dep = deps.find((d) => use.depHint.test(d.name));
      if (dep) e = { ...dep.evidence, detail: `${dep.name} (may need ${use.label} access)` };
    }
    if (e) out[p] = e;
  }
  return out;
}
function parseIpa(path, zip = ZipArchive.fromFile(path)) {
  const notAudited = [
    "Statically linked SDKs that ship no resource bundle can't be identified from a compiled binary; scan the project folder too.",
    "Binary symbol matches show an API is referenced, not that the code path runs, so they are reported as 'likely'."
  ];
  const infoEntry = zip.entries.find((e) => /^Payload\/[^/]+\.app\/Info\.plist$/.test(e.name));
  if (!infoEntry) throw new Error("Not an iOS app archive: Payload/<App>.app/Info.plist not found");
  const appDir = infoEntry.name.slice(0, -"Info.plist".length);
  const infoPlist = parsePlist(zip.read(infoEntry)) ?? {};
  const privacyManifests = zip.entries.filter((e) => e.name.startsWith(appDir) && e.name.endsWith(".xcprivacy") && !e.name.includes(".appex/")).map((e) => {
    const relPath = e.name.slice(appDir.length);
    const fw = relPath.match(/^Frameworks\/([^/]+)\.framework\//);
    const bundle = relPath.match(/^([^/]+)\.bundle\//);
    const owner = fw ? fw[1] : bundle ? bundle[1].replace(/_Privacy$|Privacy$/, "") : relPath === "PrivacyInfo.xcprivacy" ? "app" : relPath.split("/")[0];
    return { path: e.name, owner, data: parsePlist(zip.read(e)) ?? {}, inBuild: true };
  });
  const linkedSdks = [];
  const fwNames = /* @__PURE__ */ new Set();
  const bundleNames = /* @__PURE__ */ new Set();
  for (const e of zip.entries) {
    if (!e.name.startsWith(appDir)) continue;
    const relPath = e.name.slice(appDir.length);
    const fw = relPath.match(/^Frameworks\/([^/]+)\.framework\//);
    if (fw) fwNames.add(fw[1]);
    const b = relPath.match(/^([^/]+)\.bundle\//);
    if (b) bundleNames.add(b[1]);
  }
  const ownersWithManifest = new Set(privacyManifests.map((m) => m.owner.toLowerCase()));
  for (const name of fwNames) {
    linkedSdks.push({
      id: findSignatureByFramework(name)?.id ?? name,
      name,
      via: "framework",
      evidence: { file: `${appDir}Frameworks/${name}.framework`, detail: `${name}.framework` },
      filesAvailable: true,
      hasPrivacyManifest: ownersWithManifest.has(name.toLowerCase())
    });
  }
  for (const b of bundleNames) {
    const name = b.replace(/_Privacy$|Privacy$/, "");
    if (fwNames.has(name)) continue;
    linkedSdks.push({
      id: findSignatureByFramework(name)?.id ?? name,
      name,
      via: "bundle",
      evidence: { file: `${appDir}${b}.bundle`, detail: `${b}.bundle` },
      filesAvailable: true,
      hasPrivacyManifest: ownersWithManifest.has(name.toLowerCase())
    });
  }
  const exe = typeof infoPlist.CFBundleExecutable === "string" ? infoPlist.CFBundleExecutable : void 0;
  const exeEntry = exe ? zip.get(appDir + exe) : void 0;
  let usesProtectedResources = [];
  let usesRequiredReasonApis = [];
  let entitlements = {};
  if (exeEntry) {
    const bin = zip.read(exeEntry);
    usesProtectedResources = scanBinary(bin, exeEntry.name, IOS_PROTECTED_RESOURCES.map((r) => ({ key: r.id, symbols: r.binarySymbols })));
    usesRequiredReasonApis = scanBinary(bin, exeEntry.name, REQUIRED_REASON_CATEGORIES.map((c2) => ({ key: c2.key, symbols: c2.binarySymbols })));
    entitlements = extractEntitlements(bin) ?? {};
  } else {
    notAudited.push("Main executable not found in the IPA; code usage was not scanned.");
  }
  const uiWebView = [];
  const simulatorCode = [];
  const binaries = [exeEntry, ...[...fwNames].map((n) => zip.get(`${appDir}Frameworks/${n}.framework/${n}`))].filter((e) => !!e);
  for (const e of binaries) {
    const bin = zip.read(e);
    const sim = machOArchs(bin).filter((x) => x === "x86_64" || x === "x86");
    if (sim.length) simulatorCode.push({ file: e.name, detail: `contains ${sim.join(" and ")}` });
    if (bin.indexOf("_OBJC_CLASS_$_UIWebView\0", 0, "latin1") >= 0) uiWebView.push({ file: e.name, detail: "binary references UIWebView" });
  }
  let debuggable = entitlements["get-task-allow"] === true ? { file: exeEntry?.name, detail: "get-task-allow = true" } : void 0;
  let provisionedDevices;
  const profileEntry = zip.get(`${appDir}embedded.mobileprovision`);
  if (profileEntry) {
    const raw = zip.read(profileEntry);
    const start = raw.indexOf("<?xml", 0, "latin1");
    const end = raw.indexOf("</plist>", start, "latin1");
    const profile = start >= 0 && end > start ? parsePlist(Buffer.from(raw.subarray(start, end + 8))) : void 0;
    const ent = profile?.Entitlements;
    if (ent?.["get-task-allow"] === true) debuggable ??= { file: profileEntry.name, detail: "get-task-allow = true" };
    if (Array.isArray(profile?.ProvisionedDevices)) provisionedDevices = { file: profileEntry.name, detail: `profile lists ${profile.ProvisionedDevices.length} test devices` };
  }
  const jsBundle = zip.get(`${appDir}main.jsbundle`);
  const expoMarker = [`${appDir}EXConstants.bundle/app.config`, `${appDir}Expo.plist`, `${appDir}EXUpdates.bundle/app.manifest`].find((n) => zip.has(n));
  let framework = "native";
  let frameworkEvidence;
  if (fwNames.has("Flutter")) {
    framework = "flutter";
    frameworkEvidence = { file: `${appDir}Frameworks/Flutter.framework`, detail: "Flutter engine" };
  } else if (expoMarker || bundleNames.has("EXConstants")) {
    framework = "expo";
    frameworkEvidence = { file: expoMarker ?? `${appDir}EXConstants.bundle`, detail: "Expo app config" };
  } else if (jsBundle || bundleNames.has("hermes") || fwNames.has("hermes") || fwNames.has("hermesvm") || fwNames.has("React")) {
    framework = "react-native";
    frameworkEvidence = { file: jsBundle?.name ?? `${appDir}Frameworks/hermes.framework`, detail: "React Native" };
  }
  const texts = [];
  const searched = [];
  let budget = 96 * 1024 * 1024;
  const addText = (name, label) => {
    const e = zip.get(name);
    if (!e || budget <= 0) return;
    const t = printableStrings(zip.read(e), 6, budget);
    budget -= t.length;
    texts.push({ file: name, text: t, lines: false, code: false });
    if (!searched.includes(label)) searched.push(label);
  };
  if (exeEntry) addText(exeEntry.name, "app binary strings");
  if (jsBundle) addText(jsBundle.name, "JS bundle");
  if (fwNames.has("App")) addText(`${appDir}Frameworks/App.framework/App`, "Dart AOT strings");
  for (const e of zip.entries) {
    if (e.name.startsWith(appDir) && /^[^/]+\.lproj\/[^/]+\.strings$/.test(e.name.slice(appDir.length))) addText(e.name, "UI strings");
  }
  const signals = scanSignals(texts, linkedSdks, { searched, entitlements, binary: true });
  return {
    platform: "ios",
    inputKind: "ipa",
    framework,
    frameworkEvidence,
    signals,
    root: path,
    bundleId: typeof infoPlist.CFBundleIdentifier === "string" ? infoPlist.CFBundleIdentifier : void 0,
    version: typeof infoPlist.CFBundleShortVersionString === "string" ? infoPlist.CFBundleShortVersionString : void 0,
    notAudited,
    listing: [],
    ios: {
      infoPlist,
      infoPlistPath: infoEntry.name,
      privacyManifests,
      linkedSdks,
      entitlements,
      usesRequiredReasonApis,
      usesProtectedResources,
      deviceFamily: Array.isArray(infoPlist.UIDeviceFamily) ? infoPlist.UIDeviceFamily.map(Number) : void 0,
      uiWebView,
      build: { simulatorCode, debuggable, provisionedDevices }
    }
  };
}
function extractEntitlements(bin) {
  let from = 0;
  while (true) {
    const start = bin.indexOf("<?xml", from, "latin1");
    if (start < 0) return void 0;
    const end = bin.indexOf("</plist>", start, "latin1");
    if (end < 0) return void 0;
    const chunk = bin.subarray(start, end + 8);
    if (chunk.length < 64 * 1024 && /application-identifier|com\.apple\.developer|aps-environment/.test(chunk.toString("latin1"))) {
      return parsePlist(Buffer.from(chunk));
    }
    from = end + 8;
  }
}
var RES_STRING_POOL = 1;
var RES_XML = 3;
var RES_XML_RESOURCE_MAP = 384;
var RES_XML_START_ELEMENT = 258;
var RES_XML_END_ELEMENT = 259;
var ATTR_IDS = {
  16842755: "name",
  16843291: "versionCode",
  16843292: "versionName",
  16843276: "minSdkVersion",
  16843376: "targetSdkVersion",
  16842788: "value",
  16843406: "required",
  16844185: "foregroundServiceType",
  16842768: "exported",
  16842752: "theme"
};
function readStringPool(b, start) {
  const headerSize = b.readUInt16LE(start + 2);
  const stringCount = b.readUInt32LE(start + 8);
  const flags = b.readUInt32LE(start + 16);
  const stringsStart = b.readUInt32LE(start + 20);
  const utf8 = (flags & 1 << 8) !== 0;
  const offsetsStart = start + headerSize;
  const out = [];
  for (let i = 0; i < stringCount; i++) {
    let p = start + stringsStart + b.readUInt32LE(offsetsStart + i * 4);
    if (utf8) {
      let n = b[p];
      p += n & 128 ? 2 : 1;
      let len = b[p];
      if (len & 128) {
        len = (len & 127) << 8 | b[p + 1];
        p += 2;
      } else p += 1;
      out.push(b.toString("utf8", p, p + len));
      void n;
    } else {
      let len = b.readUInt16LE(p);
      if (len & 32768) {
        len = (len & 32767) << 16 | b.readUInt16LE(p + 2);
        p += 4;
      } else p += 2;
      out.push(b.toString("utf16le", p, p + len * 2));
    }
  }
  return out;
}
function typedValue(b, p, strings) {
  const dataType = b[p + 3];
  const data = b.readUInt32LE(p + 4);
  switch (dataType) {
    case 3:
      return strings[data] ?? "";
    case 16:
      return data | 0;
    case 17:
      return data >>> 0;
    case 18:
      return data !== 0;
    case 1:
      return `@0x${data.toString(16).padStart(8, "0")}`;
    default:
      return data | 0;
  }
}
function parseAxml(b) {
  if (b.readUInt16LE(0) !== RES_XML) throw new Error("Not an Android binary XML file");
  let strings = [];
  let resourceIds = [];
  const root = { tag: "#document", attrs: {}, children: [] };
  const stack = [root];
  let p = b.readUInt16LE(2);
  while (p + 8 <= b.length) {
    const type = b.readUInt16LE(p);
    const headerSize = b.readUInt16LE(p + 2);
    const size = b.readUInt32LE(p + 4);
    if (size === 0) break;
    if (type === RES_STRING_POOL) {
      strings = readStringPool(b, p);
    } else if (type === RES_XML_RESOURCE_MAP) {
      resourceIds = [];
      for (let q = p + headerSize; q < p + size; q += 4) resourceIds.push(b.readUInt32LE(q));
    } else if (type === RES_XML_START_ELEMENT) {
      const ext = p + headerSize;
      const nameIdx = b.readUInt32LE(ext + 4);
      const attrStart = b.readUInt16LE(ext + 8);
      const attrSize = b.readUInt16LE(ext + 10);
      const attrCount = b.readUInt16LE(ext + 12);
      const node = { tag: strings[nameIdx] ?? "", attrs: {}, children: [] };
      for (let i = 0; i < attrCount; i++) {
        const a = ext + attrStart + i * attrSize;
        const attrNameIdx = b.readUInt32LE(a + 4);
        const rawValueIdx = b.readUInt32LE(a + 8);
        let attrName = strings[attrNameIdx] ?? "";
        if (!attrName && resourceIds[attrNameIdx] !== void 0) {
          attrName = ATTR_IDS[resourceIds[attrNameIdx]] ?? `0x${resourceIds[attrNameIdx].toString(16)}`;
        }
        const value = rawValueIdx !== 4294967295 && strings[rawValueIdx] !== void 0 ? strings[rawValueIdx] : typedValue(b, a + 12, strings);
        node.attrs[attrName] = value;
      }
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else if (type === RES_XML_END_ELEMENT) {
      if (stack.length > 1) stack.pop();
    }
    p += size;
  }
  return root;
}
var SIXTY_FOUR_BIT_ABIS = /* @__PURE__ */ new Set(["arm64-v8a", "x86_64"]);
var TEXT_BUDGET = 96 * 1024 * 1024;
var APK_LAYOUT = {
  kind: "apk",
  manifestPath: "AndroidManifest.xml",
  dexPrefix: "",
  libPrefix: "lib/",
  assetsPrefix: "assets/",
  metaInfPrefix: "META-INF/",
  resourceText: ["resources.arsc"]
};
var AAB_LAYOUT = {
  kind: "aab",
  manifestPath: "base/manifest/AndroidManifest.xml",
  dexPrefix: "base/dex/",
  libPrefix: "base/lib/",
  assetsPrefix: "base/assets/",
  metaInfPrefix: "base/root/META-INF/",
  resourceText: ["base/resources.pb"]
};
function androidBinaryFacts(path, zip, manifest, layout, notAudited) {
  const linkedSdks = [];
  const seen = /* @__PURE__ */ new Set();
  let playBillingVersion;
  const metaRe = new RegExp(`^${escape(layout.metaInfPrefix)}([^/_]+)_([^/]+)\\.version$`);
  for (const e of zip.entries) {
    const m = e.name.match(metaRe);
    if (!m) continue;
    const coord = `${m[1]}:${m[2]}`;
    const version2 = zip.read(e).toString("utf8").trim();
    const sig = findSignatureByGradle(coord);
    if (coord.startsWith("com.android.billingclient:billing")) playBillingVersion ??= version2;
    if (!sig || seen.has(sig.id)) continue;
    seen.add(sig.id);
    linkedSdks.push({ id: sig.id, name: coord, via: "gradle", version: version2, evidence: { file: e.name, detail: `${coord}:${version2}` }, filesAvailable: true });
  }
  const billingMeta = manifest.metaData["com.google.android.play.billingclient.version"];
  if (billingMeta) playBillingVersion = billingMeta;
  const texts = [];
  let budget = TEXT_BUDGET;
  const dexRe = new RegExp(`^${escape(layout.dexPrefix)}classes\\d*\\.dex$`);
  for (const e of zip.entries) {
    if (!dexRe.test(e.name) || budget <= 0) continue;
    const dex = zip.read(e);
    for (const sig of findSignaturesInDex(dex)) {
      if (seen.has(sig.id)) continue;
      seen.add(sig.id);
      linkedSdks.push({ id: sig.id, name: sig.name, via: "binary", evidence: { file: e.name, detail: `${sig.name} classes in DEX` }, filesAvailable: true });
    }
    const text = printableStrings(dex, 6, budget);
    budget -= text.length;
    texts.push({ file: e.name, text, lines: false, code: false });
  }
  const nativeLibs = [];
  const libRe = new RegExp(`^${escape(layout.libPrefix)}([^/]+)/[^/]+\\.so$`);
  for (const e of zip.entries) {
    const m = e.name.match(libRe);
    if (!m) continue;
    const abi = m[1];
    const lib = { path: e.name, abi };
    if (SIXTY_FOUR_BIT_ABIS.has(abi)) {
      try {
        lib.minLoadAlign = minLoadAlignment(zip.read(e));
      } catch {
      }
      if (layout.kind === "apk" && e.method === 0 && e.dataOffset % 16384 !== 0) lib.zipMisaligned16k = true;
    }
    nativeLibs.push(lib);
  }
  const has = (n) => zip.has(n);
  const libNamed = (re) => nativeLibs.find((l) => re.test(l.path));
  let framework = "native";
  let frameworkEvidence;
  const flutterLib = libNamed(/\/libflutter\.so$/);
  const jsBundle = `${layout.assetsPrefix}index.android.bundle`;
  const expoConfig = [`${layout.assetsPrefix}app.config`, `${layout.assetsPrefix}app.manifest`].find(has);
  if (flutterLib || has(`${layout.assetsPrefix}flutter_assets/AssetManifest.json`) || has(`${layout.assetsPrefix}flutter_assets/AssetManifest.bin`)) {
    framework = "flutter";
    frameworkEvidence = { file: flutterLib?.path ?? `${layout.assetsPrefix}flutter_assets/`, detail: "Flutter engine" };
  } else if (expoConfig || Object.keys(manifest.metaData).some((k) => k.startsWith("expo.modules."))) {
    framework = "expo";
    frameworkEvidence = { file: expoConfig ?? layout.manifestPath, detail: "Expo app config" };
  } else if (has(jsBundle) || libNamed(/\/lib(reactnative\w*|hermes\w*|jsc)\.so$/)) {
    framework = "react-native";
    frameworkEvidence = { file: has(jsBundle) ? jsBundle : libNamed(/\/lib(reactnative\w*|hermes\w*)\.so$/).path, detail: "React Native" };
  }
  const searched = ["DEX strings"];
  if (has(jsBundle) && budget > 0) {
    const t = printableStrings(zip.read(jsBundle), 6, budget);
    budget -= t.length;
    texts.push({ file: jsBundle, text: t, lines: false, code: false });
    searched.push("JS bundle");
  }
  for (const l of nativeLibs.filter((l2) => /\/libapp\.so$/.test(l2.path) && l2.abi === "arm64-v8a").slice(0, 1)) {
    if (budget <= 0) break;
    const t = printableStrings(zip.read(l.path), 6, budget);
    budget -= t.length;
    texts.push({ file: l.path, text: t, lines: false, code: false });
    searched.push("Dart AOT strings");
  }
  for (const r of layout.resourceText) {
    if (!has(r) || budget <= 0) continue;
    const buf = zip.read(r);
    const t = printableStrings(buf, 6, budget) + "\n" + printableUtf16(buf, 6);
    budget -= t.length;
    texts.push({ file: r, text: t, lines: false, code: false });
    searched.push("UI strings");
  }
  if (budget <= 0) notAudited.push("This build is very large; only part of its code text was searched for account, login and AI signals.");
  const signals = scanSignals(texts, linkedSdks, { searched, binary: true });
  return {
    platform: "android",
    inputKind: layout.kind,
    framework,
    frameworkEvidence,
    signals,
    root: path,
    bundleId: manifest.packageName,
    version: manifest.versionName,
    notAudited,
    listing: [],
    android: {
      manifest,
      manifestPath: layout.manifestPath,
      targetSdk: manifest.usesSdk?.targetSdk,
      targetSdkSource: { file: layout.manifestPath, detail: "uses-sdk targetSdkVersion" },
      minSdk: manifest.usesSdk?.minSdk,
      formFactor: formFactorOf(manifest),
      permissions: manifest.permissions,
      linkedSdks,
      playBillingVersion,
      playBillingEvidence: playBillingVersion ? { file: layout.manifestPath, detail: `com.google.android.play.billingclient.version = ${playBillingVersion}` } : void 0,
      nativeLibs,
      startForegroundClasses: [],
      hasSource: false
    }
  };
}
function printableUtf16(buf, minLen = 6, maxOut = 8 * 1024 * 1024) {
  const parts = [];
  let start = -1;
  let total = 0;
  for (let i = 0; i + 1 <= buf.length; i += 2) {
    const c2 = i + 1 < buf.length ? buf[i] : 0;
    const hi = i + 1 < buf.length ? buf[i + 1] : 1;
    const printable = hi === 0 && c2 >= 32 && c2 < 127;
    if (printable) {
      if (start < 0) start = i;
    } else if (start >= 0) {
      if ((i - start) / 2 >= minLen) {
        parts.push(buf.toString("utf16le", start, i));
        total += (i - start) / 2;
        if (total > maxOut) break;
      }
      start = -1;
    }
  }
  return parts.join("\n");
}
function escape(s) {
  return s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
}
function parseApk(path, zip = ZipArchive.fromFile(path)) {
  const notAudited = ["App source is not available in an APK; foreground-service usage is judged from the manifest only."];
  if (!zip.has("AndroidManifest.xml")) throw new Error("Not an APK: AndroidManifest.xml missing");
  const manifest = manifestFromTree(parseAxml(zip.read("AndroidManifest.xml")));
  return androidBinaryFacts(path, zip, manifest, APK_LAYOUT, notAudited);
}
function readVarint(b, pos) {
  let result = 0n;
  let shift = 0n;
  while (pos < b.length) {
    const byte = b[pos++];
    result |= BigInt(byte & 127) << shift;
    if (!(byte & 128)) return [result, pos];
    shift += 7n;
    if (shift > 70n) break;
  }
  throw new Error("Malformed protobuf varint");
}
function readFields(b) {
  const out = [];
  let pos = 0;
  while (pos < b.length) {
    const [key, p1] = readVarint(b, pos);
    pos = p1;
    const no = Number(key >> 3n);
    const wire = Number(key & 7n);
    if (wire === 0) {
      const [v, p2] = readVarint(b, pos);
      out.push({ no, wire, varint: v });
      pos = p2;
    } else if (wire === 2) {
      const [len, p2] = readVarint(b, pos);
      const end = p2 + Number(len);
      if (end > b.length) throw new Error("Malformed protobuf: length past end");
      out.push({ no, wire, bytes: b.subarray(p2, end) });
      pos = end;
    } else if (wire === 1) {
      pos += 8;
    } else if (wire === 5) {
      pos += 4;
    } else {
      throw new Error(`Unsupported protobuf wire type ${wire}`);
    }
  }
  return out;
}
var str4 = (f) => f?.bytes ? f.bytes.toString("utf8") : void 0;
function attrValue(fields) {
  const raw = str4(fields.find((f) => f.no === 3)) ?? "";
  const item = fields.find((f) => f.no === 6)?.bytes;
  if (item) {
    const itemFields = readFields(item);
    const prim = itemFields.find((f) => f.no === 7)?.bytes;
    if (prim) {
      for (const p of readFields(prim)) {
        if (p.no === 6 && p.varint !== void 0) return Number(BigInt.asIntN(32, p.varint));
        if (p.no === 7 && p.varint !== void 0) return Number(BigInt.asUintN(32, p.varint));
        if (p.no === 8 && p.varint !== void 0) return p.varint !== 0n;
      }
    }
    const s = itemFields.find((f) => f.no === 2 || f.no === 3)?.bytes;
    if (s && !raw) return str4(readFields(s).find((f) => f.no === 1)) ?? "";
  }
  return raw;
}
function element(b, depth) {
  if (depth > 64) throw new Error("Manifest nesting too deep");
  const fields = readFields(b);
  const node = { tag: str4(fields.find((f) => f.no === 3)) ?? "", attrs: {}, children: [] };
  for (const f of fields) {
    if (f.no === 4 && f.bytes) {
      const af = readFields(f.bytes);
      const name = str4(af.find((x) => x.no === 2));
      if (name) node.attrs[name] = attrValue(af);
    } else if (f.no === 5 && f.bytes) {
      const child = xmlNode(f.bytes, depth + 1);
      if (child) node.children.push(child);
    }
  }
  return node;
}
function xmlNode(b, depth) {
  const el = readFields(b).find((f) => f.no === 1)?.bytes;
  return el ? element(el, depth) : void 0;
}
function parseProtoXml(buf) {
  const root = xmlNode(buf, 0);
  if (!root?.tag) throw new Error("Not a protobuf XML document");
  return { tag: "#document", attrs: {}, children: [root] };
}
function parseAab(path, zip = ZipArchive.fromFile(path)) {
  const notAudited = [
    "App source is not available in an app bundle; foreground-service usage is judged from the manifest only.",
    "Play builds the final APKs from this bundle: 16 KB zip alignment is handled by Play, so only native library ELF alignment is checked."
  ];
  if (!zip.has(AAB_LAYOUT.manifestPath)) {
    throw new Error("This doesn't look like an Android App Bundle (no base/manifest/AndroidManifest.xml inside). Upload the .aab that Android Studio or `./gradlew bundleRelease` builds.");
  }
  const manifest = manifestFromTree(parseProtoXml(zip.read(AAB_LAYOUT.manifestPath)));
  manifest.permissionEvidence = {};
  for (const p of manifest.permissions) manifest.permissionEvidence[p] = { file: AAB_LAYOUT.manifestPath, detail: p };
  for (const s of manifest.services) s.manifestFile = AAB_LAYOUT.manifestPath;
  const features = zip.entries.map((e) => e.name.match(/^([^/]+)\/manifest\/AndroidManifest\.xml$/)?.[1]).filter((m) => !!m && m !== "base");
  for (const mod of features) {
    const file = `${mod}/manifest/AndroidManifest.xml`;
    try {
      const f = manifestFromTree(parseProtoXml(zip.read(file)));
      for (const p of f.permissions) {
        if (manifest.permissions.includes(p)) continue;
        manifest.permissions.push(p);
        manifest.permissionEvidence[p] = { file, detail: p };
      }
      for (const s of f.services) manifest.services.push({ ...s, manifestFile: file });
    } catch {
      notAudited.push(`Feature module manifest ${file} could not be read.`);
    }
  }
  if (!manifest.usesSdk?.targetSdk) {
    notAudited.push("The bundle's manifest has no targetSdkVersion (it's normally written by the Android Gradle plugin); targetSdk was not checked.");
  }
  return androidBinaryFacts(path, zip, manifest, AAB_LAYOUT, notAudited);
}
var EXPO_PLUGINS = {
  "expo-camera": {
    ios: { cameraPermission: ["NSCameraUsageDescription", "Allow $(PRODUCT_NAME) to access your camera"], microphonePermission: ["NSMicrophoneUsageDescription", "Allow $(PRODUCT_NAME) to access your microphone"] },
    android: ["android.permission.CAMERA", "android.permission.RECORD_AUDIO"]
  },
  "expo-image-picker": {
    ios: { photosPermission: ["NSPhotoLibraryUsageDescription", "Allow $(PRODUCT_NAME) to access your photos"], cameraPermission: ["NSCameraUsageDescription", "Allow $(PRODUCT_NAME) to access your camera"], microphonePermission: ["NSMicrophoneUsageDescription", "Allow $(PRODUCT_NAME) to access your microphone"] },
    android: ["android.permission.CAMERA", "android.permission.RECORD_AUDIO"]
  },
  "expo-location": {
    ios: { locationWhenInUsePermission: ["NSLocationWhenInUseUsageDescription", "Allow $(PRODUCT_NAME) to use your location"] },
    android: ["android.permission.ACCESS_COARSE_LOCATION", "android.permission.ACCESS_FINE_LOCATION"]
  },
  "expo-contacts": { ios: { contactsPermission: ["NSContactsUsageDescription", "Allow $(PRODUCT_NAME) to access your contacts"] }, android: ["android.permission.READ_CONTACTS", "android.permission.WRITE_CONTACTS"] },
  "expo-calendar": { ios: { calendarPermission: ["NSCalendarsUsageDescription", "Allow $(PRODUCT_NAME) to access your calendar"], remindersPermission: ["NSRemindersUsageDescription", "Allow $(PRODUCT_NAME) to access your reminders"] }, android: ["android.permission.READ_CALENDAR", "android.permission.WRITE_CALENDAR"] },
  "expo-media-library": { ios: { photosPermission: ["NSPhotoLibraryUsageDescription", "Allow $(PRODUCT_NAME) to access your photos"], savePhotosPermission: ["NSPhotoLibraryAddUsageDescription", "Allow $(PRODUCT_NAME) to save photos"] } },
  "expo-tracking-transparency": { ios: { userTrackingPermission: ["NSUserTrackingUsageDescription", "Allow this app to collect app-related data that can be used for tracking you or your device."] } },
  "expo-local-authentication": { ios: { faceIDPermission: ["NSFaceIDUsageDescription", "Allow $(PRODUCT_NAME) to use Face ID"] } },
  "expo-audio": { ios: { microphonePermission: ["NSMicrophoneUsageDescription", "Allow $(PRODUCT_NAME) to access your microphone"] }, android: ["android.permission.RECORD_AUDIO"] },
  "expo-av": { ios: { microphonePermission: ["NSMicrophoneUsageDescription", "Allow $(PRODUCT_NAME) to access your microphone"] }, android: ["android.permission.RECORD_AUDIO"] },
  "expo-sensors": { ios: { motionPermission: ["NSMotionUsageDescription", "Allow $(PRODUCT_NAME) to access your device motion"] } }
};
function readExpoConfig(root) {
  for (const name of [".okayed/expo-config.json", "app.json"]) {
    const file = join11(root, name);
    const text = readText(file);
    if (!text) continue;
    try {
      const json = JSON.parse(text);
      return { config: json.expo ?? json, file: name, text };
    } catch {
    }
  }
  return void 0;
}
function parseExpoProject(root, platforms) {
  const read = readExpoConfig(root);
  const cfg = read?.config ?? {};
  const cfgFile = read?.file ?? "package.json";
  const where = (needle) => ({ file: cfgFile, line: read && read.text.includes(needle) ? lineOf(read.text, read.text.indexOf(needle)) : void 0 });
  const hasDynamicConfig = ["app.config.js", "app.config.ts", "app.config.mjs", "app.config.cjs"].find((f) => exists(join11(root, f)));
  const baseNotes = [
    "Expo managed project: native files are generated at prebuild. Results come from app.json, its config plugins, package.json and your JS/TS code; scan the built .ipa / .aab for the final word."
  ];
  const complete = !hasDynamicConfig || cfgFile === ".okayed/expo-config.json";
  if (!complete) {
    baseNotes.push(
      `${hasDynamicConfig} is code, so Okayed doesn't run it: purpose strings, permissions and targetSdk weren't checked. Save the resolved config with \`npx expo config --json > .okayed/expo-config.json\` and scan again.`
    );
  }
  const plugins = (cfg.plugins ?? []).map((p) => Array.isArray(p) ? { name: p[0], opts: p[1] ?? {} } : { name: p, opts: {} });
  const deps = crossPlatformDeps(root, root);
  const linked = deps.map((d) => ({ ...d, id: findSignatureByNpm(d.name)?.id ?? d.name }));
  const code = collectAppCode(root, "expo", {});
  const texts = readSources(root, code.files);
  const out = [];
  if (platforms.ios) {
    const infoPlist = { ...cfg.ios?.infoPlist ?? {} };
    const keyEvidence = {};
    for (const k of Object.keys(infoPlist)) keyEvidence[k] = where(`"${k}"`);
    for (const p of plugins) {
      for (const [opt, [key, def]] of Object.entries(EXPO_PLUGINS[p.name]?.ios ?? {})) {
        const v = p.opts[opt];
        if (v === false || key in infoPlist) continue;
        infoPlist[key] = typeof v === "string" ? v : def;
        keyEvidence[key] = { ...where(typeof v === "string" ? `"${opt}"` : `"${p.name}"`), detail: typeof v === "string" ? `${p.name} ${opt}` : `${p.name} default ${key}` };
      }
    }
    if (cfg.ios?.bundleIdentifier) infoPlist.CFBundleIdentifier = cfg.ios.bundleIdentifier;
    if (typeof cfg.ios?.config?.usesNonExemptEncryption === "boolean" && !("ITSAppUsesNonExemptEncryption" in infoPlist)) {
      infoPlist.ITSAppUsesNonExemptEncryption = cfg.ios.config.usesNonExemptEncryption;
      keyEvidence.ITSAppUsesNonExemptEncryption = where('"usesNonExemptEncryption"');
    }
    const usesProtectedResources = scanPatterns(texts, Object.entries(IOS_RESOURCE_HINTS).map(([key, h]) => ({ key, patterns: h.crossPatterns })), "plugin");
    for (const sdk of linked) {
      for (const r of findSignatureByNpm(sdk.name)?.impliesResources ?? []) {
        if (!usesProtectedResources.some((u) => u.key === r)) usesProtectedResources.push({ key: r, symbol: sdk.name, origin: "sdk", evidence: { ...sdk.evidence, detail: `${sdk.name} requests ${r} access` } });
      }
    }
    const entitlements = { ...cfg.ios?.entitlements ?? {}, ...cfg.ios?.usesAppleSignIn ? { "com.apple.developer.applesignin": ["Default"] } : {} };
    out.push({
      platform: "ios",
      inputKind: "expo-config",
      framework: "expo",
      frameworkEvidence: { file: cfgFile, detail: "Expo managed project" },
      signals: scanSignals(texts, linked, { searched: code.searched, entitlements }),
      root,
      bundleId: cfg.ios?.bundleIdentifier,
      version: cfg.version,
      notAudited: [
        ...baseNotes,
        ...cfg.ios?.bundleIdentifier || !complete ? [] : [`${cfgFile} has no expo.ios.bundleIdentifier.`],
        "Privacy manifests are assembled at prebuild (app.json ios.privacyManifests plus each module's own); IOS-PRIV-001/002/003 were not checked. Scan the .ipa to check them."
      ],
      listing: [],
      ios: {
        infoPlist,
        // Unknown when the config is dynamic: rules that look for missing keys then stay silent.
        infoPlistPath: complete ? cfgFile : void 0,
        infoPlistKeyEvidence: keyEvidence,
        privacyManifests: cfg.ios?.privacyManifests ? [{ path: cfgFile, owner: "app", data: cfg.ios.privacyManifests, inBuild: true }] : [],
        linkedSdks: linked.filter((d) => findSignatureByNpm(d.name)),
        allDependencies: deps.map((d) => d.name),
        entitlements,
        usesRequiredReasonApis: [],
        usesProtectedResources
      }
    });
  }
  if (platforms.android) {
    const permissions = /* @__PURE__ */ new Set();
    const permissionEvidence = {};
    const add = (p, e) => {
      const full = p.includes(".") ? p : `android.permission.${p}`;
      if (permissions.has(full)) return;
      permissions.add(full);
      permissionEvidence[full] = { ...e, detail: full };
    };
    for (const p of cfg.android?.permissions ?? []) add(p, where(`"${p}"`));
    for (const p of plugins) for (const perm of EXPO_PLUGINS[p.name]?.android ?? []) add(perm, where(`"${p.name}"`));
    for (const b of cfg.android?.blockedPermissions ?? []) permissions.delete(b.includes(".") ? b : `android.permission.${b}`);
    const build = plugins.find((p) => p.name === "expo-build-properties")?.opts;
    const targetSdk = typeof build?.android?.targetSdkVersion === "number" ? build.android.targetSdkVersion : void 0;
    const manifest = {
      packageName: cfg.android?.package,
      versionName: cfg.version,
      usesSdk: { targetSdk, minSdk: build?.android?.minSdkVersion },
      permissions: [...permissions],
      features: [],
      services: [],
      metaData: {},
      launcherCategories: [],
      permissionEvidence
    };
    out.push({
      platform: "android",
      inputKind: "expo-config",
      framework: "expo",
      frameworkEvidence: { file: cfgFile, detail: "Expo managed project" },
      signals: scanSignals(texts, linked, { searched: code.searched }),
      root,
      bundleId: cfg.android?.package,
      version: cfg.version,
      notAudited: [
        ...baseNotes,
        ...targetSdk || !complete ? [] : ["targetSdk comes from your Expo SDK version unless expo-build-properties sets it; it wasn't checked. Scan the .aab to check it."],
        "Permissions that Expo modules add by themselves at build time aren't all known here; scan the .aab for the merged manifest."
      ],
      listing: [],
      android: {
        manifest,
        manifestPath: complete ? cfgFile : void 0,
        targetSdk,
        targetSdkSource: targetSdk ? { ...where('"targetSdkVersion"'), detail: `expo-build-properties targetSdkVersion ${targetSdk}` } : void 0,
        minSdk: build?.android?.minSdkVersion,
        formFactor: "phone",
        permissions: manifest.permissions,
        linkedSdks: linked.filter((d) => findSignatureByNpm(d.name)),
        allDependencies: deps.map((d) => d.name),
        permissionUsage: complete && texts.length ? findPermissionUsage(manifest.permissions, texts, deps) : void 0,
        nativeLibs: [],
        startForegroundClasses: [],
        hasSource: false
      }
    });
  }
  return out;
}
function parseInput(input, opts = {}) {
  const path = resolve(input);
  if (!exists(path)) throw new Error(`Path not found: ${input}`);
  const st = statSync5(path);
  const lower = path.toLowerCase();
  const distribution = opts.distribution ?? readDistributionConfig(st.isFile() ? dirname4(path) : path);
  if (st.isFile()) {
    if (lower.endsWith(".ipa")) return [parseIpa(path)];
    if (lower.endsWith(".apk")) return [parseApk(path)];
    if (lower.endsWith(".aab")) return [parseAab(path)];
    if (lower.endsWith(".pkg")) return parsePkg(path, { distribution });
    if (lower.endsWith(".zip")) return [parseZip(path, distribution)];
    throw new Error(`Unsupported file type: ${input}. Pass a project folder, .ipa, .apk, .aab, a macOS .app (or .zip of one) or .pkg.`);
  }
  if (/\.app\/?$/.test(lower) && exists(join12(path, "Contents", "Info.plist"))) {
    const fs = new DirBundleFS(dirname4(path), path);
    return [parseMacApp(fs, findAppBundles(fs)[0] ?? path.split("/").pop(), { root: path, inputKind: "mac-app", distribution })];
  }
  if (!findIosDir(path) && !findAndroidDir(path) && detectFramework(path) === "native" && !exists(join12(path, "project.yml"))) {
    const apps = findApps(path);
    if (apps.length === 1) return parseInput(apps[0], opts);
    if (apps.length > 1) throw new Error(`Found ${apps.length} apps in ${input}. Pass the one to scan: ${apps.slice(0, 8).map((a) => join12(input, relative2(path, a))).join(", ")}${apps.length > 8 ? ", \u2026" : ""}`);
  }
  const framework = detectFramework(path);
  const results = [];
  const wantIos = !opts.platform || opts.platform === "ios";
  const wantMac = !opts.platform || opts.platform === "macos";
  const wantAndroid = !opts.platform || opts.platform === "android";
  const iosDir = findIosDir(path);
  if (iosDir && (wantIos || wantMac)) {
    const pbx = findPbx(iosDir);
    const platforms = pbx ? xcodePlatforms(pbx, iosDir) : ["ios"];
    for (const p of platforms) {
      if (p === "ios" && wantIos || p === "macos" && wantMac) results.push(parseIosProject(path, iosDir, framework, { as: p, distribution }));
    }
    if (!results.length && opts.platform === "macos") throw new Error(`The Xcode project in ${input} has no macOS app target.`);
  }
  const macDir = framework !== "native" ? [join12(path, "macos"), join12(path, "macOS")].find(hasXcodeproj) : void 0;
  if (wantMac && macDir && macDir !== iosDir) results.push(parseIosProject(path, macDir, framework, { as: "macos", distribution }));
  const androidDir = findAndroidDir(path);
  if (wantAndroid && androidDir) {
    for (const mod of findAppModules(androidDir)) results.push(parseAndroidProject(path, androidDir, framework, mod));
  }
  if (framework === "expo" && !iosDir && !androidDir) {
    results.push(...parseExpoProject(path, { ios: wantIos, android: wantAndroid }));
  }
  for (const f of results) attachDeclarationFiles(f, path);
  if (!results.length) {
    if (framework === "expo") {
      throw new Error("This looks like an Expo project, but no app.json was found. Add app.json, run `npx expo prebuild`, or scan the built .ipa/.aab.");
    }
    if (exists(join12(path, "project.yml")) || list(path).some((n) => /^project.*\.ya?ml$/.test(n)) || exists(join12(path, "Project.swift"))) {
      const tuist = exists(join12(path, "Project.swift"));
      throw new Error(`This project makes its .xcodeproj with ${tuist ? "Tuist" : "XcodeGen"}. Run \`${tuist ? "tuist generate --no-open" : "xcodegen generate"}\` first, then scan again (in CI, add it as a step before Okayed).`);
    }
    throw new Error(`No iOS/macOS (.xcodeproj) or Android (com.android.application) project found in ${input}.`);
  }
  return results;
}
function detectFramework(dir) {
  const pubspec = readText(join12(dir, "pubspec.yaml"));
  if (pubspec && /^\s+sdk:\s*flutter\b/m.test(pubspec)) return "flutter";
  const pkgText = readText(join12(dir, "package.json"));
  let deps = {};
  if (pkgText) {
    try {
      const pkg = JSON.parse(pkgText);
      deps = { ...pkg.devDependencies, ...pkg.dependencies };
    } catch {
      if (/"expo"\s*:/.test(pkgText)) return "expo";
      if (/"react-native"\s*:/.test(pkgText)) return "react-native";
    }
  }
  if (deps.expo) return "expo";
  const appJson = readText(join12(dir, "app.json"));
  if (appJson && /^\s*\{\s*"expo"\s*:/.test(appJson) && (deps["react-native"] || readExpoConfig(dir))) return "expo";
  if (deps["react-native"]) return "react-native";
  if (pubspec) return "flutter";
  return "native";
}
function findApps(root) {
  const found = [];
  let level = [root];
  for (let depth = 0; depth < 3 && level.length; depth++) {
    const next = [];
    for (const dir of level) {
      for (const name of list(dir).sort()) {
        if (name.startsWith(".") || VENDOR_DIRS.has(name) || /^(?:examples?|samples?|demos?|tests?|e2e|docs?|fixtures?|templates?|third[_-]?party)$/i.test(name)) continue;
        const d = join12(dir, name);
        if (!isDir4(d)) continue;
        const fw = detectFramework(d);
        if (fw !== "native" ? findIosDir(d) || findAndroidDir(d) || fw === "expo" && readExpoConfig(d) : hasXcodeproj(d) || findAndroidDir(d)) found.push(d);
        else next.push(d);
      }
    }
    if (found.length) return found;
    level = next.slice(0, 400);
  }
  return found;
}
function findIosDir(root) {
  for (const dir of [root, join12(root, "ios"), join12(root, "iOS")]) {
    if (hasXcodeproj(dir)) return dir;
  }
  for (const name of list(root)) {
    const d = join12(root, name);
    if (!name.startsWith(".") && name !== "node_modules" && name !== "Pods" && isDir4(d) && hasXcodeproj(d)) return d;
  }
  return void 0;
}
function findPbx(dir) {
  for (const n of list(dir)) if (n.endsWith(".xcodeproj") && n !== "Pods.xcodeproj") {
    const t = readText(join12(dir, n, "project.pbxproj"));
    if (t) return t;
  }
  return void 0;
}
function parseZip(path, distribution, zip = ZipArchive.fromFile(path)) {
  const fs = new ZipBundleFS(zip);
  const app = findAppBundles(fs)[0];
  if (app) return parseMacApp(fs, app, { root: path, inputKind: "mac-app", distribution });
  if (zip.entries.some((e) => /^Payload\/[^/]+\.app\/Info\.plist$/.test(e.name))) return parseIpa(path, zip);
  throw new Error("No macOS app was found in this .zip. Zip the .app itself (right-click > Compress).");
}
function hasXcodeproj(dir) {
  return list(dir).some((n) => n.endsWith(".xcodeproj") && n !== "Pods.xcodeproj");
}
function findAndroidDir(root) {
  for (const dir of [root, join12(root, "android")]) {
    if ((exists(join12(dir, "settings.gradle")) || exists(join12(dir, "settings.gradle.kts")) || exists(join12(dir, "build.gradle")) || exists(join12(dir, "build.gradle.kts"))) && findAppModules(dir).length) {
      return dir;
    }
  }
  return void 0;
}
function list(d) {
  try {
    return readdirSync6(d);
  } catch {
    return [];
  }
}
function isDir4(p) {
  try {
    return statSync5(p).isDirectory();
  } catch {
    return false;
  }
}
function unreadable(facts) {
  const out = [];
  const project = facts.inputKind === "xcode-project" || facts.inputKind === "android-project";
  if (facts.inputKind === "expo-config" && !(facts.ios ? facts.ios.infoPlistPath : facts.android?.manifestPath))
    out.push("app.config.js/ts (purpose strings, permissions and SDK versions weren't checked). Run `npx expo config --json > .okayed/expo-config.json` and scan again");
  if (facts.ios) {
    if (facts.inputKind !== "expo-config" && !Object.keys(facts.ios.infoPlist).length) out.push("the app's Info.plist (purpose strings, background modes and export compliance weren't checked)");
    if (!facts.bundleId && facts.inputKind !== "expo-config") out.push("the bundle identifier (the wrong target may have been scanned)");
    else if (facts.bundleId && /\b(?:ui)?tests?$/i.test(facts.bundleId)) out.push(`the app target (found ${facts.bundleId}, which looks like a test target)`);
  }
  if (facts.android && facts.inputKind === "android-project") {
    if (facts.android.targetSdk === void 0 && !facts.android.targetSdkFromFlutter) out.push("targetSdk (the Google Play target API rule couldn't run)");
    if (!facts.android.manifestPath && !facts.android.manifest.packageName && !facts.android.permissions.length) out.push("AndroidManifest.xml (permissions and services weren't checked)");
  }
  if (project && facts.signals && !facts.signals.codeScanned) out.push("app source code (account, login, purchase and AI rules couldn't run)");
  if (facts.macos?.builtBinary && facts.macos.code[0]?.signed === false) out.push("the app's entitlements (it isn't code-signed)");
  return out;
}
var SCAN_001 = {
  id: "SCAN-001",
  platform: "all",
  distribution: "any",
  title: "Some checks couldn't run",
  guideline: "Okayed scan coverage",
  severity: "warning",
  confidence: "certain",
  fix: "Scan the folder that holds the .xcodeproj or Gradle settings, or scan the built app (.ipa, .apk, .aab, Mac .app/.pkg), which always contains the final values. If the project uses an unusual setup, please report it so Okayed can read it.",
  sourceUrl: "https://github.com/useokayed/action#readme",
  lastVerified: "2026-11-25",
  check(facts) {
    const list2 = unreadable(facts);
    if (!list2.length) {
      if (!facts.android?.targetSdkFromFlutter) return [];
      return [{
        severity: "info",
        confidence: "certain",
        message: "targetSdk is your Flutter SDK's default (flutter.targetSdkVersion), so the Google Play target API rule couldn't run here. Run `flutter pub get` first or scan the .aab to check it.",
        evidence: facts.android.manifestPath ? [{ file: facts.android.manifestPath }] : []
      }];
    }
    return [{
      severity: "warning",
      confidence: "certain",
      message: `Okayed couldn't read ${list2.join("; ")}. Treat this result as incomplete: a clean score here doesn't mean the app was fully checked.`,
      evidence: []
    }];
  }
};
var VERIFIED = "2026-11-22";
var VERIFIED_P8 = "2026-11-23";
var VERIFIED_P9 = "2026-11-23";
var VERIFIED_P10 = "2026-11-23";
var VERIFIED_P11 = "2026-11-25";
var GUIDELINES_URL = "https://developer.apple.com/app-store/review/guidelines/";
function shortPath(p) {
  const i = p.indexOf(".app/Contents/");
  return i >= 0 ? p.slice(i + 5).replace(/\/Contents\/MacOS\/[^/]+$/, "") : p;
}
function names(list2, max = 3) {
  const u = [...new Set(list2)];
  if (u.length <= max) return u.length > 1 ? `${u.slice(0, -1).join(", ")} and ${u[u.length - 1]}` : u[0] ?? "";
  return `${u.slice(0, max).join(", ")} and ${u.length - max} more`;
}
function plural(n, word, pluralWord = word + "s") {
  return `${n} ${n === 1 ? word : pluralWord}`;
}
function limit(arr, n = 5) {
  return arr.slice(0, n);
}
function ev(e) {
  return e ? [e] : [];
}
function majorOf(version2) {
  if (!version2) return NaN;
  const m = version2.match(/^\D*(\d+)/);
  return m ? parseInt(m[1], 10) : NaN;
}
var SEC_001 = {
  id: "SEC-001",
  platform: "all",
  distribution: "any",
  title: "Secret key inside the app",
  guideline: "Apple 1.6 Data Security / Play: User Data",
  severity: "warning",
  confidence: "likely",
  fix: "Treat the key as leaked: revoke it and make a new one. Keep the new key on a server you control and have the app call that server (for AI and payment APIs too). Only publishable keys belong in an app.",
  sourceUrl: "https://developer.apple.com/app-store/review/guidelines/#data-security",
  lastVerified: VERIFIED_P11,
  check(facts) {
    const found = facts.signals?.secrets ?? [];
    if (!found.length) return [];
    return [{
      severity: "warning",
      confidence: "likely",
      message: `The app contains what looks like a ${names(found.map((s) => s.name))}. Anyone who downloads the app can extract it and use it at your cost, or read your users' data.`,
      evidence: limit(found.map((s) => s.evidence))
    }];
  }
};
var ORIENTATIONS = ["Portrait", "PortraitUpsideDown", "LandscapeLeft", "LandscapeRight"].map((o) => `UIInterfaceOrientation${o}`);
var IOS_PLIST_001 = {
  id: "IOS-PLIST-001",
  platform: "ios",
  title: "Info.plist value App Store Connect rejects",
  guideline: "App Store Connect upload validation",
  storeCodes: ["ITMS-90060", "ITMS-90474", "ITMS-90475", "ITMS-90713"],
  severity: "blocker",
  confidence: "certain",
  fix: `Version: use one to three numbers (1.4.2) and keep words like "beta" for the build notes. iPad: support all four orientations, or set "Requires full screen" if the app truly can't rotate. Launch screen: add a launch storyboard or UILaunchScreen. Icon: put the app icon in an asset catalog so CFBundleIconName is written.`,
  sourceUrl: "https://developer.apple.com/documentation/bundleresources/information-property-list",
  lastVerified: VERIFIED_P11,
  check(facts) {
    const ios = facts.ios;
    const built = facts.inputKind === "ipa";
    if (!ios || !built && facts.inputKind !== "xcode-project" || !Object.keys(ios.infoPlist).length) return [];
    const p = ios.infoPlist;
    const at = (k) => ios.infoPlistKeyEvidence?.[k] ?? { file: ios.infoPlistPath };
    const out = [];
    const add = (message, key, detail) => out.push({ severity: "blocker", confidence: built ? "certain" : "likely", message, evidence: [{ ...at(key), detail }] });
    const v = facts.version;
    if (v !== void 0 && !/\$[({]/.test(v) && !/^\d+(?:\.\d+){0,2}$/.test(v))
      add(`The app version "${v}" isn't one to three numbers separated by periods, so App Store Connect rejects the upload (ITMS-90060).`, "CFBundleShortVersionString", `CFBundleShortVersionString = ${v}`);
    const family = ios.deviceFamily;
    if (!family?.some((f) => f === 1 || f === 2)) return out;
    const launch = Object.keys(p).some((k) => /^UILaunch(?:StoryboardName|Storyboards|Screens?)\b/.test(k) || k === "UILaunchScreen_Generation");
    if (!launch) add("No launch screen is set (UILaunchStoryboardName or UILaunchScreen). Apple requires one for every iPhone and iPad app, and rejects iPad builds without it (ITMS-90475).", "UILaunchScreen", "no launch screen key");
    const listKey = ["UISupportedInterfaceOrientations~ipad", "UISupportedInterfaceOrientations_iPad", "UISupportedInterfaceOrientations"].find((k) => k in p);
    const raw = listKey ? p[listKey] : void 0;
    const list2 = Array.isArray(raw) ? raw.map(String) : typeof raw === "string" && !raw.includes("$") ? raw.split(/\s+/).filter(Boolean) : void 0;
    const full = p.UIRequiresFullScreen === true || /^(?:YES|true)$/i.test(String(p.UIRequiresFullScreen ?? ""));
    if (family.includes(2) && list2?.length && !full) {
      const missing = ORIENTATIONS.filter((o) => !list2.includes(o));
      if (missing.length)
        add(`The app runs on iPad but doesn't support every orientation (missing ${missing.map((m) => m.replace("UIInterfaceOrientation", "")).join(", ")}). iPad multitasking needs all four unless the app requires full screen (ITMS-90474).`, listKey, `${listKey} has ${list2.length} of 4 orientations`);
    }
    if (built && !p.CFBundleIconName) add("CFBundleIconName is missing, so the app icon isn't in an asset catalog. App Store Connect rejects builds without it (ITMS-90713).", "CFBundleIconName", "CFBundleIconName not set");
    return out;
  }
};
var IOS_ICON_001 = {
  id: "IOS-ICON-001",
  platform: "ios",
  title: "App Store icon is missing or transparent",
  guideline: "App Store Connect upload validation",
  storeCodes: ["ITMS-90717", "ITMS-90704"],
  severity: "blocker",
  confidence: "likely",
  fix: "Export the 1024\xD71024 icon as a PNG without an alpha channel (in Preview: File > Export and untick Alpha) and put it in the App Store slot of the AppIcon set.",
  sourceUrl: "https://developer.apple.com/design/human-interface-guidelines/app-icons",
  lastVerified: VERIFIED_P11,
  check(facts) {
    const icon = facts.ios?.appIcon;
    if (!icon || facts.platform !== "ios") return [];
    if (icon.problem === "missing")
      return [{ severity: "blocker", confidence: "likely", message: `The app icon set ${icon.name} has no 1024\xD71024 App Store icon. App Store Connect rejects builds without one (ITMS-90704).`, evidence: [icon.evidence] }];
    if (icon.problem === "alpha")
      return [{ severity: "blocker", confidence: "likely", message: "The 1024\xD71024 App Store icon is partly transparent. App Store Connect doesn't accept icons with transparency (ITMS-90717).", evidence: [icon.evidence] }];
    if (icon.problem === "size")
      return [{ severity: "blocker", confidence: "likely", message: `The App Store icon is ${icon.size} pixels; it must be 1024\xD71024 (ITMS-90704).`, evidence: [icon.evidence] }];
    return [];
  }
};
var IOS_WEB_001 = {
  id: "IOS-WEB-001",
  platform: "ios",
  title: "Uses UIWebView, which Apple no longer accepts",
  guideline: "Apple 2.5.1",
  storeCodes: ["ITMS-90809"],
  severity: "blocker",
  confidence: "certain",
  fix: "Replace UIWebView with WKWebView. If it comes from an SDK (the evidence shows which), update the SDK or remove it.",
  sourceUrl: "https://developer.apple.com/documentation/uikit/uiwebview",
  lastVerified: VERIFIED_P11,
  check(facts) {
    const use = facts.ios?.uiWebView ?? [];
    if (!use.length) return [];
    const built = facts.inputKind === "ipa";
    return [{
      severity: "blocker",
      confidence: built ? "certain" : "likely",
      message: `${built ? "The build references" : "The code uses"} UIWebView. App Store Connect rejects new apps and updates that use it (ITMS-90809).`,
      evidence: limit(use)
    }];
  }
};
var IOS_BUILD_001 = {
  id: "IOS-BUILD-001",
  platform: "ios",
  title: "This file can't be uploaded to the App Store",
  guideline: "App Store Connect upload validation",
  storeCodes: ["ITMS-90087", "ITMS-90161", "ITMS-90046"],
  severity: "blocker",
  confidence: "certain",
  fix: "In Xcode: Product > Archive, then Distribute App > App Store Connect. For simulator code inside a framework, use the .xcframework version of the SDK, or strip the x86_64 part with lipo.",
  sourceUrl: "https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases",
  lastVerified: VERIFIED_P11,
  check(facts) {
    const b = facts.ios?.build;
    if (!b) return [];
    const out = [];
    if (b.simulatorCode.length)
      out.push({ severity: "blocker", confidence: "certain", message: `${b.simulatorCode.length === 1 ? "A binary contains" : `${b.simulatorCode.length} binaries contain`} simulator code (x86_64 or i386). App Store Connect rejects it as an unsupported architecture (ITMS-90087).`, evidence: limit(b.simulatorCode) });
    if (b.debuggable || b.provisionedDevices)
      out.push({
        severity: "warning",
        confidence: "certain",
        message: `This is a ${b.debuggable ? "development" : "ad hoc"} build, not an App Store export: ${b.debuggable ? "it's signed with get-task-allow (a debugger can attach)" : "its provisioning profile lists test devices"}. App Store Connect won't accept this file.`,
        evidence: [b.debuggable ?? b.provisionedDevices]
      });
    return out;
  }
};
var AND_MAN_001 = {
  id: "AND-MAN-001",
  platform: "android",
  title: "Manifest setting that stops install or upload",
  guideline: "Android 12 behavior changes / Play Console upload checks",
  storeCodes: ["Play Console: debuggable APK", "INSTALL_PARSE_FAILED_MANIFEST_MALFORMED"],
  severity: "blocker",
  confidence: "certain",
  fix: "Add android:exported (true only for components other apps must start, such as the launcher activity) to every component with an intent filter. Remove android:debuggable: the build type sets it. Upload the release build.",
  sourceUrl: "https://developer.android.com/about/versions/12/behavior-changes-12#exported",
  lastVerified: VERIFIED_P11,
  check(facts) {
    const a = facts.android;
    if (!a) return [];
    const out = [];
    const built = facts.inputKind !== "android-project";
    const missing = (a.targetSdk ?? 0) >= 31 ? a.manifest.missingExported ?? [] : [];
    if (missing.length)
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `${plural(missing.length, "component")} with an intent filter ${missing.length === 1 ? "doesn't" : "don't"} set android:exported (${names(missing.map((m) => m.split(".").pop()))}). From Android 12 (target 31) the app doesn't build or install without it.`,
        evidence: limit(missing.map((m) => ({ file: a.manifestPath, detail: m })))
      });
    if (a.manifest.debuggable)
      out.push({
        severity: built ? "warning" : "blocker",
        confidence: "certain",
        message: built ? "This is a debug build (android:debuggable is true). Play Console doesn't accept debuggable builds: upload the release build." : 'The manifest sets android:debuggable="true", so release builds are debuggable too. Play Console rejects them.',
        evidence: [{ file: a.manifestPath, detail: "android:debuggable = true" }]
      });
    return out;
  }
};
var PAIR = { "armeabi-v7a": "arm64-v8a", armeabi: "arm64-v8a", x86: "x86_64" };
var AND_64BIT_001 = {
  id: "AND-64BIT-001",
  platform: "android",
  title: "32-bit native code without its 64-bit version",
  guideline: "Play: 64-bit requirement",
  storeCodes: ["Play Console: 64-bit requirement"],
  severity: "blocker",
  confidence: "certain",
  fix: "Build native code for arm64-v8a (and x86_64 if you ship x86): add them to ndk.abiFilters, and update SDKs that only ship 32-bit .so files.",
  sourceUrl: "https://developer.android.com/google/play/requirements/64-bit",
  lastVerified: VERIFIED_P11,
  check(facts) {
    const a = facts.android;
    if (!a || a.formFactor !== "phone") return [];
    const abis = new Set(a.nativeLibs.map((l) => l.abi));
    const lonely = [...abis].filter((x) => PAIR[x] && !abis.has(PAIR[x]));
    if (!lonely.length) return [];
    const sure = facts.inputKind === "aab";
    return [{
      severity: sure ? "blocker" : "warning",
      confidence: sure ? "certain" : "likely",
      message: `Native code ships for ${lonely.join(" and ")} without ${[...new Set(lonely.map((x) => PAIR[x]))].join(" and ")}. Google Play requires a 64-bit version of every 32-bit architecture${sure ? "" : " (ignore this if you upload separate APKs per architecture)"}.`,
      evidence: limit(a.nativeLibs.filter((l) => lonely.includes(l.abi)).map((l) => ({ file: l.path, detail: l.abi })))
    }];
  }
};
var IOS_PERM_001 = {
  id: "IOS-PERM-001",
  platform: "apple",
  // A missing purpose string crashes the app (or blocks the request) wherever it is distributed.
  distribution: "any",
  title: "Protected resource used without a purpose string",
  guideline: "Apple 5.1.1",
  storeCodes: ["ITMS-90683"],
  severity: "blocker",
  confidence: "certain",
  fix: `Add the missing NS\u2026UsageDescription key to Info.plist (or the target's Info tab) with a specific sentence explaining why the app needs this access, e.g. "Scan receipts with the camera to add expenses automatically."`,
  sourceUrl: "https://developer.apple.com/documentation/bundleresources/information-property-list/protected-resources",
  lastVerified: VERIFIED,
  check(facts) {
    const ios = facts.ios;
    if (!ios) return [];
    if (facts.inputKind === "xcode-project" && !ios.infoPlistPath && !ios.pbxprojText) return [];
    if (facts.inputKind === "expo-config" && !ios.infoPlistPath) return [];
    const out = [];
    for (const res of protectedResourcesFor(facts.macos?.catalyst ? "ios" : facts.platform)) {
      const uses = ios.usesProtectedResources.filter((u) => u.key === res.id);
      if (!uses.length) continue;
      const missingKeys = [];
      if (!res.keys.some((k) => hasValue(ios.infoPlist[k]))) missingKeys.push(res.keys[0]);
      if (res.id === "location-always" && (facts.platform === "ios" || facts.macos?.catalyst) && !hasValue(ios.infoPlist.NSLocationWhenInUseUsageDescription)) missingKeys.push("NSLocationWhenInUseUsageDescription");
      if (!missingKeys.length) continue;
      if (facts.inputKind === "expo-config" && uses.every((u) => u.origin === "sdk")) continue;
      const fromCode = uses.some((u) => u.origin === "code");
      const fromBinary = uses.some((u) => u.origin === "binary");
      const fromPlugin = uses.some((u) => u.origin === "plugin");
      const severity = (fromCode || fromBinary || fromPlugin) && !res.missingIsWarning ? "blocker" : "warning";
      const confidence = fromCode ? "certain" : "likely";
      const how = fromCode ? "App code requests" : fromPlugin ? `Your ${facts.framework === "flutter" ? "Dart" : "JavaScript"} code calls a plugin that requests` : fromBinary ? "The app binary references" : "A linked SDK requests";
      out.push({
        severity,
        confidence,
        message: `${how} ${res.label} access, but Info.plist has no ${missingKeys.join(" / ")}. ${res.missingIsWarning ? "The system refuses the request without it." : "Apple's upload validation rejects this and the app crashes when it asks for access."}${res.note ? " " + res.note : ""}`,
        evidence: limit(uses.map((u) => u.evidence), 3)
      });
    }
    return out;
  }
};
function hasValue(v) {
  return typeof v === "string" && v.trim().length > 0;
}
var PLACEHOLDER = /\b(todo|tbd|fixme|lorem|ipsum|placeholder|test(ing)?|xxx+|asdf|foo|bar|description here|change me)\b/i;
var VAR_ONLY = /^\s*\$\([A-Z0-9_]+\)\s*$/;
var PURPOSE = /\b(to|so|for|when|while|lets?|allows?|enables?|helps?|in order|used|uses|use|so that|because|scan|share|save|upload|record|take|find|show|attach|connect|track|measure|verify|based on|get|see|view|play|import|export|add|choose|pick|select|detect|locate|nearby|recommend\w*|suggest\w*|personali[sz]\w*|send|receive|sync|unlock|search|explore|discover|navigate|remind\w*|identify|provide)\b/i;
var GENERIC = /^(this app|the app|app|\$\(PRODUCT_NAME\)|we)\s+(needs?|requires?|wants?|would like|is requesting)\s+(to\s+)?(access|permission|use)(\s+(to|of))?(\s+(your|the))?\s+[\w\s]{0,20}\.?$/i;
var IOS_PERM_002 = {
  id: "IOS-PERM-002",
  platform: "apple",
  title: "Purpose string is empty, a placeholder, or too vague",
  guideline: "Apple 5.1.1(ii)",
  severity: "warning",
  confidence: "likely",
  fix: 'Rewrite the purpose string to say what feature uses the data and how it helps the user. Apple rejects vague text like "This app needs camera access". Good: "Take a photo of your plant so we can identify it."',
  sourceUrl: "https://developer.apple.com/design/human-interface-guidelines/privacy#Requesting-permission",
  lastVerified: VERIFIED,
  check(facts) {
    const ios = facts.ios;
    if (!ios) return [];
    if (facts.inputKind === "expo-config" && !ios.infoPlistPath) return [];
    const out = [];
    for (const [key, value] of Object.entries(ios.infoPlist)) {
      if (!/UsageDescription$/.test(key) && key !== "NFCReaderUsageDescription") continue;
      const at = ios.infoPlistKeyEvidence?.[key] ?? { file: ios.infoPlistPath };
      const evidence = [{ ...at, detail: `${key} = "${String(value).slice(0, 120)}"` }];
      if (typeof value !== "string" || !value.trim()) {
        out.push({ severity: "warning", confidence: "certain", message: `${key} is empty.`, evidence });
        continue;
      }
      const v = value.trim();
      if (VAR_ONLY.test(v)) {
        out.push({ severity: "warning", confidence: "likely", message: `${key} is only a build variable (${v}). Make sure it resolves to a real sentence in every configuration.`, evidence });
      } else if (PLACEHOLDER.test(v)) {
        out.push({ severity: "warning", confidence: "certain", message: `${key} looks like placeholder text: "${v}".`, evidence });
      } else if (!isLatin(v)) {
        continue;
      } else if (GENERIC.test(v)) {
        out.push({ severity: "warning", confidence: "likely", message: `${key} says the app needs access but not why: "${v}".`, evidence });
      } else if (v.length < 25) {
        out.push({ severity: "warning", confidence: "likely", message: `${key} is very short (${v.length} characters): "${v}". Reviewers reject purpose strings that don't explain the feature.`, evidence });
      } else if (!PURPOSE.test(v)) {
        out.push({ severity: "warning", confidence: "likely", message: `${key} may not explain why access is needed: "${v}".`, evidence });
      }
    }
    return out;
  }
};
function isLatin(s) {
  const letters = s.replace(/[^\p{L}]/gu, "");
  if (!letters.length) return true;
  return letters.replace(/[A-Za-z]/g, "").length / letters.length < 0.2;
}
var IOS_PRIV_001 = {
  id: "IOS-PRIV-001",
  platform: "apple",
  title: "App has no privacy manifest (PrivacyInfo.xcprivacy)",
  guideline: "Apple 5.1.1 / Privacy manifest requirements",
  storeCodes: ["ITMS-91053"],
  severity: "blocker",
  confidence: "certain",
  fix: "In Xcode: File > New > File\u2026 > App Privacy, name it PrivacyInfo.xcprivacy, tick your app target, then declare tracking, collected data types and every required-reason API category the app uses.",
  sourceUrl: "https://developer.apple.com/documentation/bundleresources/privacy-manifest-files",
  lastVerified: VERIFIED,
  check(facts) {
    const ios = facts.ios;
    if (!ios || facts.inputKind === "expo-config") return [];
    const appManifests = ios.privacyManifests.filter((m) => m.owner === "app");
    const usesRequired = ios.usesRequiredReasonApis.filter((u) => u.origin !== "sdk");
    const out = [];
    if (!appManifests.length && facts.platform === "macos") {
      return [{
        severity: "info",
        confidence: "likely",
        message: `No app-level PrivacyInfo.xcprivacy found${facts.inputKind === "xcode-project" ? "" : " (Contents/Resources/PrivacyInfo.xcprivacy)"}. Apple asks apps on all platforms to describe the data they collect there; required-reason API declarations aren't required on macOS.`,
        evidence: []
      }];
    }
    if (!appManifests.length) {
      const strong = usesRequired.length > 0;
      out.push({
        severity: strong ? "blocker" : "warning",
        confidence: strong ? usesRequired.some((u) => u.origin === "code") ? "certain" : "likely" : "likely",
        message: strong ? `No app-level PrivacyInfo.xcprivacy found, and the app uses required-reason APIs (${[...new Set(usesRequired.map((u) => u.key.replace("NSPrivacyAccessedAPICategory", "")))].join(", ")}). Apple doesn't accept builds that leave these undeclared (ITMS-91053).` : "No app-level PrivacyInfo.xcprivacy found. Apple expects every app to describe its data use; it becomes mandatory as soon as you use a required-reason API (UserDefaults counts).",
        evidence: limit(usesRequired.map((u) => u.evidence), 3)
      });
      return out;
    }
    for (const m of appManifests) {
      if (m.inBuild === false) {
        out.push({
          severity: "blocker",
          confidence: "likely",
          message: `${m.path} exists but isn't referenced in the Xcode project, so it won't be copied into the app bundle.`,
          evidence: [{ file: m.path, detail: "not found in project.pbxproj" }]
        });
      }
    }
    return out;
  }
};
var IOS_PRIV_002 = {
  id: "IOS-PRIV-002",
  platform: "apple",
  title: "Required-reason API used but not declared in the privacy manifest",
  guideline: "Apple 5.1.1 / Required reason API",
  storeCodes: ["ITMS-91053"],
  severity: "blocker",
  confidence: "certain",
  fix: "Add an NSPrivacyAccessedAPITypes entry to PrivacyInfo.xcprivacy with the category and at least one approved reason code that matches how the app uses the API.",
  sourceUrl: "https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api",
  lastVerified: VERIFIED,
  check(facts) {
    if (facts.platform === "macos") return [];
    const ios = facts.ios;
    if (!ios || facts.inputKind === "expo-config") return [];
    const declared = /* @__PURE__ */ new Map();
    for (const m of ios.privacyManifests.filter((x) => x.owner === "app")) {
      for (const t of m.data.NSPrivacyAccessedAPITypes ?? []) {
        if (t.NSPrivacyAccessedAPIType) declared.set(t.NSPrivacyAccessedAPIType, [...declared.get(t.NSPrivacyAccessedAPIType) ?? [], ...t.NSPrivacyAccessedAPITypeReasons ?? []]);
      }
    }
    const manifestPath = ios.privacyManifests.find((m) => m.owner === "app")?.path;
    const out = [];
    for (const cat of REQUIRED_REASON_CATEGORIES) {
      const uses = ios.usesRequiredReasonApis.filter((u) => u.key === cat.key && u.origin !== "sdk");
      const reasons = declared.get(cat.key);
      const reasonList = cat.reasons.map((r) => `${r.code} (${r.summary})`).join("; ");
      if (uses.length && reasons === void 0) {
        out.push({
          severity: "blocker",
          confidence: uses.some((u) => u.origin === "code") ? "certain" : "likely",
          message: `${cat.label} used, but ${cat.key} is not declared in the app's privacy manifest. Valid reasons: ${reasonList}.`,
          evidence: limit(uses.map((u) => u.evidence), 3)
        });
        continue;
      }
      if (reasons !== void 0) {
        if (!reasons.length) {
          out.push({ severity: "blocker", confidence: "certain", message: `${cat.key} is declared with no reason codes. Add at least one: ${reasonList}.`, evidence: [{ file: manifestPath, detail: cat.key }] });
        }
        const valid = new Set(cat.reasons.map((r) => r.code));
        const bad = reasons.filter((r) => !valid.has(r));
        if (bad.length) {
          out.push({ severity: "warning", confidence: "certain", message: `${cat.key} lists reason code(s) Apple doesn't define: ${bad.join(", ")}. Valid: ${reasonList}.`, evidence: [{ file: manifestPath, detail: bad.join(", ") }] });
        }
      }
    }
    return out;
  }
};
var APPLE_LISTED_SDKS = [
  "Abseil",
  "AFNetworking",
  "Alamofire",
  "AppAuth",
  "BoringSSL",
  "openssl_grpc",
  "Capacitor",
  "Charts",
  "connectivity_plus",
  "Cordova",
  "device_info_plus",
  "DKImagePickerController",
  "DKPhotoGallery",
  "FBAEMKit",
  "FBLPromises",
  "FBSDKCoreKit",
  "FBSDKCoreKit_Basics",
  "FBSDKLoginKit",
  "FBSDKShareKit",
  "file_picker",
  "FirebaseABTesting",
  "FirebaseAuth",
  "FirebaseCore",
  "FirebaseCoreDiagnostics",
  "FirebaseCoreExtension",
  "FirebaseCoreInternal",
  "FirebaseCrashlytics",
  "FirebaseDynamicLinks",
  "FirebaseFirestore",
  "FirebaseInstallations",
  "FirebaseMessaging",
  "FirebaseRemoteConfig",
  "Flutter",
  "flutter_inappwebview",
  "flutter_local_notifications",
  "fluttertoast",
  "FMDB",
  "geolocator_apple",
  "GoogleDataTransport",
  "GoogleSignIn",
  "GoogleToolboxForMac",
  "GoogleUtilities",
  "grpcpp",
  "GTMAppAuth",
  "GTMSessionFetcher",
  "hermes",
  "image_picker_ios",
  "IQKeyboardManager",
  "IQKeyboardManagerSwift",
  "Kingfisher",
  "leveldb",
  "Lottie",
  "MBProgressHUD",
  "nanopb",
  "OneSignal",
  "OneSignalCore",
  "OneSignalExtension",
  "OneSignalOutcomes",
  "OpenSSL",
  "OrderedSet",
  "package_info",
  "package_info_plus",
  "path_provider",
  "path_provider_ios",
  "Promises",
  "Protobuf",
  "Reachability",
  "RealmSwift",
  "RxCocoa",
  "RxRelay",
  "RxSwift",
  "SDWebImage",
  "share_plus",
  "shared_preferences_ios",
  "SnapKit",
  "sqflite",
  "Starscream",
  "SVProgressHUD",
  "SwiftyGif",
  "SwiftyJSON",
  "Toast",
  "UnityFramework",
  "url_launcher",
  "url_launcher_ios",
  "video_player_avfoundation",
  "wakelock",
  "webview_flutter_wkwebview"
];
var LOWER = new Map(APPLE_LISTED_SDKS.map((n) => [n.toLowerCase(), n]));
var ALIASES = {
  "firebase-ios-sdk": ["FirebaseCore", "FirebaseCoreInternal", "FirebaseInstallations"],
  "facebook-ios-sdk": ["FBSDKCoreKit", "FBSDKCoreKit_Basics", "FBAEMKit"],
  "lottie-ios": ["Lottie"],
  "lottie-spm": ["Lottie"],
  "googlesignin-ios": ["GoogleSignIn"],
  "promises": ["Promises", "FBLPromises"],
  "swift-protobuf": ["Protobuf"],
  "grpc-binary": ["grpcpp"],
  "abseil-cpp-binary": ["Abseil"],
  "realm-swift": ["RealmSwift"],
  "onesignal-ios-sdk": ["OneSignal"],
  "onesignal-xcframework": ["OneSignal"],
  "iqkeyboardmanager": ["IQKeyboardManagerSwift"],
  "gtm-session-fetcher": ["GTMSessionFetcher"],
  "gtmappauth": ["GTMAppAuth"],
  "google-utilities": ["GoogleUtilities"],
  "googledatatransport": ["GoogleDataTransport"],
  "leveldb": ["leveldb"],
  "nanopb": ["nanopb"],
  "reachability.swift": ["Reachability"],
  "dgcharts": ["Charts"],
  "react-native": ["hermes"]
};
function appleListedNamesFor(depName) {
  const root = depName.split("/")[0].trim();
  const lower = root.toLowerCase();
  const hit = LOWER.get(lower);
  if (hit) return [hit];
  return ALIASES[lower] ?? [];
}
var IOS_PRIV_003 = {
  id: "IOS-PRIV-003",
  platform: "apple",
  title: "Commonly used SDK ships without a privacy manifest",
  guideline: "Apple third-party SDK requirements",
  storeCodes: ["ITMS-91061"],
  severity: "blocker",
  confidence: "certain",
  fix: "Update the SDK to a version that includes PrivacyInfo.xcprivacy (and a signature if it's a binary framework). Most popular SDKs added one in 2024. If none exists, replace the SDK.",
  sourceUrl: "https://developer.apple.com/support/third-party-SDK-requirements",
  lastVerified: VERIFIED,
  check(facts) {
    const ios = facts.ios;
    if (!ios || facts.inputKind === "expo-config") return [];
    const out = [];
    const unverifiable = [];
    for (const sdk of ios.linkedSdks) {
      const listed = appleListedNamesFor(sdk.name);
      if (!listed.length) continue;
      if (sdk.filesAvailable && sdk.hasPrivacyManifest === false) {
        const mac = facts.platform === "macos";
        out.push({
          severity: mac ? "warning" : "blocker",
          confidence: mac || sdk.via === "bundle" ? "likely" : "certain",
          message: `${sdk.name}${sdk.version ? ` ${sdk.version}` : ""} is on Apple's list of SDKs that must include a privacy manifest, and none was found in its files.`,
          evidence: [sdk.evidence]
        });
      } else if (!sdk.filesAvailable) {
        unverifiable.push({ name: `${sdk.name}${sdk.version ? ` ${sdk.version}` : ""}`, evidence: sdk.evidence });
      }
    }
    if (unverifiable.length) {
      out.push({
        severity: "info",
        confidence: "likely",
        message: `${unverifiable.length} SDK(s) on Apple's privacy-manifest list are used, but their files aren't in this folder so we can't confirm they ship a manifest: ${unverifiable.map((u) => u.name).join(", ")}. Run \`pod install\` before scanning, or scan the built .ipa to verify.`,
        evidence: limit(unverifiable.map((u) => u.evidence), 5)
      });
    }
    return out;
  }
};
var sigById2 = new Map(SDK_SIGNATURES.map((s) => [s.id, s]));
var IOS_RESOURCE_TYPES = {
  location: ["PreciseLocation"],
  "location-always": ["PreciseLocation"],
  contacts: ["Contacts"],
  photos: ["PhotosOrVideos"],
  microphone: ["AudioData"],
  health: ["Health", "Fitness"]
};
function uniq(a) {
  return [...new Set(a)];
}
function buildDataUse(facts) {
  if (facts.ios) return appleDataUse(facts);
  if (facts.android) return playDataUse(facts);
  return void 0;
}
function appleDataUse(facts) {
  const ios = facts.ios;
  const sources = [];
  const withManifest = /* @__PURE__ */ new Set();
  for (const m of ios.privacyManifests) {
    if (m.inBuild === false) continue;
    const types = uniq(
      (m.data.NSPrivacyCollectedDataTypes ?? []).map((t) => appleDataType(t?.NSPrivacyCollectedDataType)?.key).filter((k) => !!k)
    );
    if (m.owner !== "app") withManifest.add(m.owner.toLowerCase());
    if (!types.length) continue;
    sources.push({
      kind: m.owner === "app" ? "app-manifest" : "sdk-manifest",
      name: m.owner === "app" ? "Your app's privacy manifest" : m.owner,
      dataTypes: types,
      evidence: { file: m.path, detail: "NSPrivacyCollectedDataTypes" }
    });
  }
  for (const sdk of ios.linkedSdks) {
    const sig = sigById2.get(sdk.id);
    if (!sig?.collects.length) continue;
    if (sdk.filesAvailable && withManifest.has(sdk.name.toLowerCase())) continue;
    sources.push({
      kind: "sdk",
      name: sig.name,
      dataTypes: uniq(sig.collects.filter((k) => appleDataType(k))),
      evidence: sdk.evidence,
      verified: !!sig.verified?.apple,
      docs: sig.privacyDocs
    });
  }
  const byResource = /* @__PURE__ */ new Map();
  for (const u of ios.usesProtectedResources) if (IOS_RESOURCE_TYPES[u.key] && !byResource.has(u.key)) byResource.set(u.key, u.evidence);
  for (const [key, evidence] of byResource) {
    sources.push({ kind: "permission", name: key, dataTypes: IOS_RESOURCE_TYPES[key], evidence });
  }
  return { store: "app_store", sources };
}
function playDataUse(facts) {
  const a = facts.android;
  const sources = [];
  for (const sdk of a.linkedSdks) {
    const sig = sigById2.get(sdk.id);
    if (!sig) continue;
    const types = sig.playCollects ?? uniq(sig.collects.flatMap((k) => playTypesForApple(k)));
    if (!types.length) continue;
    sources.push({
      kind: "sdk",
      name: sig.name,
      dataTypes: types,
      evidence: sdk.evidence,
      verified: !!(sig.playCollects && sig.verified?.play),
      docs: sig.playDocs ?? sig.privacyDocs
    });
  }
  const seen = /* @__PURE__ */ new Set();
  for (const p of a.permissions) {
    const types = PLAY_PERMISSION_TYPES[p];
    if (!types || seen.has(p)) continue;
    seen.add(p);
    sources.push({
      kind: "permission",
      name: p.replace("android.permission.", ""),
      dataTypes: types,
      evidence: a.manifest.permissionEvidence?.[p] ?? { file: a.manifestPath, detail: p }
    });
  }
  return { store: "google_play", sources };
}
var RANK = { "sdk-manifest": 0, "app-manifest": 0, sdk: 1, permission: 2 };
function strength(sources) {
  if (sources.some((s) => s.kind === "sdk-manifest" || s.kind === "app-manifest")) return { severity: "blocker", confidence: "certain" };
  if (sources.some((s) => s.kind === "sdk" && s.verified)) return { severity: "blocker", confidence: "likely" };
  return { severity: "warning", confidence: "likely" };
}
function covered(store, type, declared) {
  if (declared.has(type)) return true;
  if (store === "google_play") return PLAY_EQUIVALENT.some((g) => g.includes(type) && g.some((t) => declared.has(t)));
  return false;
}
function compareDeclaration(use, decl) {
  const declared = new Set(decl.collectsData ? decl.dataTypes : []);
  const missing = /* @__PURE__ */ new Map();
  for (const src of use.sources) {
    for (const t of src.dataTypes) {
      if (covered(use.store, t, declared)) continue;
      const list2 = missing.get(t) ?? [];
      list2.push(src);
      missing.set(t, list2);
    }
  }
  const label = use.store === "app_store" ? appleLabel : playLabel;
  const out = [...missing].map(([dataType, sources]) => ({
    store: use.store,
    dataType,
    label: label(dataType),
    ...strength(sources),
    sources: [...sources].sort((a, b) => RANK[a.kind] - RANK[b.kind])
  }));
  const sev = { blocker: 0, warning: 1, info: 2 };
  return out.sort((a, b) => sev[a.severity] - sev[b.severity] || (a.confidence === b.confidence ? 0 : a.confidence === "certain" ? -1 : 1) || a.label.localeCompare(b.label));
}
var listJoin = (a) => a.length <= 1 ? a.join("") : `${a.slice(0, -1).join(", ")} and ${a[a.length - 1]}`;
var verb = (names2, one, many) => names2.length > 1 ? many : one;
function mismatchMessage(m, decl) {
  const where = m.store === "app_store" ? "App Store privacy label" : "Google Play Data safety form";
  const it = decl.collectsData ? "it" : `"${m.label}"`;
  const lead = decl.collectsData ? `"${m.label}" isn't in your ${where}` : `Your ${where} says the app collects no data`;
  const names2 = (kind, verified2) => m.sources.filter((s) => s.kind === kind && (verified2 === void 0 || !!s.verified === verified2)).map((s) => s.name);
  const parts = [];
  if (m.sources.some((s) => s.kind === "app-manifest")) parts.push(`your app's own privacy manifest lists ${it}`);
  const manifests = names2("sdk-manifest");
  if (manifests.length) parts.push(`${listJoin(manifests)} ${verb(manifests, "lists", "list")} ${it} in ${verb(manifests, "its", "their")} privacy manifest`);
  const verified = names2("sdk", true);
  if (verified.length) parts.push(`${listJoin(verified)} ${verb(verified, "collects", "collect")} ${it} by default (per ${verb(verified, "its", "their")} own docs)`);
  const typical = names2("sdk", false);
  if (typical.length) parts.push(`${listJoin(typical)} typically ${verb(typical, "collects", "collect")} ${it}`);
  if (parts.length) return `${lead}, but ${parts.join("; ")}.`;
  const perms = names2("permission");
  return `${lead}, but the app can read ${decl.collectsData ? "this data" : `"${m.label}"`} through the ${listJoin(perms)} permission${perms.length > 1 ? "s" : ""}. If it ever leaves the device (sent to your server or an SDK), declare it; if it stays on the device, you can ignore this.`;
}
function mismatchFinding(m, decl) {
  const evidence = m.sources.slice(0, 5).map((s) => ({ ...s.evidence, detail: s.evidence.detail ?? s.name }));
  if (decl.file) evidence.push({ file: decl.file, detail: `declared: ${decl.collectsData ? decl.dataTypes.length + " data types" : "no data collected"}` });
  return { severity: m.severity, confidence: m.confidence, message: mismatchMessage(m, decl), evidence };
}
var IOS_PRIV_005 = {
  id: "IOS-PRIV-005",
  platform: "apple",
  title: "Data the build collects is missing from the App Store privacy label",
  guideline: "Apple 5.1.2 / App Privacy details",
  severity: "blocker",
  confidence: "certain",
  fix: "In App Store Connect open your app \u2192 App Privacy, add each missing data type with its purpose (and whether it's linked to the user or used for tracking), then publish the label. If an SDK collects it, check the SDK's privacy manifest or docs for the right answers. Or stop collecting it.",
  sourceUrl: "https://developer.apple.com/app-store/app-privacy-details/",
  lastVerified: "2026-11-23",
  check(facts) {
    const decl = facts.storeDeclarations?.appStore;
    if (!decl || !facts.ios) return [];
    const use = buildDataUse(facts);
    if (!use) return [];
    return compareDeclaration(use, decl).map((m) => mismatchFinding(m, decl));
  }
};
var IOS_EXP_001 = {
  id: "IOS-EXP-001",
  platform: "apple",
  title: "Export compliance key missing (ITSAppUsesNonExemptEncryption)",
  guideline: "App Store Connect export compliance",
  severity: "info",
  confidence: "certain",
  fix: "Add ITSAppUsesNonExemptEncryption to Info.plist. Set it to NO if the app only uses HTTPS / Apple's built-in encryption; otherwise set YES and upload your export documentation.",
  sourceUrl: "https://developer.apple.com/documentation/security/complying-with-encryption-export-regulations",
  lastVerified: VERIFIED,
  check(facts) {
    const ios = facts.ios;
    if (!ios) return [];
    if (facts.inputKind === "xcode-project" && !ios.infoPlistPath && !ios.pbxprojText) return [];
    if (facts.inputKind === "expo-config" && !ios.infoPlistPath) return [];
    if ("ITSAppUsesNonExemptEncryption" in ios.infoPlist) return [];
    return [{
      severity: "info",
      confidence: "certain",
      message: "Info.plist doesn't set ITSAppUsesNonExemptEncryption, so every upload stops at a manual export-compliance question in App Store Connect / TestFlight.",
      evidence: [{ file: ios.infoPlistPath, detail: "key not present" }]
    }];
  }
};
var TEXT_FIELDS = /* @__PURE__ */ new Set(["name", "subtitle", "description", "keywords", "promotional_text", "release_notes"]);
var URL_FIELDS = /* @__PURE__ */ new Set(["marketing_url", "support_url", "privacy_url"]);
var OTHER_PLATFORMS = /\b(android|google play|play store|windows phone|blackberry|galaxy store|huawei appgallery)\b/i;
var PLACEHOLDER2 = /\b(lorem ipsum|todo|tbd|fixme|placeholder|insert [\w\s]{1,20} here|your app name|xxx+)\b/i;
var PROFANITY = /\b(fuck\w*|shit\w*|bitch\w*|cunt\w*|asshole\w*|motherfuck\w*)\b/i;
var LIMITS = { name: 30, subtitle: 30, keywords: 100, promotional_text: 170, description: 4e3 };
var IOS_META_001 = {
  id: "IOS-META-001",
  platform: "apple",
  title: "App Store listing text problems",
  guideline: "Apple 2.3.1 / 2.3.10 / 2.3.7",
  severity: "warning",
  confidence: "certain",
  fix: "Edit the listing text in fastlane/metadata (or App Store Connect): remove references to other platforms, placeholder text and profanity, keep fields within Apple's length limits, and use full https:// URLs.",
  sourceUrl: "https://developer.apple.com/app-store/review/guidelines/#accurate-metadata",
  lastVerified: VERIFIED,
  check(facts) {
    const out = [];
    for (const f of facts.listing) {
      const text = f.text.trim();
      const evidence = [{ file: f.file, line: 1, detail: `${f.locale}/${f.field}` }];
      if (TEXT_FIELDS.has(f.field)) {
        const other = text.match(OTHER_PLATFORMS);
        if (other) out.push({ severity: "warning", confidence: "certain", message: `${f.locale} ${f.field} mentions "${other[0]}". Apple rejects listings that reference other mobile platforms (2.3.10).`, evidence });
        const ph = text.match(PLACEHOLDER2);
        if (ph) out.push({ severity: "warning", confidence: "certain", message: `${f.locale} ${f.field} contains placeholder text: "${ph[0]}".`, evidence });
        const bad = text.match(PROFANITY);
        if (bad) out.push({ severity: "warning", confidence: "likely", message: `${f.locale} ${f.field} contains possible profanity ("${bad[0]}").`, evidence });
        const max = LIMITS[f.field];
        if (max && [...text].length > max) out.push({ severity: "warning", confidence: "certain", message: `${f.locale} ${f.field} is ${[...text].length} characters; App Store Connect allows ${max}.`, evidence });
      }
      if (URL_FIELDS.has(f.field) && text) {
        let ok = false;
        try {
          const u = new URL(text);
          ok = (u.protocol === "https:" || u.protocol === "http:") && u.hostname.includes(".") && !/example\.(com|org)$/.test(u.hostname);
        } catch {
          ok = false;
        }
        if (!ok) out.push({ severity: "warning", confidence: "certain", message: `${f.locale} ${f.field} isn't a valid public URL: "${text}".`, evidence });
      }
    }
    return out;
  }
};
var AND_SDK_001 = {
  id: "AND-SDK-001",
  platform: "android",
  title: "targetSdkVersion below Google Play's requirement",
  guideline: "Play: Target API level requirements",
  storeCodes: ["Play Console: target API level"],
  severity: "blocker",
  confidence: "certain",
  fix: "Raise targetSdk in the app module's build.gradle to the required level, then test the behaviour changes for each Android version you skip.",
  sourceUrl: "https://developer.android.com/google/play/requirements/target-sdk",
  lastVerified: VERIFIED,
  check(facts, { policy, now }) {
    const a = facts.android;
    if (!a || a.targetSdk === void 0) return [];
    const req = policy.android.targetSdk;
    if (now < new Date(req.effectiveDate)) return [];
    const required = req[a.formFactor];
    if (a.targetSdk >= required) return [];
    const label = { phone: "phone/tablet", wear: "Wear OS", auto: "Android Automotive", tv: "Android TV", xr: "Android XR" }[a.formFactor];
    return [{
      severity: "blocker",
      confidence: "certain",
      message: `targetSdk is ${a.targetSdk}. Since ${req.effectiveDate}, new apps and updates for ${label} must target API ${required} or higher. Play Console will block the upload.`,
      evidence: ev(a.targetSdkSource)
    }];
  }
};
var AND_SDK_002 = {
  id: "AND-SDK-002",
  platform: "android",
  title: "Next target API deadline is within 90 days",
  guideline: "Play: Target API level requirements",
  severity: "info",
  confidence: "certain",
  fix: "Plan the targetSdk upgrade now so the next release isn't blocked.",
  sourceUrl: "https://developer.android.com/google/play/requirements/target-sdk",
  lastVerified: VERIFIED,
  check(facts, { policy, now }) {
    const a = facts.android;
    const next = policy.android.nextTargetSdk;
    if (!a || a.targetSdk === void 0 || !next) return [];
    const date = new Date(next.effectiveDate);
    const days2 = Math.ceil((date.getTime() - now.getTime()) / 864e5);
    if (days2 < 0 || days2 > 90) return [];
    const required = next[a.formFactor];
    if (a.targetSdk >= required) return [];
    return [{ severity: "info", confidence: "certain", message: `In ${days2} days (${next.effectiveDate}) Play will require targetSdk ${required}; this app targets ${a.targetSdk}.`, evidence: ev(a.targetSdkSource) }];
  }
};
var TYPE_PERMISSION = {
  camera: "android.permission.FOREGROUND_SERVICE_CAMERA",
  connectedDevice: "android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE",
  dataSync: "android.permission.FOREGROUND_SERVICE_DATA_SYNC",
  health: "android.permission.FOREGROUND_SERVICE_HEALTH",
  location: "android.permission.FOREGROUND_SERVICE_LOCATION",
  mediaPlayback: "android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK",
  mediaProcessing: "android.permission.FOREGROUND_SERVICE_MEDIA_PROCESSING",
  mediaProjection: "android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION",
  microphone: "android.permission.FOREGROUND_SERVICE_MICROPHONE",
  phoneCall: "android.permission.FOREGROUND_SERVICE_PHONE_CALL",
  remoteMessaging: "android.permission.FOREGROUND_SERVICE_REMOTE_MESSAGING",
  specialUse: "android.permission.FOREGROUND_SERVICE_SPECIAL_USE",
  systemExempted: "android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED",
  shortService: null,
  fileManagement: null
};
var PREREQ = {
  camera: ["android.permission.CAMERA"],
  microphone: ["android.permission.RECORD_AUDIO"],
  location: ["android.permission.ACCESS_COARSE_LOCATION", "android.permission.ACCESS_FINE_LOCATION"]
};
var AND_FGS_001 = {
  id: "AND-FGS-001",
  platform: "android",
  title: "Foreground service type or permission missing",
  guideline: "Play: Foreground service requirements (Android 14+)",
  severity: "blocker",
  confidence: "certain",
  fix: "Add android:foregroundServiceType to each <service> that calls startForeground(), and declare both FOREGROUND_SERVICE and the matching FOREGROUND_SERVICE_<TYPE> permission. Then fill in the foreground service declaration in Play Console.",
  sourceUrl: "https://developer.android.com/develop/background-work/services/fgs/service-types",
  lastVerified: VERIFIED,
  check(facts) {
    const a = facts.android;
    if (!a) return [];
    if (a.targetSdk !== void 0 && a.targetSdk < 34) return [];
    const perms = new Set(a.permissions);
    const out = [];
    const pkg = a.manifest.packageName ?? facts.bundleId ?? "";
    for (const s of a.manifest.services) {
      const simple = s.name.split(".").pop() ?? s.name;
      const types = s.foregroundServiceTypes ?? [];
      const where = { file: s.manifestFile ?? a.manifestPath, line: s.line };
      if (types.length) {
        if (!perms.has("android.permission.FOREGROUND_SERVICE")) {
          out.push({ severity: "blocker", confidence: "certain", message: `${s.name} declares a foreground service type but the app doesn't request android.permission.FOREGROUND_SERVICE.`, evidence: [{ ...where, detail: s.name }] });
        }
        for (const t of types) {
          const need = TYPE_PERMISSION[t];
          if (need === void 0) continue;
          if (need && !perms.has(need)) {
            out.push({ severity: "blocker", confidence: "certain", message: `${s.name} has foregroundServiceType="${t}" but ${need} is not declared. startForeground() throws a SecurityException on Android 14+.`, evidence: [{ ...where, detail: `${s.name} \u2192 ${t}` }] });
          }
          const pre = PREREQ[t];
          if (pre && !pre.some((p) => perms.has(p))) {
            out.push({ severity: "warning", confidence: "certain", message: `${s.name} uses type "${t}", which also needs ${pre.join(" or ")} granted at runtime. It isn't declared in the manifest.`, evidence: [{ ...where, detail: `${s.name} \u2192 ${t}` }] });
          }
        }
        continue;
      }
      if (!s.rawTypeMissing) continue;
      if (a.hasSource && a.startForegroundClasses.includes(simple)) {
        out.push({ severity: "blocker", confidence: "certain", message: `${s.name} calls startForeground() but has no android:foregroundServiceType. On Android 14+ this throws MissingForegroundServiceTypeException.`, evidence: [{ ...where, detail: s.name }] });
      } else if (!a.hasSource && perms.has("android.permission.FOREGROUND_SERVICE") && (s.name.startsWith(pkg) || s.name.startsWith("."))) {
        out.push({ severity: "warning", confidence: "likely", message: `${s.name} has no foregroundServiceType, and the app requests FOREGROUND_SERVICE. If this service calls startForeground(), it will crash on Android 14+.`, evidence: [{ ...where, detail: s.name }] });
      }
    }
    return out;
  }
};
var SENSITIVE = {
  "android.permission.ACCESS_BACKGROUND_LOCATION": "Background location needs a Play Console declaration, a video of the feature, and a prominent in-app disclosure before the permission prompt.",
  "android.permission.MANAGE_EXTERNAL_STORAGE": "All-files access is only allowed for file managers, backup, antivirus and similar core uses, and needs a Play Console declaration.",
  "android.permission.QUERY_ALL_PACKAGES": "Seeing all installed apps needs a Play Console declaration and a core use case; most apps should use <queries> instead.",
  "android.permission.SCHEDULE_EXACT_ALARM": "Exact alarms need a Play Console declaration; non-calendar/alarm apps should use inexact alarms or WorkManager.",
  "android.permission.USE_EXACT_ALARM": "USE_EXACT_ALARM is restricted to alarm clock and calendar apps and needs a declaration.",
  "android.permission.READ_SMS": "SMS access is restricted to default SMS handlers and approved exceptions (Permissions Declaration Form).",
  "android.permission.SEND_SMS": "SMS access is restricted to default SMS handlers and approved exceptions (Permissions Declaration Form).",
  "android.permission.RECEIVE_SMS": "SMS access is restricted to default SMS handlers and approved exceptions (Permissions Declaration Form).",
  "android.permission.READ_CALL_LOG": "Call log access is restricted to default phone/assistant handlers and approved exceptions (Permissions Declaration Form).",
  "android.permission.WRITE_CALL_LOG": "Call log access is restricted to default phone/assistant handlers and approved exceptions.",
  "android.permission.PROCESS_OUTGOING_CALLS": "Call log/handling permissions are restricted to default handlers.",
  "android.permission.READ_MEDIA_IMAGES": "Photo and video permissions are only for apps whose core purpose needs broad media access. Others must use the Android photo picker.",
  "android.permission.READ_MEDIA_VIDEO": "Photo and video permissions are only for apps whose core purpose needs broad media access. Others must use the Android photo picker.",
  "android.permission.REQUEST_INSTALL_PACKAGES": "Installing other packages is only allowed when it's the app's core purpose (e.g. app stores, enterprise device management).",
  "android.permission.BIND_ACCESSIBILITY_SERVICE": "Accessibility services need a Play Console declaration and a prominent disclosure."
};
var AND_PERM_001 = {
  id: "AND-PERM-001",
  platform: "android",
  title: "Sensitive permission needs a Play Console declaration",
  guideline: "Play: Permissions and APIs that access sensitive information",
  severity: "warning",
  confidence: "certain",
  fix: `Remove the permission if the feature isn't core to the app (check merged manifests from SDKs too, and use tools:node="remove" if a library adds it). Otherwise complete the matching declaration in Play Console > App content before submitting.`,
  sourceUrl: "https://support.google.com/googleplay/android-developer/answer/9888170",
  lastVerified: VERIFIED,
  check(facts) {
    const a = facts.android;
    if (!a) return [];
    const out = [];
    for (const p of a.permissions) {
      const why = SENSITIVE[p];
      if (why) out.push({ severity: "warning", confidence: "certain", message: `${p.replace("android.permission.", "")}: ${why}`, evidence: [a.manifest.permissionEvidence?.[p] ?? { file: a.manifestPath, detail: p }] });
    }
    for (const s of a.manifest.boundServices ?? []) {
      const vpn = /VPN/.test(s.permission);
      out.push({
        severity: "warning",
        confidence: "certain",
        message: vpn ? `${s.name.split(".").pop()} is a VPN service: only apps whose core feature is a VPN (or parental control, security\u2026) may use it, and Play needs the VPN service declaration.` : `${s.name.split(".").pop()} is an accessibility service: Play needs the AccessibilityService declaration, a prominent disclosure and consent in the app.`,
        evidence: [{ file: a.manifestPath, detail: `${s.name} (${s.permission})` }]
      });
    }
    return out;
  }
};
var AND_BILL_001 = {
  id: "AND-BILL-001",
  platform: "android",
  title: "Google Play Billing Library is too old",
  guideline: "Play: Billing Library deprecation",
  storeCodes: ["Play Console: Billing Library version"],
  severity: "blocker",
  confidence: "certain",
  fix: "Upgrade com.android.billingclient:billing(-ktx) to the required major version and migrate removed APIs (see Google's migration guide). If you use RevenueCat or another wrapper, upgrade that SDK instead.",
  sourceUrl: "https://developer.android.com/google/play/billing/deprecation-faq",
  lastVerified: VERIFIED,
  check(facts, { policy, now }) {
    const a = facts.android;
    if (!a?.playBillingVersion) return [];
    const req = policy.android.billing;
    if (now < new Date(req.effectiveDate)) return [];
    const major = majorOf(a.playBillingVersion);
    if (!Number.isFinite(major) || major >= req.minMajor) return [];
    return [{
      severity: "blocker",
      confidence: "certain",
      message: `Play Billing Library ${a.playBillingVersion} is used. Since ${req.effectiveDate}, new apps and updates must use version ${req.minMajor} or later.`,
      evidence: ev(a.playBillingEvidence)
    }];
  }
};
var AND_16KB_001 = {
  id: "AND-16KB-001",
  platform: "android",
  title: "Native libraries not aligned for 16 KB memory pages",
  guideline: "Play: 16 KB page size compatibility",
  storeCodes: ["Play Console: 16 KB page size"],
  severity: "blocker",
  confidence: "certain",
  fix: "Rebuild native code with NDK r28+ (16 KB alignment is the default) or add -Wl,-z,max-page-size=16384, upgrade SDKs that ship .so files, and use AGP 8.5.1+ so uncompressed libraries are zip-aligned at 16 KB. Verify with `zipalign -c -P 16 -v 4 app.apk`.",
  sourceUrl: "https://developer.android.com/guide/practices/page-sizes",
  lastVerified: VERIFIED,
  check(facts, { policy, now }) {
    const a = facts.android;
    if (!a) return [];
    const bad = a.nativeLibs.filter((l) => l.minLoadAlign !== void 0 && l.minLoadAlign < 16384 || l.zipMisaligned16k);
    if (!bad.length) return [];
    const deadline = policy.android.pageSize16k.enforcementDate;
    const enforced = now >= new Date(deadline);
    return [{
      severity: enforced ? "blocker" : "warning",
      confidence: "certain",
      message: `${bad.length} 64-bit native librar${bad.length === 1 ? "y is" : "ies are"} not 16 KB compatible. ${enforced ? "Play now blocks" : `From ${deadline} Play will block`} app updates that don't support 16 KB page sizes, and these libraries crash on 16 KB devices.`,
      evidence: limit(bad.map((l) => ({
        file: l.path,
        detail: l.zipMisaligned16k && !(l.minLoadAlign !== void 0 && l.minLoadAlign < 16384) ? "stored uncompressed but not 16 KB zip-aligned" : `LOAD segment alignment 0x${(l.minLoadAlign ?? 0).toString(16)} (needs 0x4000)`
      })), 10)
    }];
  }
};
var AND_DS_001 = {
  id: "AND-DS-001",
  platform: "android",
  title: "Data the build collects is missing from the Google Play Data safety form",
  guideline: "Play: User Data policy (Data safety section)",
  severity: "blocker",
  confidence: "certain",
  fix: "In Play Console open App content \u2192 Data safety, add each missing data type (collected and/or shared, with its purposes), and submit the form. For SDKs, use the vendor's Data safety guidance. Or remove the SDK or permission.",
  sourceUrl: "https://support.google.com/googleplay/android-developer/answer/10787469",
  lastVerified: "2026-11-23",
  check(facts) {
    const decl = facts.storeDeclarations?.googlePlay;
    if (!decl || !facts.android) return [];
    const use = buildDataUse(facts);
    if (!use) return [];
    return compareDeclaration(use, decl).map((m) => mismatchFinding(m, decl));
  }
};
var LEGACY = {
  NSLocationAlwaysUsageDescription: ["location-always", "location"],
  NSLocationUsageDescription: ["location", "location-always"]
};
var IOS_PERM_003 = {
  id: "IOS-PERM-003",
  platform: "apple",
  title: "Purpose string for a resource the app doesn't seem to use",
  guideline: "Apple 5.1.1(iii) Data Minimization",
  severity: "info",
  confidence: "likely",
  fix: "If no feature uses this resource, delete the purpose string (for Expo, set the plugin option to false, e.g. microphonePermission: false). Reviewers ask about permissions that don't match a feature. If an SDK or plugin does use it, keep the key and make sure its text explains that feature.",
  sourceUrl: "https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage",
  lastVerified: VERIFIED_P8,
  check(facts) {
    const ios = facts.ios;
    if (!ios) return [];
    if (facts.inputKind !== "xcode-project" && facts.inputKind !== "expo-config") return [];
    if (!facts.signals?.codeScanned) return [];
    if (facts.inputKind === "expo-config" && !ios.infoPlistPath) return [];
    const deps = ios.allDependencies ?? ios.linkedSdks.map((s) => s.name);
    const trackingSdk = ios.linkedSdks.some((s) => SDK_SIGNATURES.find((g) => g.id === s.id)?.tracking);
    const out = [];
    for (const [key, value] of Object.entries(ios.infoPlist)) {
      if (!/UsageDescription$/.test(key) || typeof value !== "string" || !value.trim()) continue;
      const ids = LEGACY[key] ?? IOS_PROTECTED_RESOURCES.filter((r) => r.keys.includes(key)).map((r) => r.id);
      if (key === "NSLocationWhenInUseUsageDescription") ids.push("location-always");
      if (!ids.length) continue;
      const used = ios.usesProtectedResources.some((u) => ids.includes(u.key)) || deps.some((d) => ids.some((id) => IOS_RESOURCE_HINTS[id]?.depHint.test(d))) || ids.includes("tracking") && trackingSdk;
      if (used) continue;
      const label = IOS_PROTECTED_RESOURCES.find((r) => r.id === ids[0])?.label ?? key;
      const at = ios.infoPlistKeyEvidence?.[key] ?? { file: ios.infoPlistPath };
      out.push({
        severity: "info",
        confidence: "likely",
        message: `${key} is set, but no ${label} access was found in your ${facts.signals.searched.filter((s) => s !== "UI strings").join("/") || "app"} code or in dependency names. Apple asks apps to request only the data they need; remove the key if nothing uses it.`,
        evidence: [{ ...at, detail: `${key} = "${value.slice(0, 100)}"` }]
      });
    }
    return out;
  }
};
var IOS_PRIV_004 = {
  id: "IOS-PRIV-004",
  platform: "apple",
  title: "Tracking SDK without App Tracking Transparency set up",
  guideline: "Apple 5.1.2(i) / App Tracking Transparency",
  severity: "warning",
  confidence: "likely",
  fix: "If the app uses these SDKs for personalised ads, ad measurement or sharing data with data brokers, add NSUserTrackingUsageDescription, call ATTrackingManager.requestTrackingAuthorization before tracking, and set NSPrivacyTracking = true with NSPrivacyTrackingDomains in PrivacyInfo.xcprivacy. If you only use them without tracking (e.g. non-personalised ads, deep links), turn tracking off in the SDK and you can ignore this.",
  sourceUrl: "https://developer.apple.com/app-store/user-privacy-and-data-use/",
  lastVerified: VERIFIED_P8,
  check(facts) {
    const ios = facts.ios;
    if (!ios) return [];
    if (facts.inputKind === "expo-config" && !ios.infoPlistPath) return [];
    const trackers = ios.linkedSdks.filter((s) => SDK_SIGNATURES.find((g) => g.id === s.id)?.tracking);
    if (!trackers.length) return [];
    const sdkNames = names(trackers.map((t) => SDK_SIGNATURES.find((g) => g.id === t.id).name));
    const attKey = typeof ios.infoPlist.NSUserTrackingUsageDescription === "string" && ios.infoPlist.NSUserTrackingUsageDescription.trim().length > 0;
    const out = [];
    if (!attKey) {
      out.push({
        severity: "warning",
        confidence: "likely",
        message: `${sdkNames} can track people across apps and websites (ads / attribution), but Info.plist has no NSUserTrackingUsageDescription. If the app tracks, Apple requires the App Tracking Transparency prompt first; Apple counts an SDK that combines your users' data with other companies' data as tracking even if you don't use it for that.`,
        evidence: limit(trackers.map((t) => t.evidence), 3)
      });
      return out;
    }
    const manifests = ios.privacyManifests.filter((m) => m.inBuild !== false);
    const declared = manifests.some((m) => m.data.NSPrivacyTracking === true);
    const canSeeSdkManifests = trackers.every((t) => t.filesAvailable);
    const appManifest = manifests.find((m) => m.owner === "app");
    if (!declared && appManifest && canSeeSdkManifests) {
      out.push({
        severity: "warning",
        confidence: "likely",
        message: `The app asks for tracking permission and links ${sdkNames}, but no privacy manifest sets NSPrivacyTracking to true. If the app tracks, declare it (with NSPrivacyTrackingDomains) so iOS can block those domains when people say no.`,
        evidence: [{ file: appManifest.path, detail: `NSPrivacyTracking = ${String(appManifest.data.NSPrivacyTracking ?? "not set")}` }]
      });
    }
    return out;
  }
};
var IOS_ACCT_001 = {
  id: "IOS-ACCT-001",
  platform: "apple",
  title: "Account creation without in-app account deletion",
  guideline: "Apple 5.1.1(v)",
  severity: "warning",
  confidence: "likely",
  fix: 'Add a clear "Delete account" option in the app (usually in Settings or Profile) that deletes the account and its personal data, not just deactivates it. You may link straight to a web page that finishes the deletion. If people sign in with Apple, also revoke their tokens with the Sign in with Apple REST API.',
  sourceUrl: "https://developer.apple.com/support/offering-account-deletion-in-your-app/",
  lastVerified: VERIFIED_P8,
  check(facts) {
    const s = facts.signals;
    if (!s?.codeScanned) return [];
    const creation = [...s.accountCreation, ...s.thirdPartyLogin, ...s.privacyLogin];
    if (!creation.length || s.accountDeletion.length) return [];
    const siwa = s.privacyLogin.length > 0;
    return [{
      severity: "warning",
      confidence: "likely",
      message: `The app appears to let people create an account (${names(creation.map((c2) => c2.name))}), but no in-app account deletion was found in ${names(s.searched)}. Apps that support account creation must let people start deleting their account inside the app.${siwa ? " With Sign in with Apple, deletion should also revoke the user's Apple tokens." : ""}`,
      evidence: limit(creation.map((c2) => c2.evidence), 3)
    }];
  }
};
var IOS_LOGIN_001 = {
  id: "IOS-LOGIN-001",
  platform: "apple",
  title: "Social login without an equivalent privacy-focused login",
  guideline: "Apple 4.8 Login Services",
  severity: "warning",
  confidence: "likely",
  fix: "Offer Sign in with Apple (or another login that only collects name and email, lets people hide their email, and doesn't track for ads without consent) next to the social login buttons. Not needed if the app only uses your own accounts, is an education/enterprise app using existing org accounts, uses a government ID, or is a client for that third-party service.",
  sourceUrl: "https://developer.apple.com/app-store/review/guidelines/#login-services",
  lastVerified: VERIFIED_P8,
  check(facts) {
    const s = facts.signals;
    if (!s || !s.thirdPartyLogin.length || s.privacyLogin.length) return [];
    return [{
      severity: "warning",
      confidence: "likely",
      message: `${names(s.thirdPartyLogin.map((l) => l.name))} is used for sign-in, but no Sign in with Apple was found. If it sets up the user's main account, Apple requires an equivalent login option that limits data to name and email, lets people keep their email private, and doesn't collect interactions for advertising without consent.`,
      evidence: limit(s.thirdPartyLogin.map((l) => l.evidence), 3)
    }];
  }
};
var IOS_AI_001 = {
  id: "IOS-AI-001",
  platform: "apple",
  title: "Data sent to a third-party AI without a consent screen",
  guideline: "Apple 5.1.2(i)",
  severity: "warning",
  confidence: "likely",
  fix: "Before the first request, show a screen that names the AI provider, says what is sent (text, photos, voice\u2026), and asks people to agree; remember their answer and let them change it. Mention the provider in your privacy policy and privacy label. Calling the provider from your own server also keeps the API key out of the app.",
  sourceUrl: "https://developer.apple.com/app-store/review/guidelines/#data-use-and-sharing",
  lastVerified: VERIFIED_P8,
  check(facts) {
    const s = facts.signals;
    if (!s?.codeScanned || !s.aiProviders.length || s.aiConsent.length) return [];
    return [{
      severity: "warning",
      confidence: "likely",
      message: `The app uses ${names(s.aiProviders.map((p) => p.name))}, but no text asking permission to share data with an AI service was found in ${names(s.searched)}. Apple requires apps to clearly say when personal data is shared with third parties, including third-party AI, and to get explicit permission first.`,
      evidence: limit(s.aiProviders.map((p) => p.evidence), 3)
    }];
  }
};
var AND_PERM_002 = {
  id: "AND-PERM-002",
  platform: "android",
  title: "Permission declared but not used",
  guideline: "Play: Permissions and APIs that access sensitive information",
  severity: "info",
  confidence: "likely",
  fix: "Remove the uses-permission line from AndroidManifest.xml if no current feature needs it (for Expo, remove it from android.permissions or add it to android.blockedPermissions). Play only allows sensitive permissions that current features need. Check first that an SDK doesn't rely on it.",
  sourceUrl: "https://support.google.com/googleplay/android-developer/answer/9888170",
  lastVerified: VERIFIED_P8,
  check(facts) {
    const a = facts.android;
    if (!a?.permissionUsage) return [];
    const out = [];
    const where = facts.signals?.searched.filter((s) => s !== "UI strings").join("/") || "app";
    for (const use of ANDROID_PERMISSION_USES) {
      const declared = use.permissions.filter((p) => a.permissions.includes(p));
      if (!declared.length || declared.some((p) => a.permissionUsage[p])) continue;
      const short = declared.map((p) => p.replace("android.permission.", ""));
      out.push({
        severity: "info",
        confidence: "likely",
        message: `${names(short)} ${declared.length > 1 ? "are" : "is"} declared, but no ${use.label} use was found in your ${where} code or dependency names. Remove unused permissions: Play only allows the ones current features need.`,
        evidence: declared.map((p) => a.manifest.permissionEvidence?.[p] ?? { file: a.manifestPath, detail: p })
      });
    }
    return out;
  }
};
var AND_AI_001 = {
  id: "AND-AI-001",
  platform: "android",
  title: "Generative AI without an in-app way to report content",
  guideline: "Play: AI-Generated Content",
  severity: "warning",
  confidence: "likely",
  fix: 'Add a "Report" or flag button on AI responses / generated images that sends the report to you without leaving the app, and use the reports to improve filtering. Not needed if AI only summarizes non-AI content or improves an existing feature (e.g. suggested email drafts).',
  sourceUrl: "https://support.google.com/googleplay/android-developer/answer/13985936",
  lastVerified: VERIFIED_P8,
  check(facts) {
    const s = facts.signals;
    if (!facts.android || !s?.codeScanned || !s.aiProviders.length || s.aiReporting.length) return [];
    return [{
      severity: "warning",
      confidence: "likely",
      message: `The app uses ${names(s.aiProviders.map((p) => p.name))}, but no way to report or flag AI-generated content was found in ${names(s.searched)}. If the app generates content (chatbots, AI images, voice or video), Google Play requires in-app reporting of offensive content without leaving the app.`,
      evidence: limit(s.aiProviders.map((p) => p.evidence), 3)
    }];
  }
};
var MAC_SBX_001 = {
  id: "MAC-SBX-001",
  platform: "macos",
  title: "App Sandbox is not enabled",
  guideline: "Apple 2.4.5(i)",
  storeCodes: ["ITMS-90296"],
  severity: "blocker",
  confidence: "certain",
  fix: "In Xcode, select each macOS target (the app and every helper, login item and XPC service) > Signing & Capabilities > + Capability > App Sandbox, then tick only the access it needs. Command-line helper tools need com.apple.security.app-sandbox and com.apple.security.inherit.",
  sourceUrl: "https://developer.apple.com/documentation/security/app-sandbox",
  lastVerified: VERIFIED_P9,
  check(facts) {
    const mac = facts.macos;
    if (!mac) return [];
    const out = [];
    const main2 = mac.code.find((c2) => c2.role === "main");
    if (main2 && main2.signed !== false && main2.entitlements?.[SANDBOX] !== true) {
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: mac.builtBinary ? "The app's code signature has no com.apple.security.app-sandbox entitlement. Mac App Store apps must be sandboxed, and App Store Connect rejects the upload." : `The ${main2.path} target doesn't enable App Sandbox (no com.apple.security.app-sandbox in its entitlements file, and ENABLE_APP_SANDBOX isn't YES). Mac App Store apps must be sandboxed.`,
        evidence: [main2.evidence]
      });
    }
    const helpers = mac.code.filter((c2) => c2.role !== "main" && c2.executable && c2.signed !== false && c2.entitlements?.[SANDBOX] !== true);
    if (helpers.length) {
      out.push({
        severity: "blocker",
        // An XPC service nested inside another helper, with no entitlements at all, may be covered by its parent; say "likely".
        confidence: mac.builtBinary && helpers.every((h) => Object.keys(h.entitlements ?? {}).length || (h.path.match(/\.(?:app|xpc|appex)\//g) ?? []).length < 3) ? "certain" : "likely",
        message: `${helpers.length === 1 ? "A helper isn't" : `${helpers.length} helpers aren't`} sandboxed: ${names(helpers.map((h) => `${shortPath(h.path)} (${h.role.replace(/-/g, " ")})`))}. Every executable in a Mac App Store app, including login items, XPC services and tools, needs its own App Sandbox entitlement.`,
        evidence: limit(helpers.map((h) => h.evidence), 5)
      });
    }
    return out;
  }
};
var MAC_SBX_002 = {
  id: "MAC-SBX-002",
  platform: "macos",
  title: "Uses App Sandbox temporary-exception entitlements",
  guideline: "Apple 2.4.5(i) / App Sandbox information",
  severity: "warning",
  confidence: "certain",
  fix: "Remove each temporary exception you can replace with a standard entitlement (user-selected files, security-scoped bookmarks, scripting-targets\u2026). For the ones you keep, give App Store Connect the usage information Apple asks for: why the app needs it and what it enables. If it works around a missing sandbox feature, file a Feedback Assistant report and include the ID.",
  sourceUrl: "https://developer.apple.com/help/app-store-connect/reference/app-uploads/app-sandbox-information",
  lastVerified: VERIFIED_P9,
  check(facts) {
    const list2 = facts.macos?.temporaryExceptionEntitlements ?? [];
    if (!list2.length) return [];
    const keys = [...new Set(list2.map((t) => t.key.replace("com.apple.security.temporary-exception.", "")))];
    const out = {
      severity: "warning",
      confidence: "certain",
      message: `The app uses ${keys.length} temporary-exception ${keys.length === 1 ? "entitlement" : "entitlements"} (${names(keys, 4)}). Apple needs usage information for each one, and App Review questions exceptions that a standard entitlement could replace.`,
      evidence: limit(list2.map((t) => t.evidence), 5)
    };
    return [out];
  }
};
function macResourceUse(facts) {
  const out = /* @__PURE__ */ new Map();
  const add = (id, u) => out.set(id, [...out.get(id) ?? [], u]);
  for (const u of facts.ios?.usesProtectedResources ?? []) {
    const id = SHARED_TO_MAC[u.key] ?? (u.key === "apple-events" ? "apple-events" : void 0);
    if (id && u.origin !== "sdk") add(id, u);
  }
  for (const u of facts.macos?.resourceUse ?? []) add(u.key, u);
  return out;
}
var MAC_SBX_003 = {
  id: "MAC-SBX-003",
  platform: "macos",
  title: "Sandbox entitlements don't match what the app uses",
  guideline: "Apple 2.4.5(i)",
  severity: "warning",
  confidence: "likely",
  fix: "In Xcode > Signing & Capabilities > App Sandbox, tick the access the app really uses (Camera, Audio Input, Outgoing Connections, User Selected File\u2026) and untick the rest. Without the entitlement the sandbox silently blocks the feature; an entitlement nothing uses gets questioned in review.",
  sourceUrl: "https://developer.apple.com/documentation/xcode/configuring-the-macos-app-sandbox",
  lastVerified: VERIFIED_P9,
  check(facts) {
    const mac = facts.macos;
    if (!mac || mac.sandboxEnabled !== true) return [];
    const ents = mac.code.find((c2) => c2.role === "main")?.entitlements ?? {};
    const on = (k) => ents[k] === true || Array.isArray(ents[k]) && ents[k].length > 0;
    const use = macResourceUse(facts);
    const out = [];
    for (const r of MAC_RESOURCES) {
      const hits = use.get(r.id);
      if (hits?.length && !r.sandbox.some(on)) {
        out.push({
          // Mac Catalyst: iPad code is often left out of the Mac build or unavailable there (e.g. the camera picker).
          severity: mac.catalyst ? "info" : "warning",
          confidence: "likely",
          message: `The ${hits.some((h) => h.origin === "code") ? "code" : "app binary"} uses ${r.label}, but the app has no ${r.sandbox[0]} entitlement, so the sandbox blocks it.${mac.catalyst ? " Ignore this if that code is iPad-only and not in the Mac Catalyst build." : ""}`,
          evidence: [...limit(hits.map((h) => h.evidence), 2), ...mac.entitlementsEvidence ? [mac.entitlementsEvidence] : []]
        });
      }
    }
    if (!mac.builtBinary && facts.signals?.codeScanned) {
      const deps = facts.ios?.allDependencies ?? [];
      for (const r of MAC_RESOURCES) {
        if (!r.checkUnused) continue;
        const key = r.sandbox.find(on);
        if (!key || use.get(r.id)?.length) continue;
        const shared = Object.entries(SHARED_TO_MAC).filter(([, v]) => v === r.id).map(([k]) => k);
        if (deps.some((d) => shared.some((id) => IOS_RESOURCE_HINTS[id]?.depHint.test(d)))) continue;
        out.push({
          severity: "warning",
          confidence: "likely",
          message: `The app is entitled to ${r.label} (${key}), but no code using it was found. Reviewers ask apps to request only the access they need; remove it if nothing uses it.`,
          evidence: mac.entitlementsEvidence ? [{ ...mac.entitlementsEvidence, detail: key }] : []
        });
      }
    }
    return out;
  }
};
var LABEL = { kext: "a kernel extension", installer: "an installer package", "privileged-helper": "a privileged helper tool (SMJobBless)", "launch-daemon": "a launch daemon (runs as root)" };
var MAC_SELF_001 = {
  id: "MAC-SELF-001",
  platform: "macos",
  title: "Bundles an installer or kext, or installs outside its container",
  guideline: "Apple 2.4.5(ii), (iv), (v)",
  severity: "blocker",
  confidence: "certain",
  fix: "Ship one self-contained app bundle: remove bundled .pkg installers, kernel extensions, privileged helpers and launch daemons, drop code that asks for root, and keep files inside the app's container (or folders the user picks). Extra features belong in the app itself or in app/system extensions Apple allows.",
  sourceUrl: GUIDELINES_URL,
  lastVerified: VERIFIED_P9,
  check(facts) {
    const mac = facts.macos;
    if (!mac) return [];
    const out = [];
    for (const kind of Object.keys(LABEL)) {
      const items = mac.bundledInstallers.filter((b) => b.kind === kind);
      if (!items.length) continue;
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `The app contains ${LABEL[kind]}. Mac App Store apps must be self-contained, may not install code in shared locations, and may not ask for root.`,
        evidence: limit(items.map((i) => i.evidence), 3)
      });
    }
    const root = mac.installOutsideContainer.filter((u) => u.key !== "shared-location");
    if (root.length) {
      out.push({
        severity: "blocker",
        confidence: "likely",
        message: `The ${root.some((u) => u.origin === "code") ? "code" : "app binary"} uses ${[...new Set(root.map((u) => u.symbol))].join(", ")}. Mac App Store apps may not escalate to root, use setuid, or install kexts and packages.`,
        evidence: limit(root.map((u) => u.evidence), 3)
      });
    }
    const shared = mac.installOutsideContainer.filter((u) => u.key === "shared-location");
    if (shared.length) {
      out.push({
        severity: "warning",
        confidence: "likely",
        message: "The app refers to shared system folders (/Library/\u2026, /usr/local/\u2026, /Applications). A sandboxed app can't write there, and installing files outside the container isn't allowed. Check it only reads these paths.",
        evidence: limit(shared.map((u) => u.evidence), 3)
      });
    }
    return out;
  }
};
var MAC_CODE_001 = {
  id: "MAC-CODE-001",
  platform: "macos",
  title: "Runs or loads code that isn't part of the app",
  guideline: "Apple 2.5.2 / 2.4.5(iv)",
  severity: "warning",
  confidence: "likely",
  fix: "Make sure the app only runs code that ships inside its own signed bundle. Don't download scripts, plug-ins or binaries and run them, don't make downloaded files executable, and don't use a shell to do what an API can. If you run your own bundled helper, embed it signed and sandboxed (with com.apple.security.inherit).",
  sourceUrl: GUIDELINES_URL,
  lastVerified: VERIFIED_P9,
  check(facts) {
    const hits = facts.macos?.codeExecution ?? [];
    if (!hits.length) return [];
    const what = [...new Set(hits.map((h) => h.symbol))];
    return [{
      severity: "warning",
      confidence: "likely",
      message: `The ${hits.some((h) => h.origin === "code") ? "code" : "app binary"} ${what.join("; ")}. Apps may not download, install or run code that adds or changes features. Fine if it only runs code shipped in the bundle; be ready to explain it in review notes.`,
      evidence: limit(hits.map((h) => h.evidence), 4)
    }];
  }
};
var MAC_UPD_001 = {
  id: "MAC-UPD-001",
  platform: "macos",
  title: "Includes its own auto-updater",
  guideline: "Apple 2.4.5(vii)",
  severity: "blocker",
  confidence: "certain",
  fix: "Remove Sparkle (or the other updater) from the Mac App Store build: the store delivers updates. If you also sell outside the store, use a separate build configuration or target that links the updater only for the direct-download version, and drop SUFeedURL from the store build's Info.plist.",
  sourceUrl: GUIDELINES_URL,
  lastVerified: VERIFIED_P9,
  check(facts) {
    const ups = facts.macos?.autoUpdaters ?? [];
    if (!ups.length) return [];
    const strong = ups.some((u) => u.via !== "code" && u.via !== "binary") || ups.some((u) => u.evidence.detail?.includes(".framework is bundled"));
    return [{
      severity: "blocker",
      confidence: strong ? "certain" : "likely",
      message: `The app includes ${names(ups.map((u) => u.name))}. Mac App Store apps must get updates only through the Mac App Store; other update mechanisms are not allowed.`,
      evidence: limit(ups.map((u) => u.evidence), 4)
    }];
  }
};
var MAC_SIGN_001 = {
  id: "MAC-SIGN-001",
  platform: "macos",
  distribution: "any",
  title: "Code isn't signed, or is signed by different teams",
  guideline: "Apple code signing requirements",
  severity: "blocker",
  confidence: "certain",
  fix: "Archive in Xcode and export with Distribute App, which signs the app and everything inside it with your team's certificate. If you copy in prebuilt frameworks or helpers, enable Code Sign On Copy so they are re-signed with your team.",
  sourceUrl: "https://developer.apple.com/documentation/security/resolving-common-notarization-issues",
  lastVerified: VERIFIED_P9,
  check(facts) {
    const mac = facts.macos;
    if (!mac) return [];
    const out = [];
    const store = mac.distribution === "app-store";
    if (mac.builtBinary) {
      const unsigned = mac.code.filter((c2) => c2.signed === false);
      if (unsigned.length) {
        out.push({
          severity: "blocker",
          confidence: "certain",
          message: `${unsigned.length === 1 ? "1 piece of code isn't" : `${unsigned.length} pieces of code aren't`} code-signed (no signature, or only the linker's ad-hoc one): ${names(unsigned.map((c2) => shortPath(c2.path)))}. ${store ? "App Store Connect" : "The notary service"} rejects builds with unsigned code.`,
          evidence: limit(unsigned.map((c2) => c2.evidence), 5)
        });
      }
      const main2 = mac.code.find((c2) => c2.role === "main");
      const team = main2?.teamId;
      if (team) {
        const others = mac.code.filter((c2) => c2.signed && c2.teamId && c2.teamId !== team && c2.certKind !== "apple");
        if (others.length) {
          const relaxed = main2?.entitlements?.["com.apple.security.cs.disable-library-validation"] === true;
          out.push({
            severity: relaxed ? "warning" : "blocker",
            confidence: "likely",
            message: `The app is signed by team ${team}, but ${names(others.map((c2) => `${shortPath(c2.path)} (${c2.teamId})`))} ${others.length === 1 ? "is" : "are"} signed by another team. macOS refuses to load code from another team into a hardened or sandboxed app${relaxed ? " unless library validation is off, as it is here" : ""}.`,
            evidence: limit(others.map((c2) => c2.evidence), 5)
          });
        }
      }
      if (store && main2?.signed && (main2.adhoc || main2.certKind === "development")) {
        out.push({
          severity: "warning",
          confidence: "likely",
          message: `This build is signed for development (${main2.adhoc ? "ad hoc" : main2.authority ?? "development certificate"}). App Store uploads need an Apple Distribution signature; if you scanned a debug build, scan the one you export instead.`,
          evidence: [main2.evidence]
        });
      }
      const pkg = mac.installer;
      if (store && pkg && (!pkg.signed || pkg.certKind !== "mac-app-distribution")) {
        out.push({
          severity: "blocker",
          confidence: "likely",
          message: pkg.signed ? `The installer package is signed with "${pkg.authority ?? "an unknown certificate"}". Mac App Store packages must be signed with your Mac Installer Distribution (3rd Party Mac Developer Installer) certificate.` : "The installer package isn't signed. Mac App Store packages must be signed with your Mac Installer Distribution (3rd Party Mac Developer Installer) certificate.",
          evidence: [{ detail: "installer package signature (xar)" }]
        });
      }
    } else {
      const teams = /* @__PURE__ */ new Map();
      for (const c2 of mac.code) if (c2.teamId) teams.set(c2.teamId, [...teams.get(c2.teamId) ?? [], c2.path]);
      if (teams.size > 1) {
        out.push({
          severity: "warning",
          confidence: "likely",
          message: `Targets use different DEVELOPMENT_TEAM values (${[...teams].map(([t, p]) => `${t}: ${names(p, 2)}`).join("; ")}). Everything embedded in the app should be signed by the app's team.`,
          evidence: limit(mac.code.filter((c2) => c2.teamId).map((c2) => c2.evidence), 4)
        });
      }
    }
    return out;
  }
};
var MAC_LOGIN_001 = {
  id: "MAC-LOGIN-001",
  platform: "macos",
  title: "Starts at login without the approved API or the user's consent",
  guideline: "Apple 2.4.5(iii)",
  severity: "warning",
  confidence: "likely",
  fix: `Register the login item with SMAppService.mainApp (macOS 13+) or SMAppService.loginItem(identifier:), and only after the user turns on a "Launch at login" setting in your app. Don't write LaunchAgents plists or use the old LSSharedFileList / System Events tricks.`,
  sourceUrl: "https://developer.apple.com/documentation/servicemanagement/smappservice",
  lastVerified: VERIFIED_P9,
  check(facts) {
    const mac = facts.macos;
    if (!mac?.loginItems.length) return [];
    const out = [];
    const api = (id) => LOGIN_APIS.find((l) => l.id === id);
    const unapproved = mac.loginItems.filter((l) => api(l.id) && !api(l.id).approved);
    if (unapproved.length) {
      out.push({
        severity: "warning",
        confidence: "likely",
        message: `The app starts itself at login with ${[...new Set(unapproved.map((l) => l.name))].join(", ")} instead of SMAppService. That bypasses the Login Items list the user controls.`,
        evidence: limit(unapproved.map((l) => l.evidence), 3)
      });
    }
    const legacy = mac.loginItems.filter((l) => l.id === "SMLoginItemSetEnabled");
    if (legacy.length && !mac.loginItems.some((l) => l.id === "SMAppService" || l.id === "LaunchAtLogin")) {
      out.push({
        severity: "info",
        confidence: "likely",
        message: "The app uses SMLoginItemSetEnabled, which Apple replaced with SMAppService in macOS 13. It still works, but move to SMAppService when you can drop older macOS versions.",
        evidence: limit(legacy.map((l) => l.evidence), 2)
      });
    }
    if (!mac.loginConsent.length) {
      out.push({
        severity: "warning",
        confidence: "likely",
        message: `The app can launch at login, but no "Launch at login" / "Open at login" setting was found in its text. Apps may not run at login without the user's consent; turn it on only from a user choice, and mention it in review notes.`,
        evidence: limit(mac.loginItems.map((l) => l.evidence), 3)
      });
    }
    return out;
  }
};
var TEXT_FIELDS2 = /* @__PURE__ */ new Set(["name", "subtitle", "description", "keywords", "promotional_text", "release_notes"]);
var OTHER_DESKTOP = /\b(windows(?! (?:key|menu|title))(?: ?(?:10|11|pc|version|users?))?|microsoft store|linux|ubuntu|chrome ?os|chromebook)\b/i;
var OTHER_DEVICE = /iphone|ipad|watch|apple ?tv|vision|APP_I(?:PHONE|PAD)/i;
var MAC_META_001 = {
  id: "MAC-META-001",
  platform: "macos",
  title: "Mac listing mentions other platforms, or screenshots aren't a Mac size",
  guideline: "Apple 2.3.10 / 2.3.3",
  severity: "warning",
  confidence: "certain",
  fix: "Remove references to Windows, Linux or other non-Apple platforms from the Mac listing. Upload Mac screenshots in a 16:10 size App Store Connect accepts (1280\xD7800, 1440\xD7900, 2560\xD71600 or 2880\xD71800) that show the app in use.",
  sourceUrl: "https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications",
  lastVerified: VERIFIED_P9,
  check(facts, ctx) {
    const out = [];
    for (const f of facts.listing) {
      if (!TEXT_FIELDS2.has(f.field)) continue;
      const m = f.text.match(OTHER_DESKTOP);
      if (m) {
        out.push({
          severity: "warning",
          confidence: "likely",
          message: `${f.locale} ${f.field} mentions "${m[0]}". Apple asks Mac listings to focus on the Mac and leave out other platforms.`,
          evidence: [{ file: f.file, line: 1, detail: `${f.locale}/${f.field}` }]
        });
      }
    }
    const sizes = ctx.policy.macos?.screenshotSizes ?? [];
    const bad = (facts.macos?.screenshots ?? []).filter((s) => !OTHER_DEVICE.test(s.file) && s.width && s.height && !sizes.some(([w, h]) => w === s.width && h === s.height));
    if (bad.length && sizes.length) {
      out.push({
        severity: "warning",
        confidence: "certain",
        message: `${bad.length === 1 ? "1 screenshot isn't" : `${bad.length} screenshots aren't`} a Mac App Store size (${limit(bad, 3).map((b) => `${b.width}\xD7${b.height}`).join(", ")}). App Store Connect accepts ${sizes.map(([w, h]) => `${w}\xD7${h}`).join(", ")}.`,
        evidence: limit(bad.map((b) => ({ file: b.file, detail: `${b.width}\xD7${b.height}` })), 5)
      });
    }
    return out;
  }
};
var MAC_DIST_001 = {
  id: "MAC-DIST-001",
  platform: "macos",
  distribution: "direct",
  title: "Hardened Runtime is off (outside the store)",
  guideline: "Notarization requirements",
  severity: "blocker",
  confidence: "certain",
  fix: "In Xcode, add the Hardened Runtime capability to the app and every helper/tool target (ENABLE_HARDENED_RUNTIME = YES), or sign with `codesign --options runtime`. Then tick the Resource Access items the app uses (Camera, Audio Input, Location, Apple Events\u2026), or those features stop working.",
  sourceUrl: "https://developer.apple.com/documentation/security/hardened-runtime",
  lastVerified: VERIFIED_P9,
  check(facts) {
    const mac = facts.macos;
    if (!mac) return [];
    const out = [];
    const off = mac.code.filter((c2) => c2.executable && c2.signed !== false && c2.hardenedRuntime === false);
    if (off.length) {
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `Hardened Runtime is off for ${names(off.map((c2) => shortPath(c2.path)))}. The notary service rejects executables without it ("The executable does not have the hardened runtime enabled"), and Gatekeeper then blocks the app.`,
        evidence: limit(off.map((c2) => c2.evidence), 5)
      });
    }
    const main2 = mac.code.find((c2) => c2.role === "main");
    if (main2?.hardenedRuntime && main2.entitlements?.[SANDBOX] !== true) {
      const ents = main2.entitlements ?? {};
      const use = macResourceUse(facts);
      for (const r of MAC_RESOURCES) {
        if (!r.hardened || ents[r.hardened] === true) continue;
        const hits = use.get(r.id);
        if (!hits?.length) continue;
        out.push({
          severity: "warning",
          confidence: "likely",
          message: `The app uses ${r.label}, but its Hardened Runtime entitlements don't include ${r.hardened}, so macOS blocks that access.`,
          evidence: [...limit(hits.map((h) => h.evidence), 2), main2.evidence]
        });
      }
    }
    return out;
  }
};
var KIND_LABEL = {
  "apple-distribution": "Apple Distribution (App Store) certificate",
  "mac-app-distribution": "Mac App Distribution certificate",
  development: "development certificate",
  "app-store-resigned": "Mac App Store signature",
  other: "non-Developer ID certificate"
};
var MAC_DIST_002 = {
  id: "MAC-DIST-002",
  platform: "macos",
  distribution: "direct",
  title: "Not signed with Developer ID and a secure timestamp (outside the store)",
  guideline: "Notarization requirements",
  severity: "blocker",
  confidence: "certain",
  fix: "Export with Xcode Organizer > Distribute App > Direct Distribution (Developer ID), which signs everything with your Developer ID Application certificate and a secure timestamp. When signing by hand, use `codesign --timestamp --options runtime`; sign .pkg files with your Developer ID Installer certificate (`productsign`).",
  sourceUrl: "https://developer.apple.com/documentation/security/resolving-common-notarization-issues",
  lastVerified: VERIFIED_P9,
  check(facts) {
    const mac = facts.macos;
    if (!mac?.builtBinary) return [];
    const out = [];
    const signed = mac.code.filter((c2) => c2.signed);
    const wrongCert = signed.filter((c2) => c2.adhoc || c2.certKind && c2.certKind !== "developer-id" && c2.certKind !== "apple");
    if (wrongCert.length) {
      const main2 = wrongCert.find((c2) => c2.role === "main") ?? wrongCert[0];
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `${names(wrongCert.map((c2) => shortPath(c2.path)))} ${wrongCert.length === 1 ? "is" : "are"} signed with ${main2.adhoc ? "an ad hoc signature" : `a ${KIND_LABEL[main2.certKind ?? "other"] ?? "non-Developer ID certificate"}`}${main2.authority ? ` (${main2.authority})` : ""}. Apps distributed outside the Mac App Store must be signed with a Developer ID Application certificate, or notarization fails.`,
        evidence: limit(wrongCert.map((c2) => c2.evidence), 4)
      });
    }
    const noTs = signed.filter((c2) => !c2.adhoc && c2.certKind === "developer-id" && !c2.secureTimestamp);
    if (noTs.length) {
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `${names(noTs.map((c2) => shortPath(c2.path)))} ${noTs.length === 1 ? "has" : "have"} no secure timestamp. The notary service rejects it ("The signature does not include a secure timestamp").`,
        evidence: limit(noTs.map((c2) => c2.evidence), 4)
      });
    }
    const pkg = mac.installer;
    if (pkg && (!pkg.signed || pkg.certKind !== "developer-id")) {
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: pkg.signed ? `The installer package is signed with "${pkg.authority ?? "an unknown certificate"}". Packages distributed outside the store must be signed with a Developer ID Installer certificate.` : "The installer package isn't signed. Sign it with your Developer ID Installer certificate (productsign) before notarizing.",
        evidence: [{ detail: "installer package signature (xar)" }]
      });
    } else if (pkg && pkg.secureTimestamp === false) {
      out.push({
        severity: "warning",
        confidence: "likely",
        message: "The installer package's signature has no trusted timestamp. productbuild and productsign add one by default when they can reach timestamp.apple.com.",
        evidence: [{ detail: "installer package signature (xar)" }]
      });
    }
    return out;
  }
};
var MAC_DIST_003 = {
  id: "MAC-DIST-003",
  platform: "macos",
  distribution: "direct",
  title: "Other notarization problems (debug entitlement, old SDK, no stapled ticket)",
  guideline: "Notarization requirements",
  severity: "blocker",
  confidence: "certain",
  fix: "Archive and export from Xcode (it strips com.apple.security.get-task-allow), build against the macOS 10.9 SDK or later, keep entitlements as XML, then notarize with `xcrun notarytool submit --wait` and staple with `xcrun stapler staple`.",
  sourceUrl: "https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution",
  lastVerified: VERIFIED_P9,
  check(facts, ctx) {
    const mac = facts.macos;
    if (!mac?.builtBinary) return [];
    const out = [];
    const debug = mac.code.filter((c2) => c2.entitlements?.[GET_TASK_ALLOW] === true && c2.entitlements?.["com.apple.security.cs.disable-library-validation"] !== true);
    if (debug.length) {
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `${names(debug.map((c2) => shortPath(c2.path)))} ${debug.length === 1 ? "has" : "have"} the com.apple.security.get-task-allow entitlement (a debug build). The notary service rejects it.`,
        evidence: limit(debug.map((c2) => ({ ...c2.evidence, detail: GET_TASK_ALLOW })), 4)
      });
    }
    const minSdk = ctx.policy.macos?.notarizationMinSdk ?? "10.9";
    const old = mac.code.filter((c2) => c2.sdk && c2.sdk !== "0.0" && compareVersions(c2.sdk, minSdk) < 0);
    if (old.length) {
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `${names(old.map((c2) => `${shortPath(c2.path)} (SDK ${c2.sdk})`))} ${old.length === 1 ? "was" : "were"} built with an SDK older than macOS ${minSdk}. Notarization only works for binaries linked against ${minSdk} or later.`,
        evidence: limit(old.map((c2) => c2.evidence), 4)
      });
    }
    const bplist2 = mac.code.filter((c2) => c2.entitlementsBinaryPlist);
    if (bplist2.length) {
      out.push({
        severity: "blocker",
        confidence: "certain",
        message: `${names(bplist2.map((c2) => shortPath(c2.path)))} embed entitlements as a binary plist. The notary service rejects these ("Embedded entitlements are invalid").`,
        evidence: limit(bplist2.map((c2) => c2.evidence), 4)
      });
    }
    if (facts.inputKind === "mac-app" && mac.stapled === false) {
      out.push({
        severity: "info",
        confidence: "likely",
        message: "No notarization ticket is stapled to the app. Gatekeeper can still look it up online if it was notarized, but staple it (xcrun stapler staple) so it opens for users who are offline.",
        evidence: [{ detail: "no ticket at Contents/CodeResources" }]
      });
    }
    return out;
  }
};
var IOS_SDK_001 = {
  id: "IOS-SDK-001",
  platform: "ios",
  title: "Built with an SDK older than App Store Connect accepts",
  guideline: "Apple SDK minimum requirements",
  storeCodes: ["ITMS-90725"],
  severity: "blocker",
  confidence: "certain",
  fix: "Build and archive with the current Xcode (Xcode 26 or later, iOS 26 SDK). This doesn't change which iOS versions the app supports; that's still your deployment target.",
  sourceUrl: "https://developer.apple.com/news/upcoming-requirements/?id=04282026a",
  lastVerified: VERIFIED_P10,
  check(facts, ctx) {
    const min = ctx.policy.apple;
    const plist3 = facts.ios?.infoPlist;
    if (!min || !plist3 || facts.inputKind !== "ipa" || ctx.now < new Date(min.minSdkEffectiveDate)) return [];
    const sdkName = typeof plist3.DTSDKName === "string" ? plist3.DTSDKName : void 0;
    const m = sdkName?.match(/^([a-z]+?)(\d+)(?:\.\d+)*$/);
    if (!m) return [];
    const need = min.minSdk[m[1]];
    const have = Number(m[2]);
    if (!need || have >= need) return [];
    const xcode = typeof plist3.DTXcode === "string" ? ` with Xcode ${plist3.DTXcode.replace(/^0*(\d+)(\d)(\d)$/, "$1.$2")}` : "";
    return [{
      severity: "blocker",
      confidence: "certain",
      message: `This build was made with the ${sdkName} SDK${xcode}. Since ${min.minSdkEffectiveDate}, App Store Connect only accepts apps built with Xcode ${min.minXcode} or later and the ${m[1]} ${need} SDK.`,
      evidence: [{ file: facts.ios.infoPlistPath, detail: `DTSDKName = ${sdkName}` }]
    }];
  }
};
var IOS_DEMO_001 = {
  id: "IOS-DEMO-001",
  platform: "apple",
  title: "App has a sign-in, but no demo account for App Review",
  guideline: "Apple 2.1",
  severity: "warning",
  confidence: "likely",
  fix: "Give App Review a working demo account (or a full demo mode): App Store Connect > your version > App Review Information > Sign-in required, or fastlane/metadata/review_information/demo_user.txt and demo_password.txt. Keep the backend for that account running during review.",
  sourceUrl: GUIDELINES_URL,
  lastVerified: VERIFIED_P10,
  check(facts) {
    const s = facts.signals;
    const ri = facts.reviewInfo;
    if (!s?.codeScanned || !ri) return [];
    const login = [...s.signIn ?? [], ...s.accountCreation, ...s.thirdPartyLogin, ...s.privacyLogin];
    if (!login.length || ri.demoUser && ri.demoPassword) return [];
    if (ri.notes && /\b(demo|test) (account|user|mode|login)|\bno (login|sign[- ]?in|account) (is )?(needed|required)\b/i.test(ri.notes)) return [];
    return [{
      severity: "warning",
      confidence: "likely",
      message: `The app has a sign-in (${names(login.map((l) => l.name))}), but ${ri.file} has no demo account (demo_user.txt / demo_password.txt) and the review notes don't describe one. Missing demo access is one of the most common 2.1 rejections.`,
      evidence: [{ file: ri.file, detail: "no demo_user.txt / demo_password.txt" }, ...limit(login.map((l) => l.evidence), 2)]
    }];
  }
};
var IOS_PRIV_006 = {
  id: "IOS-PRIV-006",
  platform: "apple",
  title: "Privacy policy link missing from the listing or the app",
  guideline: "Apple 5.1.1(i)",
  severity: "warning",
  confidence: "certain",
  fix: "Add your privacy policy URL in App Store Connect (App Privacy > Privacy Policy URL, or fastlane/metadata/<locale>/privacy_url.txt) and link to it from inside the app, for example in Settings or on the sign-up screen.",
  sourceUrl: "https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage",
  lastVerified: VERIFIED_P10,
  check(facts) {
    const out = [];
    const locales = [...new Set(facts.listing.map((f) => f.locale))];
    if (locales.length) {
      const withUrl = new Set(facts.listing.filter((f) => f.field === "privacy_url" && f.text.trim()).map((f) => f.locale));
      const missing = locales.filter((l) => !withUrl.has(l));
      if (!withUrl.size) {
        out.push({
          severity: "warning",
          confidence: "certain",
          message: `No privacy policy URL in the App Store metadata (no privacy_url.txt in ${missing.join(", ")}). Every app must link to its privacy policy in App Store Connect.`,
          evidence: [{ file: facts.listing[0].file.replace(/[^/]+\/[^/]+$/, ""), detail: "privacy_url.txt missing" }]
        });
      }
    }
    const s = facts.signals;
    if (s?.codeScanned && s.privacyLink && !s.privacyLink.length && (facts.inputKind === "xcode-project" || facts.inputKind === "expo-config")) {
      out.push({
        severity: "info",
        confidence: "likely",
        message: `No privacy policy link was found inside the app (searched ${s.searched.join(", ")}). Apple asks for one that's easy to find in the app too, not only in the listing.`,
        evidence: []
      });
    }
    return out;
  }
};
var IOS_IAP_001 = {
  id: "IOS-IAP-001",
  platform: "apple",
  title: "In-app purchases without a way to restore them",
  guideline: "Apple 3.1.1",
  severity: "warning",
  confidence: "likely",
  fix: 'Add a visible "Restore Purchases" button (usually on the paywall and in Settings) that calls AppStore.sync() (StoreKit 2), restoreCompletedTransactions() (StoreKit 1) or Purchases.shared.restorePurchases() (RevenueCat). Not needed if you only sell consumables.',
  sourceUrl: GUIDELINES_URL,
  lastVerified: VERIFIED_P10,
  check(facts) {
    const s = facts.signals;
    if (!s?.codeScanned || !s.purchases?.length || s.restorePurchases?.length) return [];
    const real = s.purchases.filter((p) => p.via !== "dependency");
    if (!real.length) return [];
    const subs = s.subscriptions ?? [];
    return [{
      severity: subs.length ? "warning" : "info",
      confidence: "likely",
      message: `The app sells in-app purchases (${names(real.map((p) => p.name))})${subs.length ? ", including subscriptions," : ""} but no restore option was found. Apple requires a restore mechanism for restorable purchases (subscriptions and non-consumables)${subs.length ? "" : "; ignore this if you only sell consumables"}.`,
      evidence: limit([...real, ...subs].map((p) => p.evidence), 3)
    }];
  }
};
var IOS_BG_001 = {
  id: "IOS-BG-001",
  platform: "ios",
  title: "Background mode declared but not used",
  guideline: "Apple 2.5.4",
  severity: "warning",
  confidence: "likely",
  fix: "Remove the background modes the app doesn't need (Xcode > Signing & Capabilities > Background Modes, or UIBackgroundModes in Info.plist). If a feature does need one, be ready to show it to App Review, e.g. audio that keeps playing when the app is closed.",
  sourceUrl: GUIDELINES_URL,
  lastVerified: VERIFIED_P10,
  check(facts) {
    const ios = facts.ios;
    if (!ios || facts.inputKind !== "xcode-project" || !facts.signals?.codeScanned) return [];
    const modes = ios.infoPlist.UIBackgroundModes;
    if (!Array.isArray(modes)) return [];
    const deps = ios.allDependencies ?? ios.linkedSdks.map((s) => s.name);
    const used = new Set((facts.signals.backgroundUses ?? []).map((u) => u.id));
    const out = [];
    for (const mode of modes) {
      const m = typeof mode === "string" ? BACKGROUND_MODES[mode] : void 0;
      if (!m || used.has(mode) || deps.some((d) => m.deps.test(d))) continue;
      out.push({
        severity: "warning",
        confidence: "likely",
        message: `UIBackgroundModes includes "${mode}", but no code that would ${m.label} was found. Apple only allows background modes for their intended purpose and rejects unused ones.`,
        evidence: [{ ...ios.infoPlistKeyEvidence?.UIBackgroundModes ?? { file: ios.infoPlistPath }, detail: `UIBackgroundModes: ${mode}` }]
      });
    }
    return out;
  }
};
function ugcFindings(facts, store) {
  const s = facts.signals;
  if (!s?.codeScanned || !s.ugc?.length) return [];
  const missing = [!s.ugcReport?.length && "a way to report content", !s.ugcBlock?.length && "a way to block users"].filter(Boolean);
  if (!missing.length) return [];
  return [{
    severity: "warning",
    confidence: "likely",
    message: `The app lets people post or chat with each other (${names(s.ugc.map((u) => u.name))}), but ${missing.join(" or ")} wasn't found in ${names(s.searched)}. ${store} requires both for user-generated content.`,
    evidence: limit(s.ugc.map((u) => u.evidence), 3)
  }];
}
var IOS_UGC_001 = {
  id: "IOS-UGC-001",
  platform: "apple",
  title: "User-generated content without report and block tools",
  guideline: "Apple 1.2",
  severity: "warning",
  confidence: "likely",
  fix: 'Add a "Report" action on every post, comment, message and profile, a "Block user" action, a filter for objectionable content, and published contact details. Act on reports quickly.',
  sourceUrl: GUIDELINES_URL,
  lastVerified: VERIFIED_P10,
  check: (facts) => ugcFindings(facts, "Apple")
};
var AND_UGC_001 = {
  id: "AND-UGC-001",
  platform: "android",
  title: "User-generated content without report and block tools",
  guideline: "Play: User Generated Content policy",
  severity: "warning",
  confidence: "likely",
  fix: "Publish terms of use, add an in-app way to report objectionable content and a way to block other users, and moderate what's posted.",
  sourceUrl: "https://support.google.com/googleplay/android-developer/answer/9876937",
  lastVerified: VERIFIED_P10,
  check: (facts) => ugcFindings(facts, "Google Play")
};
var AND_ACCT_001 = {
  id: "AND-ACCT-001",
  platform: "android",
  title: "Account creation without in-app account deletion",
  guideline: "Play: User Data policy (account deletion)",
  severity: "warning",
  confidence: "likely",
  fix: "Add an in-app path to delete the account and its data, and publish a web page where people can request deletion without reinstalling the app. Enter that web link in Play Console > App content > Data safety.",
  sourceUrl: "https://support.google.com/googleplay/android-developer/answer/13327111",
  lastVerified: VERIFIED_P10,
  check(facts) {
    const s = facts.signals;
    if (!s?.codeScanned) return [];
    const creation = [...s.accountCreation, ...s.thirdPartyLogin];
    if (!creation.length || s.accountDeletion.length) return [];
    return [{
      severity: "warning",
      confidence: "likely",
      message: `The app appears to let people create an account (${names(creation.map((c2) => c2.name))}), but no in-app account deletion was found in ${names(s.searched)}. Google Play requires an in-app deletion path plus a web link for deletion requests.`,
      evidence: limit(creation.map((c2) => c2.evidence), 3)
    }];
  }
};
var BUILTIN_RULES = [
  SCAN_001,
  SEC_001,
  IOS_PERM_001,
  IOS_PERM_002,
  IOS_PERM_003,
  IOS_PRIV_001,
  IOS_PRIV_002,
  IOS_PRIV_003,
  IOS_PRIV_004,
  IOS_PRIV_005,
  IOS_ACCT_001,
  IOS_LOGIN_001,
  IOS_AI_001,
  IOS_EXP_001,
  IOS_META_001,
  IOS_SDK_001,
  IOS_DEMO_001,
  IOS_PRIV_006,
  IOS_IAP_001,
  IOS_BG_001,
  IOS_UGC_001,
  IOS_PLIST_001,
  IOS_ICON_001,
  IOS_WEB_001,
  IOS_BUILD_001,
  AND_SDK_001,
  AND_SDK_002,
  AND_FGS_001,
  AND_PERM_001,
  AND_PERM_002,
  AND_BILL_001,
  AND_16KB_001,
  AND_DS_001,
  AND_AI_001,
  AND_ACCT_001,
  AND_UGC_001,
  AND_MAN_001,
  AND_64BIT_001,
  MAC_SBX_001,
  MAC_SBX_002,
  MAC_SBX_003,
  MAC_SELF_001,
  MAC_CODE_001,
  MAC_UPD_001,
  MAC_SIGN_001,
  MAC_LOGIN_001,
  MAC_META_001,
  MAC_DIST_001,
  MAC_DIST_002,
  MAC_DIST_003
];
var policy_default = {
  version: "2026-11-23",
  android: {
    targetSdk: {
      effectiveDate: "2026-08-31",
      phone: 36,
      wear: 35,
      auto: 35,
      tv: 34,
      xr: 34,
      extensionUntil: "2026-11-01",
      sourceUrl: "https://developer.android.com/google/play/requirements/target-sdk"
    },
    billing: {
      minMajor: 8,
      effectiveDate: "2026-08-31",
      sourceUrl: "https://developer.android.com/google/play/billing/deprecation-faq"
    },
    pageSize16k: {
      enforcementDate: "2027-02-01",
      sourceUrl: "https://developer.android.com/guide/practices/page-sizes"
    }
  },
  macos: {
    screenshotSizes: [
      [
        1280,
        800
      ],
      [
        1440,
        900
      ],
      [
        2560,
        1600
      ],
      [
        2880,
        1800
      ]
    ],
    screenshotSourceUrl: "https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications",
    notarizationMinSdk: "10.9"
  },
  apple: {
    minSdk: {
      iphoneos: 26,
      appletvos: 26,
      xros: 26,
      watchos: 26
    },
    minXcode: "26.0",
    minSdkEffectiveDate: "2026-04-28",
    minSdkSourceUrl: "https://developer.apple.com/news/upcoming-requirements/?id=04282026a"
  }
};
var VERSION = "0.2.0";
var DEFAULT_POLICY = policy_default;
var NO_DECLARATION = {
  app_store: "App Store privacy label wasn't compared (IOS-PRIV-005): add .okayed/app-privacy.json, or add the label in the dashboard.",
  google_play: "Google Play Data safety form wasn't compared (AND-DS-001): add .okayed/data-safety.csv (Play Console export), or upload it in the dashboard."
};
var SEV_ORDER = { blocker: 0, warning: 1, info: 2 };
function ruleApplies(rule, facts) {
  if (facts.platform === "macos") {
    const want = rule.distribution ?? "app-store";
    if (want !== "any" && want !== (facts.macos?.distribution ?? "app-store")) return false;
  } else if (rule.distribution === "direct") return false;
  if (rule.platform === "all") return true;
  if (rule.platform === "apple") return facts.platform === "ios" || facts.platform === "macos";
  return rule.platform === facts.platform;
}
function runRules(facts, opts = {}) {
  const rules = (opts.rules ?? BUILTIN_RULES).filter((r) => ruleApplies(r, facts) && !opts.disabled?.includes(r.id));
  const ctx = { policy: opts.policy ?? DEFAULT_POLICY, now: opts.now ?? /* @__PURE__ */ new Date() };
  const findings = [];
  const dataUse = buildDataUse(facts);
  if (dataUse?.sources.length && facts.macos?.distribution !== "direct") {
    const declared = dataUse.store === "app_store" ? facts.storeDeclarations?.appStore : facts.storeDeclarations?.googlePlay;
    if (!declared) facts.notAudited.push(NO_DECLARATION[dataUse.store]);
  }
  for (const rule of rules) {
    let results = [];
    try {
      results = rule.check(facts, ctx);
    } catch (err) {
      facts.notAudited.push(`Rule ${rule.id} failed to run: ${err.message}`);
      continue;
    }
    const { check: _check, ...meta } = rule;
    for (const r of results) findings.push({ ruleId: rule.id, ...r, rule: meta });
  }
  findings.sort((a, b) => SEV_ORDER[a.severity] - SEV_ORDER[b.severity] || a.ruleId.localeCompare(b.ruleId));
  return {
    tool: { name: "okayed", version: VERSION },
    scannedAt: ctx.now.toISOString(),
    facts: {
      platform: facts.platform,
      inputKind: facts.inputKind,
      framework: facts.framework,
      module: facts.module,
      formFactor: facts.android?.formFactor,
      distribution: facts.macos?.distribution,
      bundleId: facts.bundleId,
      version: facts.version,
      notAudited: facts.notAudited,
      root: facts.root
    },
    findings,
    dataUse,
    summary: summarize(findings)
  };
}
function summarize(findings) {
  const count = (s) => findings.filter((f) => f.severity === s).length;
  const blocker = count("blocker");
  const warning = count("warning");
  const info = count("info");
  let score = 100;
  for (const f of findings) {
    if (f.severity === "blocker") score -= f.confidence === "certain" ? 30 : 20;
    else if (f.severity === "warning") score -= f.confidence === "certain" ? 8 : 5;
    else score -= 1;
  }
  if (blocker) score = Math.min(score, 59);
  else if (warning) score = Math.min(score, 89);
  score = Math.max(0, Math.round(score));
  return { blocker, warning, info, score, verdict: blocker ? "RED" : warning ? "YELLOW" : "GREEN" };
}
var BASELINE_FILE = ".okayed/baseline.json";
function baselineKey(ruleId, file, message) {
  return `${ruleId}|${file ?? ""}|${message.replace(/\d+/g, "#").replace(/\s+/g, " ").slice(0, 200)}`;
}
var keyOf = (f) => baselineKey(f.ruleId, f.evidence.find((e) => e.file)?.file, f.message);
function loadBaseline(root) {
  const p = join13(root, BASELINE_FILE);
  if (!existsSync2(p)) return void 0;
  try {
    const j = JSON.parse(readFileSync8(p, "utf8"));
    return j.version === 1 && Array.isArray(j.accepted) ? j : void 0;
  } catch {
    return void 0;
  }
}
function applyBaseline(report, baseline, now = /* @__PURE__ */ new Date()) {
  if (!baseline?.accepted.length) return report;
  const live = /* @__PURE__ */ new Map();
  for (const e of baseline.accepted) {
    if (e.expires && new Date(e.expires) < now) continue;
    live.set(baselineKey(e.ruleId, e.file, e.message), e);
  }
  const accepted = [];
  const findings = report.findings.filter((f) => {
    const hit = live.get(keyOf(f));
    if (!hit) return true;
    accepted.push({ ...f, acceptedReason: hit.reason, acceptedUntil: hit.expires });
    return false;
  });
  if (!accepted.length) return report;
  const counts = /* @__PURE__ */ new Map();
  for (const a of accepted) counts.set(a.ruleId, (counts.get(a.ruleId) ?? 0) + 1);
  const note = `${accepted.length} finding${accepted.length === 1 ? "" : "s"} accepted in ${BASELINE_FILE}, not scored: ${[...counts].map(([r, n]) => n > 1 ? `${r} \xD7${n}` : r).join(", ")}.`.slice(0, 480);
  return { ...report, facts: { ...report.facts, notAudited: [...report.facts.notAudited, note] }, findings, accepted, summary: summarize(findings) };
}
var useColor = () => !process.env.NO_COLOR && process.env.FORCE_COLOR !== "0" && (process.stdout.isTTY || !!process.env.FORCE_COLOR);
var c = (code) => (s) => useColor() ? `\x1B[${code}m${s}\x1B[0m` : s;
var red = c("31");
var yellow = c("33");
var green = c("32");
var blue = c("36");
var dim = c("2");
var bold = c("1");
var EMOJI = { blocker: "\u{1F6D1}", warning: "\u26A0\uFE0F", info: "\u2139\uFE0F" };
var VERDICT = { RED: "\u{1F534}", YELLOW: "\u{1F7E1}", GREEN: "\u{1F7E2}" };
function toMarkdown(reports) {
  const out = ["<!-- okayed-report -->", "## Okayed"];
  for (const r of reports) {
    const f = r.facts;
    const name = f.platform === "ios" ? "iOS" : f.platform === "android" ? "Android" : "macOS";
    out.push("");
    const dist = f.platform === "macos" ? f.distribution === "direct" ? " \xB7 outside the Mac App Store" : " \xB7 Mac App Store" : "";
    out.push(`### ${VERDICT[r.summary.verdict]} ${name}${f.module ? ` (${f.module})` : ""}${dist} \u2014 Ship Score **${r.summary.score}/100**`);
    out.push(`\`${f.bundleId ?? "unknown"}\`${f.version ? ` \xB7 v${f.version}` : ""} \xB7 ${r.summary.blocker} blocker \xB7 ${r.summary.warning} warning \xB7 ${r.summary.info} info`);
    out.push("");
    if (!r.findings.length) {
      out.push("No issues found by the built-in rules. \u2705");
      continue;
    }
    out.push("| | Rule | Finding | Where |");
    out.push("|---|---|---|---|");
    for (const x of r.findings) {
      const e = x.evidence[0];
      const where = e?.file ? `\`${e.file}${e.line ? `:${e.line}` : ""}\`` : "";
      out.push(`| ${EMOJI[x.severity]} | [${x.ruleId}](${x.rule.sourceUrl}) | ${esc2(x.message)}${x.confidence === "likely" ? " _(likely)_" : ""} | ${where} |`);
    }
    out.push("");
    out.push("<details><summary>How to fix</summary>\n");
    const seen = /* @__PURE__ */ new Set();
    for (const x of r.findings) {
      if (seen.has(x.ruleId)) continue;
      seen.add(x.ruleId);
      out.push(`- **${x.ruleId} \xB7 ${x.rule.title}** \u2014 ${esc2(x.rule.fix)} (${x.rule.guideline})`);
    }
    out.push("\n</details>");
    if (r.accepted?.length) {
      out.push(`
<details><summary>${r.accepted.length} accepted in .okayed/baseline.json (not scored)</summary>
`);
      for (const a of r.accepted) out.push(`- **${a.ruleId} \xB7 ${a.rule.title}** \u2014 ${esc2(a.message)} _Reason: ${esc2(a.acceptedReason)}${a.acceptedUntil ? `, until ${a.acceptedUntil}` : ""}_`);
      out.push("\n</details>");
    }
    if (f.notAudited.length) {
      out.push("\n<details><summary>Not audited</summary>\n");
      for (const n of f.notAudited) out.push(`- ${esc2(n)}`);
      out.push("\n</details>");
    }
  }
  out.push("");
  out.push("<sub>Okayed reduces rejection risk; it can't guarantee approval.</sub>");
  return out.join("\n");
}
function esc2(s) {
  return s.replace(/\|/g, "\\|").replace(/\n/g, " ");
}
var LEVEL = { blocker: "error", warning: "warning", info: "note" };
function toSarif(reports) {
  const rules = /* @__PURE__ */ new Map();
  for (const r of reports) for (const f of r.findings) rules.set(f.ruleId, f.rule);
  const results = reports.flatMap(
    (r) => r.findings.map((f) => {
      const e = f.evidence.find((x) => x.file) ?? f.evidence[0];
      const isArchive = isBuiltInput(r.facts.inputKind);
      return {
        ruleId: f.ruleId,
        level: LEVEL[f.severity],
        message: { text: f.message },
        properties: { confidence: f.confidence, platform: r.facts.platform },
        locations: e?.file && !isArchive ? [{ physicalLocation: { artifactLocation: { uri: e.file }, ...e.line ? { region: { startLine: e.line } } : {} } }] : []
      };
    })
  );
  return {
    $schema: "https://json.schemastore.org/sarif-2.1.0.json",
    version: "2.1.0",
    runs: [{
      tool: {
        driver: {
          name: "Okayed",
          version: reports[0]?.tool.version ?? "0.0.0",
          informationUri: "https://github.com/okayed/okayed",
          rules: [...rules.values()].map((r) => ({
            id: r.id,
            name: r.id.replace(/-/g, ""),
            shortDescription: { text: r.title },
            fullDescription: { text: `${r.title} (${r.guideline})` },
            help: { text: r.fix, markdown: `${r.fix}

[Official documentation](${r.sourceUrl})` },
            helpUri: r.sourceUrl,
            defaultConfiguration: { level: LEVEL[r.severity] },
            properties: { tags: [r.platform, r.guideline] }
          }))
        }
      },
      results
    }]
  };
}
function toUploadPayload(reports, meta) {
  const clean = Object.fromEntries(Object.entries(meta).filter(([, v]) => v !== void 0 && v !== ""));
  return {
    // Accepted findings are summarised in notAudited; the full list stays local.
    reports: reports.map(({ accepted: _accepted, ...r }) => ({ ...r, facts: { ...r.facts, root: basename6(r.facts.root) } })),
    meta: clean
  };
}

// src/github.ts
function escData(s) {
  return s.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function escProp(s) {
  return escData(s).replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var LEVEL2 = { blocker: "error", warning: "warning", info: "notice" };
function isBuiltFile(r) {
  return isBuiltInput(r.facts.inputKind);
}
function annotations(reports, max = 50) {
  const out = [];
  for (const r of reports) {
    const isArchive = isBuiltFile(r);
    for (const f of r.findings) {
      const e = f.evidence.find((x) => x.file);
      if (!e?.file || isArchive) continue;
      const props = [`file=${escProp(e.file)}`, e.line ? `line=${e.line}` : "", `title=${escProp(`${f.ruleId} \xB7 ${f.rule.title}`)}`].filter(Boolean).join(",");
      out.push(`::${LEVEL2[f.severity]} ${props}::${escData(`${f.message}${f.confidence === "likely" ? " (likely)" : ""}
Fix: ${f.rule.fix}`)}`);
      if (out.length >= max) return out;
    }
  }
  return out;
}
function rebaseEvidence(reports, prefix) {
  if (!prefix || prefix === ".") return reports;
  const p = prefix.replace(/\/+$/, "");
  return reports.map((r) => {
    if (isBuiltFile(r)) return r;
    return {
      ...r,
      findings: r.findings.map((f) => ({ ...f, evidence: f.evidence.map((e) => e.file ? { ...e, file: `${p}/${e.file}` } : e) }))
    };
  });
}
async function upsertComment(target, body, f = fetch) {
  const headers = {
    authorization: `Bearer ${target.token}`,
    accept: "application/vnd.github+json",
    "x-github-api-version": "2022-11-28",
    "content-type": "application/json",
    "user-agent": "okayed-action"
  };
  const base = `${target.apiUrl.replace(/\/$/, "")}/repos/${target.repo}/issues`;
  let existing;
  for (let page = 1; page <= 10 && existing === void 0; page++) {
    const res2 = await f(`${base}/${target.issueNumber}/comments?per_page=100&page=${page}`, { headers });
    if (!res2.ok) throw new Error(`GitHub API ${res2.status} listing comments: ${await res2.text()}`);
    const list2 = await res2.json();
    existing = list2.find((c2) => c2.body?.includes(target.marker))?.id;
    if (list2.length < 100) break;
  }
  const payload = JSON.stringify({ body });
  if (existing !== void 0) {
    const res2 = await f(`${base}/comments/${existing}`, { method: "PATCH", headers, body: payload });
    if (!res2.ok) throw new Error(`GitHub API ${res2.status} updating comment: ${await res2.text()}`);
    return "updated";
  }
  const res = await f(`${base}/${target.issueNumber}/comments`, { method: "POST", headers, body: payload });
  if (!res.ok) throw new Error(`GitHub API ${res.status} creating comment: ${await res.text()}`);
  return "created";
}
function fitComment(body, limit2 = 65e3) {
  if (body.length <= limit2) return body;
  return body.slice(0, limit2 - 200) + "\n\n\u2026report truncated. See the job summary or SARIF for all findings.";
}

// src/upload.ts
async function uploadReports(reports, apiUrl, token, meta) {
  const res = await fetch(`${apiUrl.replace(/\/$/, "")}/api/v1/scans`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${token}`, "user-agent": "okayed-action" },
    body: JSON.stringify(toUploadPayload(reports, meta)),
    signal: AbortSignal.timeout(3e4)
  });
  const text = await res.text();
  let body = {};
  try {
    body = JSON.parse(text);
  } catch {
  }
  if (!res.ok) throw new Error(`${res.status}: ${body.error ?? text.slice(0, 200)}`);
  return { scans: body.scans ?? [] };
}

// src/index.ts
var env = (k, d = "") => process.env[k] ?? d;
function setOutput(name, value) {
  const file = env("GITHUB_OUTPUT");
  if (file) appendFileSync(file, `${name}=${value}
`);
  else process.stdout.write(`[output] ${name}=${value}
`);
}
async function main() {
  const workspace = env("GITHUB_WORKSPACE", process.cwd());
  const inputPath = env("SC_PATH", ".") || ".";
  const target = resolve2(workspace, inputPath);
  const platform = env("SC_PLATFORM") || void 0;
  const failOn = env("SC_FAIL_ON", "blocker");
  const dist = env("SC_DISTRIBUTION");
  const distribution = dist === "direct" || dist === "app-store" ? dist : void 0;
  const disabled = env("SC_DISABLE").split(",").map((s) => s.trim()).filter(Boolean);
  let reports;
  try {
    const baseline = loadBaseline(target) ?? loadBaseline(workspace);
    reports = parseInput(target, { platform, distribution }).map((facts) => applyBaseline(runRules(facts, { disabled }), baseline));
  } catch (e) {
    process.stdout.write(`::error title=Okayed::${e.message}
`);
    process.exitCode = 1;
    return;
  }
  reports = rebaseEvidence(reports, relative3(workspace, target));
  const key = `${inputPath}${platform ? `:${platform}` : ""}`;
  const marker = `<!-- okayed-report:${key} -->`;
  let markdown = toMarkdown(reports).replace("<!-- okayed-report -->", marker);
  const sarifFile = join14(env("RUNNER_TEMP", workspace), `okayed-${key.replace(/[^\w.-]+/g, "_")}.sarif`);
  writeFileSync2(sarifFile, JSON.stringify(toSarif(reports), null, 2));
  const summaryFile = env("GITHUB_STEP_SUMMARY");
  if (summaryFile) appendFileSync(summaryFile, markdown.replace(marker, "") + "\n");
  if (env("SC_ANNOTATIONS", "true") === "true") for (const line of annotations(reports)) process.stdout.write(line + "\n");
  const blockers = reports.reduce((n, r) => n + r.summary.blocker, 0);
  const warnings = reports.reduce((n, r) => n + r.summary.warning, 0);
  const verdict = reports.some((r) => r.summary.verdict === "RED") ? "RED" : reports.some((r) => r.summary.verdict === "YELLOW") ? "YELLOW" : "GREEN";
  setOutput("verdict", verdict);
  setOutput("score", Math.min(...reports.map((r) => r.summary.score)));
  setOutput("blockers", blockers);
  setOutput("warnings", warnings);
  setOutput("sarif-file", sarifFile);
  setOutput("category", key.replace(/[^\w.-]+/g, "_"));
  const failed = failOn === "blocker" && blockers > 0 || failOn === "warning" && blockers + warnings > 0;
  setOutput("failed", failed ? "true" : "false");
  for (const r of reports) {
    process.stdout.write(`Okayed ${r.facts.platform}${r.facts.module ? ` (${r.facts.module})` : ""}: ${r.summary.verdict} ${r.summary.score}/100 \u2014 ${r.summary.blocker} blocker, ${r.summary.warning} warning, ${r.summary.info} info
`);
  }
  if (env("SC_UPLOAD") === "true") {
    const links = await upload(reports);
    const label = (i) => links.length > 1 ? `scan ${i + 1}` : "view this scan";
    if (links.length) markdown += `

**Okayed dashboard:** ${links.map((u, i) => `[${label(i)}](${u})`).join(" \xB7 ")}`;
  }
  if (env("SC_COMMENT", "true") !== "true") return;
  const prNumber = pullRequestNumber();
  if (!prNumber) {
    process.stdout.write("Not a pull request event; skipping PR comment.\n");
    return;
  }
  const token = env("SC_TOKEN");
  if (!token) {
    process.stdout.write("::warning title=Okayed::No token available; skipping PR comment.\n");
    return;
  }
  try {
    const result = await upsertComment(
      { apiUrl: env("GITHUB_API_URL", "https://api.github.com"), repo: env("GITHUB_REPOSITORY"), issueNumber: prNumber, token, marker },
      fitComment(markdown)
    );
    process.stdout.write(`PR comment ${result}.
`);
  } catch (e) {
    process.stdout.write(`::warning title=Okayed::Could not post the PR comment (${e.message.slice(0, 200)}). Add "permissions: pull-requests: write" to the workflow. Results are still in the job summary.
`);
  }
}
async function upload(reports) {
  const apiToken = env("SC_API_TOKEN");
  const apiUrl = env("SC_API_URL");
  if (!apiToken || !apiUrl) {
    process.stdout.write("::warning title=Okayed::upload is on but api-token or api-url is empty; skipping the dashboard upload.\n");
    return [];
  }
  process.stdout.write(`::add-mask::${apiToken}
`);
  if (!/^https:\/\//.test(apiUrl) && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/.test(apiUrl)) {
    process.stdout.write("::warning title=Okayed::api-url must start with https://; skipping the dashboard upload.\n");
    return [];
  }
  try {
    const result = await uploadReports(reports, apiUrl, apiToken, {
      source: "action",
      commitSha: headSha() ?? (env("GITHUB_SHA") || void 0),
      branch: env("GITHUB_HEAD_REF") || env("GITHUB_REF_NAME") || void 0,
      repo: env("GITHUB_REPOSITORY") || void 0,
      prNumber: pullRequestNumber()
    });
    const links = result.scans.map((s) => s.url).filter((u) => Boolean(u));
    process.stdout.write(`Uploaded ${result.scans.length} scan(s) to the Okayed dashboard.
`);
    return links;
  } catch (e) {
    process.stdout.write(`::warning title=Okayed::Dashboard upload failed (${e.message.slice(0, 200)}).
`);
    return [];
  }
}
function headSha() {
  const path = env("GITHUB_EVENT_PATH");
  if (!path) return void 0;
  try {
    return JSON.parse(readFileSync9(path, "utf8")).pull_request?.head?.sha;
  } catch {
    return void 0;
  }
}
function pullRequestNumber() {
  const path = env("GITHUB_EVENT_PATH");
  if (!path) return void 0;
  try {
    const ev2 = JSON.parse(readFileSync9(path, "utf8"));
    return ev2.pull_request?.number ?? (ev2.issue?.pull_request ? ev2.issue.number : void 0);
  } catch {
    return void 0;
  }
}
main().catch((e) => {
  process.stdout.write(`::error title=Okayed::${e.stack ?? e}
`);
  process.exitCode = 1;
});
