package com.sksamuel.kotest.property.shrinking

import io.kotest.assertions.throwables.shouldThrowAny
import io.kotest.core.spec.style.FunSpec
import io.kotest.extensions.system.captureStandardOut
import io.kotest.matchers.ints.shouldBeLessThan
import io.kotest.matchers.string.shouldContain
import io.kotest.property.PropTestConfig
import io.kotest.property.checkAll

class ShrinkingTest : FunSpec() {
   init {
      test("shrinking should show the exception raised by the shrunk values") {

         val stdout = captureStandardOut {
            shouldThrowAny {
               checkAll<String, String>(PropTestConfig(seed = 324236)) { a, b ->
                  (a + b).length shouldBeLessThan 4
               }
            }
         }

         stdout.shouldContain(
            """
Attempting to shrink arg "fA8WuO:zxma`J~jqX:]DGx~}F'kh(*P)/L|!baL "UNV^GPdan\@C*Dn(BWU}Gd0P"
Shrink #1: "fA8WuO:zxma`J~jqX:]DGx~}F'kh(*P)/L" fail
Shrink #2: "fA8WuO:zxma`J~jq" fail
Shrink #3: "fA8WuO:z" fail
Shrink #4: "fA8" fail
Shrink #5: "fA8" fail
Shrink #6: "fA" fail
Shrink #7: "f" fail
Shrink #8: <empty string> fail
Shrink result (after 8 shrinks) => <empty string>
            """.trim()
         )

         stdout.shouldContain(
            """
Attempting to shrink arg "FbYK&"
Shrink #1: "FbY" fail
Shrink #2: "F" pass
Shrink #3: "bY" pass
Shrink #4: "bY" pass
Shrink #5: "Fb" pass
Shrink #6: "FFbY" fail
Shrink #7: "FF" pass
Shrink #8: "FbY" pass
Shrink #9: "FFb" pass
Shrink #10: "FFFY" fail
Shrink #11: "FY" pass
Shrink #12: "FFY" pass
Shrink #13: "FFF" pass
Shrink #14: "FFFF" fail
Shrink result (after 14 shrinks) => "FFFF"
            """.trim()
         )
      }
   }
}
