// close-till-ip.jsx
// Copyright (c)  2013
// Fabian "fabiantheblind" Morón Zirfas
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to  permit persons to
// whom the Software is furnished to do so, subject to
// the following conditions:
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTIO
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// see also http://www.opensource.org/licenses/mit-license.php

(function (thisObj) {

  var msg = {
    'no_ip': "Please put the cursor into a textframe"
  };
  var main = function main() {
    var doc = app.activeDocument;
    if (doc === null) {
      alert("No Document");
    } else {


      if (doc.selection.length === 0) {
        alert(msg.no_ip);
      } else if (!(doc.selection[0] instanceof InsertionPoint)) {
        alert(msg.no_ip);

      } else {
        var ip = doc.selection[0];
        ip.contents = "\r";
        var ipbl = ip.baseline;
        var iptf = ip.parentTextFrames[0];
        var gb = iptf.geometricBounds;
        iptf.geometricBounds = [gb[0],gb[1],ipbl + 2,gb[3]];
        iptf.select();
      }
    }
  };

  main();

})(this);