# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_SVG\Task_SVG\FlipkartSearch.spec.ts >> Flipkart Search >> Search for macmini and validate results
- Location: tests\Handle_SVG\Task_SVG\FlipkartSearch.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.flipkart.com/search", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e7]:
    - generic [ref=e9]:
      - link "Flipkart" [ref=e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=e11]
      - link "Explore Plus" [ref=e12] [cursor=pointer]:
        - /url: /plus
        - text: Explore Plus
        - img [ref=e13]
    - generic [ref=e16]:
      - textbox "Search for products, brands and more" [ref=e18]
      - button [ref=e19] [cursor=pointer]:
        - img [ref=e20]
    - link "Login" [ref=e28] [cursor=pointer]:
      - /url: /account/login?ret=/search
    - link "Become a Seller" [ref=e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
      - generic [ref=e31]: Become a Seller
    - generic [ref=e33] [cursor=pointer]:
      - generic [ref=e36]: More
      - img [ref=e37]
    - link "Cart" [ref=e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
      - img [ref=e43]
      - generic [ref=e45]: Cart
  - generic [ref=e50]:
    - generic [ref=e54]:
      - generic [ref=e57]: Filters
      - generic [ref=e59]:
        - generic [ref=e60]: PICK A CATEGORY
        - generic [ref=e62]:
          - img [ref=e64] [cursor=pointer]
          - link "Clothing and Accessories" [ref=e66] [cursor=pointer]:
            - /url: /clothing-and-accessories/pr?sid=clo&otracker=categorytree
        - generic [ref=e68]:
          - img [ref=e70] [cursor=pointer]
          - link "Automotive Accessories" [ref=e72] [cursor=pointer]:
            - /url: /automotive-accessories/pr?sid=1mt&otracker=categorytree
        - generic [ref=e74]:
          - img [ref=e76] [cursor=pointer]
          - link "Food Products" [ref=e78] [cursor=pointer]:
            - /url: /food-products/pr?sid=eat&otracker=categorytree
        - generic [ref=e80]:
          - img [ref=e82] [cursor=pointer]
          - link "Vehicles" [ref=e84] [cursor=pointer]:
            - /url: /vehicles/pr?sid=7dk&otracker=categorytree
        - generic [ref=e86]:
          - img [ref=e88] [cursor=pointer]
          - link "Books" [ref=e90] [cursor=pointer]:
            - /url: /books/pr?sid=bks&otracker=categorytree
        - generic [ref=e91] [cursor=pointer]: Show 39 more categories
    - generic [ref=e92]:
      - generic [ref=e95]:
        - heading "All Categories" [level=1] [ref=e96]
        - generic [ref=e97]: (Showing 1 – 40 products of 2,38,670 products)
        - generic [ref=e98]:
          - generic [ref=e99]: Sort By
          - generic [ref=e100]: Popularity
          - generic [ref=e101] [cursor=pointer]: Price -- Low to High
          - generic [ref=e102] [cursor=pointer]: Price -- High to Low
      - generic [ref=e104]:
        - generic [ref=e106]:
          - link "SHRUSTAM Exfoliating Foot Mask Foot Peel Mask for Dead Skin Removal Foot Mask for Women" [ref=e107] [cursor=pointer]:
            - /url: /shrustam-exfoliating-foot-mask-peel-dead-skin-removal-women/p/itmd8a6f1612e571?pid=FFLHNDWHQ8QGHCUC&lid=LSTFFLHNDWHQ8QGHCUCZOBAW0&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_1&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLaofYci9qJhy1eSfZwnD8Br0x0mISfKL2uI_qlDTLBvnA%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - img "SHRUSTAM Exfoliating Foot Mask Foot Peel Mask for Dead Skin Removal Foot Mask for Women" [ref=e111]
            - img [ref=e114]
          - img [ref=e117]
          - link "SHRUSTAM Exfoliating Foot Mask Foot Peel Mask for Dead ..." [ref=e120] [cursor=pointer]:
            - /url: /shrustam-exfoliating-foot-mask-peel-dead-skin-removal-women/p/itmd8a6f1612e571?pid=FFLHNDWHQ8QGHCUC&lid=LSTFFLHNDWHQ8QGHCUCZOBAW0&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_1&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLaofYci9qJhy1eSfZwnD8Br0x0mISfKL2uI_qlDTLBvnA%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e121]:
            - generic [ref=e123]:
              - text: "3.3"
              - img [ref=e124]
            - text: (3)
          - img [ref=e126]
          - link "₹83 ₹499 83% off" [ref=e127] [cursor=pointer]:
            - /url: /shrustam-exfoliating-foot-mask-peel-dead-skin-removal-women/p/itmd8a6f1612e571?pid=FFLHNDWHQ8QGHCUC&lid=LSTFFLHNDWHQ8QGHCUCZOBAW0&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_1&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLaofYci9qJhy1eSfZwnD8Br0x0mISfKL2uI_qlDTLBvnA%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e128]:
              - generic [ref=e129]: ₹83
              - generic [ref=e130]: ₹499
              - generic [ref=e131]: 83% off
        - generic [ref=e133]:
          - link "Vastarpara door 4PCS Car Silicone Door Latch Lock Protective Cover Car Pet Door Protector" [ref=e134] [cursor=pointer]:
            - /url: /vastarpara-door-4pcs-car-silicone-latch-lock-protective-cover-pet-protector/p/itm53f6b331397b2?pid=RTDHMNZSCWH4MXPH&lid=LSTRTDHMNZSCWH4MXPHPXSMBX&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_2&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLZIec_Pw-DiHwofim-IVomT4xFltjWt14mNUIKhFku_Pw%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e137]:
              - img "Vastarpara door 4PCS Car Silicone Door Latch Lock Protective Cover Car Pet Door Protector"
            - img [ref=e140]
          - img [ref=e143]
          - link "Vastarpara door 4PCS Car Silicone Door Latch Lock Prote..." [ref=e146] [cursor=pointer]:
            - /url: /vastarpara-door-4pcs-car-silicone-latch-lock-protective-cover-pet-protector/p/itm53f6b331397b2?pid=RTDHMNZSCWH4MXPH&lid=LSTRTDHMNZSCWH4MXPHPXSMBX&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_2&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLZIec_Pw-DiHwofim-IVomT4xFltjWt14mNUIKhFku_Pw%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e147]:
            - generic [ref=e149]:
              - text: "3.7"
              - img [ref=e150]
            - text: (41)
          - link "₹170 ₹499 65% off" [ref=e151] [cursor=pointer]:
            - /url: /vastarpara-door-4pcs-car-silicone-latch-lock-protective-cover-pet-protector/p/itm53f6b331397b2?pid=RTDHMNZSCWH4MXPH&lid=LSTRTDHMNZSCWH4MXPHPXSMBX&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_2&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLZIec_Pw-DiHwofim-IVomT4xFltjWt14mNUIKhFku_Pw%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e152]:
              - generic [ref=e153]: ₹170
              - generic [ref=e154]: ₹499
              - generic [ref=e155]: 65% off
        - generic [ref=e157]:
          - link "Krishna's Herbal & Ayurveda Sciatifix Herbal Juice Good Source of Calcium | Strengthens Bones and Muscles" [ref=e158] [cursor=pointer]:
            - /url: /krishna-s-herbal-ayurveda-sciatifix-juice-good-source-calcium-strengthens-bones-muscles/p/itma30f956e00a70?pid=AYDH5F6AYBFF76PY&lid=LSTAYDH5F6AYBFF76PYFABEHO&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_3&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLb6rmaOWUvwhVhit19ooUsJmDcToggScEFeT3bwWwoW1Q%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e161]:
              - img "Krishna's Herbal & Ayurveda Sciatifix Herbal Juice Good Source of Calcium | Strengthens Bones and Muscles"
            - img [ref=e164]
          - img [ref=e167]
          - link "Krishna's Herbal & Ayurveda Sciatifix Herbal Juice Good..." [ref=e170] [cursor=pointer]:
            - /url: /krishna-s-herbal-ayurveda-sciatifix-juice-good-source-calcium-strengthens-bones-muscles/p/itma30f956e00a70?pid=AYDH5F6AYBFF76PY&lid=LSTAYDH5F6AYBFF76PYFABEHO&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_3&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLb6rmaOWUvwhVhit19ooUsJmDcToggScEFeT3bwWwoW1Q%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e171]: 1000 ml
          - generic [ref=e172]:
            - generic [ref=e174]:
              - text: "4.1"
              - img [ref=e175]
            - text: (1,818)
          - img [ref=e177]
          - link "₹430 ₹478 10% off" [ref=e178] [cursor=pointer]:
            - /url: /krishna-s-herbal-ayurveda-sciatifix-juice-good-source-calcium-strengthens-bones-muscles/p/itma30f956e00a70?pid=AYDH5F6AYBFF76PY&lid=LSTAYDH5F6AYBFF76PYFABEHO&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_3&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLb6rmaOWUvwhVhit19ooUsJmDcToggScEFeT3bwWwoW1Q%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e179]:
              - generic [ref=e180]: ₹430
              - generic [ref=e181]: ₹478
              - generic [ref=e182]: 10% off
          - generic [ref=e185]: Buy 2 items, save extra ₹20
        - generic [ref=e187]:
          - link "Flipkart BLACK - 12 Months Membership" [ref=e188] [cursor=pointer]:
            - /url: /flipkart-black-12-months-membership/p/itm8600c62a8a210?pid=XVZGYWT68RSFDUBX&lid=LSTXVZGYWT68RSFDUBXFZNBQK&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_4&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.XVZGYWT68RSFDUBX.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e191]:
              - img "Flipkart BLACK - 12 Months Membership"
            - img [ref=e194]
          - link "Flipkart BLACK - 12 Months Membership" [ref=e196] [cursor=pointer]:
            - /url: /flipkart-black-12-months-membership/p/itm8600c62a8a210?pid=XVZGYWT68RSFDUBX&lid=LSTXVZGYWT68RSFDUBXFZNBQK&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_4&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.XVZGYWT68RSFDUBX.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e197]: Instant Activation
          - generic [ref=e198]:
            - generic [ref=e200]:
              - text: "4.4"
              - img [ref=e201]
            - text: (1,15,915)
          - img [ref=e203]
          - link "₹1,499" [ref=e204] [cursor=pointer]:
            - /url: /flipkart-black-12-months-membership/p/itm8600c62a8a210?pid=XVZGYWT68RSFDUBX&lid=LSTXVZGYWT68RSFDUBXFZNBQK&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_4&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.XVZGYWT68RSFDUBX.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e206]: ₹1,499
      - generic [ref=e208]:
        - generic [ref=e210]:
          - link "CLINSKIN CREAM FACE CREAM Medicine Dispenser" [ref=e211] [cursor=pointer]:
            - /url: /clinskin-cream-face-medicine-dispenser/p/itm167713b1d5f15?pid=MDDHHRAYFUCMJP8C&lid=LSTMDDHHRAYFUCMJP8C2WWFI6&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_5&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.MDDHHRAYFUCMJP8C.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e214]:
              - img "CLINSKIN CREAM FACE CREAM Medicine Dispenser"
            - img [ref=e217]
          - link "CLINSKIN CREAM FACE CREAM Medicine Dispenser" [ref=e219] [cursor=pointer]:
            - /url: /clinskin-cream-face-medicine-dispenser/p/itm167713b1d5f15?pid=MDDHHRAYFUCMJP8C&lid=LSTMDDHHRAYFUCMJP8C2WWFI6&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_5&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.MDDHHRAYFUCMJP8C.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e220]:
            - generic [ref=e222]:
              - text: "3.5"
              - img [ref=e223]
            - text: (14)
          - link "₹169 ₹399 57% off" [ref=e224] [cursor=pointer]:
            - /url: /clinskin-cream-face-medicine-dispenser/p/itm167713b1d5f15?pid=MDDHHRAYFUCMJP8C&lid=LSTMDDHHRAYFUCMJP8C2WWFI6&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_5&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.MDDHHRAYFUCMJP8C.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e225]:
              - generic [ref=e226]: ₹169
              - generic [ref=e227]: ₹399
              - generic [ref=e228]: 57% off
          - generic [ref=e231]: Saver Deal
        - generic [ref=e233]:
          - link "LORSHEL japani balm | Signature Japanese Massage Edition - Improves Day-to-Day Body Cream" [ref=e234] [cursor=pointer]:
            - /url: /lorshel-japani-balm-signature-japanese-massage-improves-day-to-day-body-cream/p/itmabb60bf20510d?pid=BPRHKDEGFJHPH7SU&lid=LSTBPRHKDEGFJHPH7SUVDT3TJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_6&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLYpEWM8u2-efXRaHJWBJ6juYE_QyyIAitODIjL5djlYtfUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e237]:
              - img "LORSHEL japani balm | Signature Japanese Massage Edition - Improves Day-to-Day Body Cream"
            - img [ref=e240]
          - img [ref=e243]
          - link "LORSHEL japani balm | Signature Japanese Massage Editio..." [ref=e246] [cursor=pointer]:
            - /url: /lorshel-japani-balm-signature-japanese-massage-improves-day-to-day-body-cream/p/itmabb60bf20510d?pid=BPRHKDEGFJHPH7SU&lid=LSTBPRHKDEGFJHPH7SUVDT3TJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_6&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLYpEWM8u2-efXRaHJWBJ6juYE_QyyIAitODIjL5djlYtfUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e247]: 100 ml
          - generic [ref=e248]:
            - generic [ref=e250]:
              - text: "4"
              - img [ref=e251]
            - text: (11)
          - link "₹77 ₹299 74% off" [ref=e252] [cursor=pointer]:
            - /url: /lorshel-japani-balm-signature-japanese-massage-improves-day-to-day-body-cream/p/itmabb60bf20510d?pid=BPRHKDEGFJHPH7SU&lid=LSTBPRHKDEGFJHPH7SUVDT3TJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_6&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLYpEWM8u2-efXRaHJWBJ6juYE_QyyIAitODIjL5djlYtfUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e253]:
              - generic [ref=e254]: ₹77
              - generic [ref=e255]: ₹299
              - generic [ref=e256]: 74% off
        - generic [ref=e258]:
          - link "Emolene Propylene Glycol (hydronourisher for dry skin) Cream" [ref=e259] [cursor=pointer]:
            - /url: /emolene-propylene-glycol-hydronourisher-dry-skin-cream/p/itm00a42f134e165?pid=ALOHHSG4JVDKVRBZ&lid=LSTALOHHSG4JVDKVRBZHU4NZS&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_7&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.ALOHHSG4JVDKVRBZ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e262]:
              - img "Emolene Propylene Glycol (hydronourisher for dry skin) Cream"
            - img [ref=e265]
          - link "Emolene Propylene Glycol (hydronourisher for dry skin) ..." [ref=e267] [cursor=pointer]:
            - /url: /emolene-propylene-glycol-hydronourisher-dry-skin-cream/p/itm00a42f134e165?pid=ALOHHSG4JVDKVRBZ&lid=LSTALOHHSG4JVDKVRBZHU4NZS&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_7&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.ALOHHSG4JVDKVRBZ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e268]: 100 g
          - generic [ref=e269]:
            - generic [ref=e271]:
              - text: "4.3"
              - img [ref=e272]
            - text: (5,507)
          - img [ref=e274]
          - link "₹341 ₹420 18% off" [ref=e275] [cursor=pointer]:
            - /url: /emolene-propylene-glycol-hydronourisher-dry-skin-cream/p/itm00a42f134e165?pid=ALOHHSG4JVDKVRBZ&lid=LSTALOHHSG4JVDKVRBZHU4NZS&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_7&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.ALOHHSG4JVDKVRBZ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e276]:
              - generic [ref=e277]: ₹341
              - generic [ref=e278]: ₹420
              - generic [ref=e279]: 18% off
        - generic [ref=e281]:
          - link "PENTAPATCH EYE PATCH JUNIOR Adhesive Band Aid" [ref=e282] [cursor=pointer]:
            - /url: /pentapatch-eye-patch-junior-adhesive-band-aid/p/itmcf7334589b3bf?pid=DAIFTJUHPYGZPHDN&lid=LSTDAIFTJUHPYGZPHDNWIM18Z&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_8&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.DAIFTJUHPYGZPHDN.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e285]:
              - img "PENTAPATCH EYE PATCH JUNIOR Adhesive Band Aid"
            - img [ref=e288]
          - link "PENTAPATCH EYE PATCH JUNIOR Adhesive Band Aid" [ref=e290] [cursor=pointer]:
            - /url: /pentapatch-eye-patch-junior-adhesive-band-aid/p/itmcf7334589b3bf?pid=DAIFTJUHPYGZPHDN&lid=LSTDAIFTJUHPYGZPHDNWIM18Z&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_8&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.DAIFTJUHPYGZPHDN.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e291]: Set of 1
          - generic [ref=e292]:
            - generic [ref=e294]:
              - text: "4.1"
              - img [ref=e295]
            - text: (1,572)
          - img [ref=e297]
          - link "₹237 ₹400 40% off" [ref=e298] [cursor=pointer]:
            - /url: /pentapatch-eye-patch-junior-adhesive-band-aid/p/itmcf7334589b3bf?pid=DAIFTJUHPYGZPHDN&lid=LSTDAIFTJUHPYGZPHDNWIM18Z&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_8&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.DAIFTJUHPYGZPHDN.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e299]:
              - generic [ref=e300]: ₹237
              - generic [ref=e301]: ₹400
              - generic [ref=e302]: 40% off
          - generic [ref=e305]: Only few left
      - generic [ref=e307]:
        - generic [ref=e309]:
          - link "Liora Ultra-Soft, Highly Absorbent Toilet Rolls - 235 Pulls x 10 Rolls Toilet Paper Roll" [ref=e310] [cursor=pointer]:
            - /url: /liora-ultra-soft-highly-absorbent-toilet-rolls-235-pulls-x-10-paper-roll/p/itm486de4a8d9dcc?pid=TPOHJWDGNWGF5DD4&lid=LSTTPOHJWDGNWGF5DD4MTCU0O&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_9&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLalU2eHbEd42eBY09x_lv3Iv9DIkXAbOOSl7JmQExkWCA%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e313]:
              - img "Liora Ultra-Soft, Highly Absorbent Toilet Rolls - 235 Pulls x 10 Rolls Toilet Paper Roll"
            - img [ref=e316]
          - img [ref=e319]
          - link "Liora Ultra-Soft, Highly Absorbent Toilet Rolls - 235 P..." [ref=e322] [cursor=pointer]:
            - /url: /liora-ultra-soft-highly-absorbent-toilet-rolls-235-pulls-x-10-paper-roll/p/itm486de4a8d9dcc?pid=TPOHJWDGNWGF5DD4&lid=LSTTPOHJWDGNWGF5DD4MTCU0O&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_9&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLalU2eHbEd42eBY09x_lv3Iv9DIkXAbOOSl7JmQExkWCA%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e323]: 3 Ply, 2350 Sheets
          - generic [ref=e324]:
            - generic [ref=e326]:
              - text: "4"
              - img [ref=e327]
            - text: (285)
          - link "₹135 ₹449 69% off" [ref=e328] [cursor=pointer]:
            - /url: /liora-ultra-soft-highly-absorbent-toilet-rolls-235-pulls-x-10-paper-roll/p/itm486de4a8d9dcc?pid=TPOHJWDGNWGF5DD4&lid=LSTTPOHJWDGNWGF5DD4MTCU0O&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_9&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLalU2eHbEd42eBY09x_lv3Iv9DIkXAbOOSl7JmQExkWCA%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e329]:
              - generic [ref=e330]: ₹135
              - generic [ref=e331]: ₹449
              - generic [ref=e332]: 69% off
          - generic [ref=e335]: Lowest price since launch
        - generic [ref=e337]:
          - link "glyco-6 Glyco 6" [ref=e338] [cursor=pointer]:
            - /url: /glyco-6-glyco-6/p/itm75a6eece424f3?pid=KMTHH2GXFGY53YRG&lid=LSTKMTHH2GXFGY53YRGVYLQXT&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_10&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.KMTHH2GXFGY53YRG.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e341]:
              - img "glyco-6 Glyco 6"
            - img [ref=e344]
          - link "glyco-6 Glyco 6" [ref=e346] [cursor=pointer]:
            - /url: /glyco-6-glyco-6/p/itm75a6eece424f3?pid=KMTHH2GXFGY53YRG&lid=LSTKMTHH2GXFGY53YRGVYLQXT&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_10&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.KMTHH2GXFGY53YRG.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e347]: 30 g
          - generic [ref=e348]:
            - generic [ref=e350]:
              - text: "4.2"
              - img [ref=e351]
            - text: (5)
          - link "₹125 ₹226 44% off" [ref=e352] [cursor=pointer]:
            - /url: /glyco-6-glyco-6/p/itm75a6eece424f3?pid=KMTHH2GXFGY53YRG&lid=LSTKMTHH2GXFGY53YRGVYLQXT&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_10&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.KMTHH2GXFGY53YRG.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e353]:
              - generic [ref=e354]: ₹125
              - generic [ref=e355]: ₹226
              - generic [ref=e356]: 44% off
          - generic [ref=e359]: Only few left
        - generic [ref=e361]:
          - link "Electvision Original voice remote control for smart 4k android led tv Mi, xiaomi, Redmi Remote Controller" [ref=e362] [cursor=pointer]:
            - /url: /electvision-original-voice-remote-control-smart-4k-android-led-tv-mi-xiaomi-redmi-controller/p/itmfee537ea63b48?pid=REMHKXZP9TKDUUYM&lid=LSTREMHKXZP9TKDUUYMWSFSQB&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_11&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLbCGgyD_7KZmm7xb0i4muXCsv4-BiSibr3lwR-WPl1i9vUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e365]:
              - img "Electvision Original voice remote control for smart 4k android led tv Mi, xiaomi, Redmi Remote Controller"
            - img [ref=e368]
          - img [ref=e371]
          - link "Electvision Original voice remote control for smart 4k ..." [ref=e374] [cursor=pointer]:
            - /url: /electvision-original-voice-remote-control-smart-4k-android-led-tv-mi-xiaomi-redmi-controller/p/itmfee537ea63b48?pid=REMHKXZP9TKDUUYM&lid=LSTREMHKXZP9TKDUUYMWSFSQB&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_11&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLbCGgyD_7KZmm7xb0i4muXCsv4-BiSibr3lwR-WPl1i9vUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e375]: Black
          - generic [ref=e376]:
            - generic [ref=e378]:
              - text: "4"
              - img [ref=e379]
            - text: (261)
          - img [ref=e381]
          - link "₹333 ₹999 66% off" [ref=e382] [cursor=pointer]:
            - /url: /electvision-original-voice-remote-control-smart-4k-android-led-tv-mi-xiaomi-redmi-controller/p/itmfee537ea63b48?pid=REMHKXZP9TKDUUYM&lid=LSTREMHKXZP9TKDUUYMWSFSQB&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_11&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLbCGgyD_7KZmm7xb0i4muXCsv4-BiSibr3lwR-WPl1i9vUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e383]:
              - generic [ref=e384]: ₹333
              - generic [ref=e385]: ₹999
              - generic [ref=e386]: 66% off
        - generic [ref=e388]:
          - link "SCENTORA Rat Repellent Spray for Cars, No Entry Rat Repellent Car Spray for Cars" [ref=e389] [cursor=pointer]:
            - /url: /scentora-rat-repellent-spray-cars-no-entry-car-cars/p/itma3bf1db3d1c24?pid=IRPHCAWCSDMCMRCZ&lid=LSTIRPHCAWCSDMCMRCZPQOESA&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_12&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLZi_vnyze0-FaiX9OwIzrgL5fiUb_VFwG-5Uhn0YUXSLQ%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e392]:
              - img "SCENTORA Rat Repellent Spray for Cars, No Entry Rat Repellent Car Spray for Cars"
            - img [ref=e395]
          - img [ref=e398]
          - link "SCENTORA Rat Repellent Spray for Cars, No Entry Rat Rep..." [ref=e401] [cursor=pointer]:
            - /url: /scentora-rat-repellent-spray-cars-no-entry-car-cars/p/itma3bf1db3d1c24?pid=IRPHCAWCSDMCMRCZ&lid=LSTIRPHCAWCSDMCMRCZPQOESA&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_12&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLZi_vnyze0-FaiX9OwIzrgL5fiUb_VFwG-5Uhn0YUXSLQ%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e402]: 2 x 100 ml
          - generic [ref=e403]:
            - generic [ref=e405]:
              - text: "4.1"
              - img [ref=e406]
            - text: (1,164)
          - img [ref=e408]
          - link "₹154 ₹999 84% off" [ref=e409] [cursor=pointer]:
            - /url: /scentora-rat-repellent-spray-cars-no-entry-car-cars/p/itma3bf1db3d1c24?pid=IRPHCAWCSDMCMRCZ&lid=LSTIRPHCAWCSDMCMRCZPQOESA&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_12&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLZi_vnyze0-FaiX9OwIzrgL5fiUb_VFwG-5Uhn0YUXSLQ%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e410]:
              - generic [ref=e411]: ₹154
              - generic [ref=e412]: ₹999
              - generic [ref=e413]: 84% off
          - generic [ref=e416]: Lowest price in the year
      - generic [ref=e418]:
        - generic [ref=e420]:
          - link "NIBAR Screen Cleaner Gel for Computers, Laptops, Mobiles, Gaming" [ref=e421] [cursor=pointer]:
            - /url: /nibar-screen-cleaner-gel-computers-laptops-mobiles-gaming/p/itm89ddd3a66d43e?pid=CLKGHQYZRMGAVAYQ&lid=LSTCLKGHQYZRMGAVAYQ0ZGCPJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_13&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.CLKGHQYZRMGAVAYQ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e424]:
              - img "NIBAR Screen Cleaner Gel for Computers, Laptops, Mobiles, Gaming"
            - img [ref=e427]
          - link "NIBAR Screen Cleaner Gel for Computers, Laptops, Mobile..." [ref=e429] [cursor=pointer]:
            - /url: /nibar-screen-cleaner-gel-computers-laptops-mobiles-gaming/p/itm89ddd3a66d43e?pid=CLKGHQYZRMGAVAYQ&lid=LSTCLKGHQYZRMGAVAYQ0ZGCPJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_13&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.CLKGHQYZRMGAVAYQ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e430]: NB003
          - generic [ref=e431]:
            - generic [ref=e433]:
              - text: "4"
              - img [ref=e434]
            - text: (1,284)
          - link "₹121 ₹599 79% off" [ref=e435] [cursor=pointer]:
            - /url: /nibar-screen-cleaner-gel-computers-laptops-mobiles-gaming/p/itm89ddd3a66d43e?pid=CLKGHQYZRMGAVAYQ&lid=LSTCLKGHQYZRMGAVAYQ0ZGCPJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_13&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.CLKGHQYZRMGAVAYQ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e436]:
              - generic [ref=e437]: ₹121
              - generic [ref=e438]: ₹599
              - generic [ref=e439]: 79% off
          - generic [ref=e442]: Only few left
        - generic [ref=e444]:
          - link "CRETO Heating Pad Gel Full Body Pain Reliever Electric 1 L Hot Water Bag" [ref=e445] [cursor=pointer]:
            - /url: /creto-heating-pad-gel-full-body-pain-reliever-electric-1-l-hot-water-bag/p/itm2606185731806?pid=HWBGVYEZ5ZZDGMQQ&lid=LSTHWBGVYEZ5ZZDGMQQ8C1O9D&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_14&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.HWBGVYEZ5ZZDGMQQ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e448]:
              - img "CRETO Heating Pad Gel Full Body Pain Reliever Electric 1 L Hot Water Bag"
            - img [ref=e451]
          - link "CRETO Heating Pad Gel Full Body Pain Reliever Electric ..." [ref=e453] [cursor=pointer]:
            - /url: /creto-heating-pad-gel-full-body-pain-reliever-electric-1-l-hot-water-bag/p/itm2606185731806?pid=HWBGVYEZ5ZZDGMQQ&lid=LSTHWBGVYEZ5ZZDGMQQ8C1O9D&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_14&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.HWBGVYEZ5ZZDGMQQ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e454]: Multicolor
          - generic [ref=e455]:
            - generic [ref=e457]:
              - text: "4.3"
              - img [ref=e458]
            - text: (27,966)
          - img [ref=e460]
          - link "₹170 ₹999 82% off" [ref=e461] [cursor=pointer]:
            - /url: /creto-heating-pad-gel-full-body-pain-reliever-electric-1-l-hot-water-bag/p/itm2606185731806?pid=HWBGVYEZ5ZZDGMQQ&lid=LSTHWBGVYEZ5ZZDGMQQ8C1O9D&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_14&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.HWBGVYEZ5ZZDGMQQ.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e462]:
              - generic [ref=e463]: ₹170
              - generic [ref=e464]: ₹999
              - generic [ref=e465]: 82% off
          - generic [ref=e468]: GRWM Deals
        - generic [ref=e470]:
          - link "AR Nutrition Vedacure 100% Authentic Herbal & Gentle Ingredients Detox Foot Pads Plaster & Patch" [ref=e471] [cursor=pointer]:
            - /url: /ar-nutrition-vedacure-100-authentic-herbal-gentle-ingredients-detox-foot-pads-plaster-patch/p/itm7e5f1f7165de0?pid=BPRHMX3CGRH8NKBJ&lid=LSTBPRHMX3CGRH8NKBJDO6JTJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_15&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLbrjot10tKKZnVWzmd8e9MFCjig3Bd3SPVjsN_Iv9OtWQ%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e474]:
              - img "AR Nutrition Vedacure 100% Authentic Herbal & Gentle Ingredients Detox Foot Pads Plaster & Patch"
            - img [ref=e477]
          - img [ref=e480]
          - link "AR Nutrition Vedacure 100% Authentic Herbal & Gentle In..." [ref=e483] [cursor=pointer]:
            - /url: /ar-nutrition-vedacure-100-authentic-herbal-gentle-ingredients-detox-foot-pads-plaster-patch/p/itm7e5f1f7165de0?pid=BPRHMX3CGRH8NKBJ&lid=LSTBPRHMX3CGRH8NKBJDO6JTJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_15&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLbrjot10tKKZnVWzmd8e9MFCjig3Bd3SPVjsN_Iv9OtWQ%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e484]: 10 x 2 Patches
          - generic [ref=e485]:
            - generic [ref=e487]:
              - text: "4.2"
              - img [ref=e488]
            - text: (16)
          - link "₹141 ₹499 71% off" [ref=e489] [cursor=pointer]:
            - /url: /ar-nutrition-vedacure-100-authentic-herbal-gentle-ingredients-detox-foot-pads-plaster-patch/p/itm7e5f1f7165de0?pid=BPRHMX3CGRH8NKBJ&lid=LSTBPRHMX3CGRH8NKBJDO6JTJ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_15&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLbrjot10tKKZnVWzmd8e9MFCjig3Bd3SPVjsN_Iv9OtWQ%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e490]:
              - generic [ref=e491]: ₹141
              - generic [ref=e492]: ₹499
              - generic [ref=e493]: 71% off
          - generic [ref=e496]: Lowest Price Live
        - generic [ref=e498]:
          - link "Dr. Morepen Round pack of 100 Glucometer Lancets" [ref=e499] [cursor=pointer]:
            - /url: /dr-morepen-round-pack-100-glucometer-lancets/p/itm4e085dae38a14?pid=GLCHDMMYVUWZ3PZH&lid=LSTGLCHDMMYVUWZ3PZHONW6JQ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_16&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.GLCHDMMYVUWZ3PZH.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e502]:
              - img "Dr. Morepen Round pack of 100 Glucometer Lancets"
            - img [ref=e505]
          - link "Dr. Morepen Round pack of 100 Glucometer Lancets" [ref=e507] [cursor=pointer]:
            - /url: /dr-morepen-round-pack-100-glucometer-lancets/p/itm4e085dae38a14?pid=GLCHDMMYVUWZ3PZH&lid=LSTGLCHDMMYVUWZ3PZHONW6JQ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_16&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.GLCHDMMYVUWZ3PZH.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e508]: "100"
          - generic [ref=e509]:
            - generic [ref=e511]:
              - text: "4.2"
              - img [ref=e512]
            - text: (1,097)
          - link "₹179 ₹350 48% off" [ref=e513] [cursor=pointer]:
            - /url: /dr-morepen-round-pack-100-glucometer-lancets/p/itm4e085dae38a14?pid=GLCHDMMYVUWZ3PZH&lid=LSTGLCHDMMYVUWZ3PZHONW6JQ&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_16&otracker=browse&fm=organic&iid=6e6fb7e2-4ad8-41d5-8b83-55429f1fc169.GLCHDMMYVUWZ3PZH.SEARCH&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
            - generic [ref=e514]:
              - generic [ref=e515]: ₹179
              - generic [ref=e516]: ₹350
              - generic [ref=e517]: 48% off
          - generic [ref=e520]: Only few left
      - generic [ref=e524]:
        - link "Earth extracts Bed Bug Repellent Spray For Home, Natural, Non-Toxic, 100% Herbal & Effective" [ref=e525] [cursor=pointer]:
          - /url: /earth-extracts-bed-bug-repellent-spray-home-natural-non-toxic-100-herbal-effective/p/itmdf1001381343b?pid=IRPHE5FT4WJZTFFH&lid=LSTIRPHE5FT4WJZTFFHPU11YU&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_17&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLaYrG2SkLMS6RI6jg4b8QwtUtOZRt2Mg8geazI3yAqK-g%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
          - generic [ref=e528]:
            - img "Earth extracts Bed Bug Repellent Spray For Home, Natural, Non-Toxic, 100% Herbal & Effective"
          - img [ref=e531]
        - img [ref=e534]
        - link "Earth extracts Bed Bug Repellent Spray For Home, Natura..." [ref=e537] [cursor=pointer]:
          - /url: /earth-extracts-bed-bug-repellent-spray-home-natural-non-toxic-100-herbal-effective/p/itmdf1001381343b?pid=IRPHE5FT4WJZTFFH&lid=LSTIRPHE5FT4WJZTFFHPU11YU&marketplace=FLIPKART&store=search.flipkart.com&srno=b_1_17&otracker=browse&fm=organic&iid=en_5tSPAQ4bYdyGIZiwJpx3pGfArhrSOwg__pdbvdNpMLaYrG2SkLMS6RI6jg4b8QwtUtOZRt2Mg8geazI3yAqK-g%3D%3D&ppt=None&ppn=None&ssid=xsw0stc4ps0000001780501357167&ov_redirect=true&ov_redirect=true
        - generic [ref=e538]: 100 ml
        - generic [ref=e539]:
          - generic [ref=e541]:
            - text: "4"
            - img [ref=e542]
          - text: (1,879)
        - img [ref=e544]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.describe('Flipkart Search', () => {
  4  | 
  5  |     test.beforeEach(async ({ page }) => {
> 6  |         await page.goto('https://www.flipkart.com/search');
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  |     });
  8  | 
  9  |     test('Search for macmini and validate results', async ({ page }) => {
  10 |         // Search for macmini
  11 |         await page.locator('input[name="q"]').fill("macmini");
  12 |         await page.locator('button[type="submit"]').click();
  13 |         
  14 |         // Wait for results to load
  15 |         await page.waitForSelector('div[data-id]', { timeout: 10000 });
  16 |         
  17 |         // Click on SVG icon (settings/filter icon if available)
  18 |         const svgIcon = page.locator('svg').first();
  19 |         if (await svgIcon.isVisible({ timeout: 5000 })) {
  20 |             await svgIcon.click();
  21 |         }
  22 |         
  23 |         // Get all product results on the first page
  24 |         const productCards = await page.locator('div[data-id]').all();
  25 |         console.log(`Total products found: ${productCards.length}`);
  26 |         
  27 |         // Click on "Price -- Low to High" sorting button
  28 |         const sortOptions = page.locator('//div[contains(text(),"Price -- Low to High")]').first();
  29 |         if (await sortOptions.isVisible({ timeout: 5000 })) {
  30 |             await sortOptions.click();
  31 |             // Wait for sorting to complete
  32 |             await page.waitForLoadState('networkidle');
  33 |         }
  34 |         
  35 |         // Get all results after sorting
  36 |         const sortedProducts = await page.locator('div[data-id]').all();
  37 |         console.log(`Total products after sorting: ${sortedProducts.length}`);
  38 |         
  39 |         // Find first product and print its name and price
  40 |         if (sortedProducts.length > 0) {
  41 |             const firstProduct = sortedProducts[0];
  42 |             const productName = await firstProduct.locator('a[title]').nth(0).textContent();    
  43 |             const productPrice = await firstProduct.locator('//following-sibling::a/div/div').first().textContent();
  44 |             
  45 |             console.log('\n========== CHEAPEST MACMINI ==========');
  46 |             console.log(`Product Name: ${productName}`);
  47 |             console.log(`Price: ${productPrice}`);
  48 |             console.log('======================================\n');
  49 |         }
  50 |         
  51 |     });
  52 | 
  53 | 
  54 | });
```