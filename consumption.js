const consumptionData = {
  "北海道": {
    "rice": 65.67,
    "bread": 36.9,
    "fish": 23.23,
    "beef": 4.51,
    "pork": 24.27,
    "butter": 760.0,
    "vegetables": 157.18,
    "fruit": 68.76
  },
  "青森県": {
    "rice": 61.4,
    "bread": 34.75,
    "fish": 29.75,
    "beef": 5.59,
    "pork": 24.16,
    "butter": 509.0,
    "vegetables": 167.11,
    "fruit": 76.74
  },
  "岩手県": {
    "rice": 67.33,
    "bread": 37.28,
    "fish": 25.05,
    "beef": 5.37,
    "pork": 23.03,
    "butter": 480.0,
    "vegetables": 165.75,
    "fruit": 63.71
  },
  "宮城県": {
    "rice": 58.46,
    "bread": 40.08,
    "fish": 20.07,
    "beef": 4.65,
    "pork": 21.95,
    "butter": 360.0,
    "vegetables": 168.72,
    "fruit": 72.84
  },
  "秋田県": {
    "rice": 57.12,
    "bread": 34.08,
    "fish": 25.35,
    "beef": 4.58,
    "pork": 24.47,
    "butter": 477.0,
    "vegetables": 180.05,
    "fruit": 73.64
  },
  "山形県": {
    "rice": 67.8,
    "bread": 32.74,
    "fish": 18.87,
    "beef": 8.85,
    "pork": 24.14,
    "butter": 540.0,
    "vegetables": 164.28,
    "fruit": 78.53
  },
  "福島県": {
    "rice": 69.35,
    "bread": 33.1,
    "fish": 18.37,
    "beef": 4.51,
    "pork": 26.23,
    "butter": 476.0,
    "vegetables": 164.34,
    "fruit": 68.9
  },
  "茨城県": {
    "rice": 53.24,
    "bread": 36.02,
    "fish": 17.41,
    "beef": 4.25,
    "pork": 20.23,
    "butter": 535.0,
    "vegetables": 153.73,
    "fruit": 70.87
  },
  "栃木県": {
    "rice": 55.7,
    "bread": 38.65,
    "fish": 16.95,
    "beef": 4.54,
    "pork": 21.72,
    "butter": 599.0,
    "vegetables": 166.2,
    "fruit": 74.24
  },
  "群馬県": {
    "rice": 59.46,
    "bread": 41.48,
    "fish": 17.76,
    "beef": 3.19,
    "pork": 20.34,
    "butter": 620.0,
    "vegetables": 166.49,
    "fruit": 73.99
  },
  "埼玉県": {
    "rice": 55.9,
    "bread": 43.34,
    "fish": 19.22,
    "beef": 6.05,
    "pork": 25.38,
    "butter": 696.0,
    "vegetables": 179.3,
    "fruit": 69.03
  },
  "千葉県": {
    "rice": 54.58,
    "bread": 44.74,
    "fish": 23.34,
    "beef": 6.02,
    "pork": 22.44,
    "butter": 696.0,
    "vegetables": 190.99,
    "fruit": 79.08
  },
  "東京都": {
    "rice": 48.66,
    "bread": 44.09,
    "fish": 20.13,
    "beef": 6.43,
    "pork": 23.12,
    "butter": 797.0,
    "vegetables": 183.99,
    "fruit": 67.83
  },
  "神奈川県": {
    "rice": 54.57,
    "bread": 45.55,
    "fish": 20.08,
    "beef": 6.8,
    "pork": 23.74,
    "butter": 741.0,
    "vegetables": 188.95,
    "fruit": 67.46
  },
  "新潟県": {
    "rice": 73.76,
    "bread": 42.81,
    "fish": 21.15,
    "beef": 3.8,
    "pork": 27.55,
    "butter": 552.0,
    "vegetables": 194.63,
    "fruit": 78.67
  },
  "富山県": {
    "rice": 72.97,
    "bread": 44.44,
    "fish": 25.08,
    "beef": 5.69,
    "pork": 21.23,
    "butter": 525.0,
    "vegetables": 162.57,
    "fruit": 68.15
  },
  "石川県": {
    "rice": 65.12,
    "bread": 45.04,
    "fish": 25.11,
    "beef": 7.31,
    "pork": 23.46,
    "butter": 733.0,
    "vegetables": 162.29,
    "fruit": 67.17
  },
  "福井県": {
    "rice": 77.16,
    "bread": 38.09,
    "fish": 20.37,
    "beef": 6.57,
    "pork": 18.13,
    "butter": 450.0,
    "vegetables": 140.09,
    "fruit": 56.74
  },
  "山梨県": {
    "rice": 55.28,
    "bread": 37.92,
    "fish": 16.47,
    "beef": 4.19,
    "pork": 21.99,
    "butter": 500.0,
    "vegetables": 156.92,
    "fruit": 67.88
  },
  "長野県": {
    "rice": 57.34,
    "bread": 40.21,
    "fish": 17.81,
    "beef": 3.8,
    "pork": 21.6,
    "butter": 551.0,
    "vegetables": 171.5,
    "fruit": 75.63
  },
  "岐阜県": {
    "rice": 60.87,
    "bread": 42.96,
    "fish": 18.0,
    "beef": 5.53,
    "pork": 21.33,
    "butter": 572.0,
    "vegetables": 157.01,
    "fruit": 68.46
  },
  "静岡県": {
    "rice": 72.98,
    "bread": 40.98,
    "fish": 18.69,
    "beef": 4.94,
    "pork": 25.43,
    "butter": 724.0,
    "vegetables": 174.39,
    "fruit": 71.95
  },
  "愛知県": {
    "rice": 55.6,
    "bread": 47.8,
    "fish": 19.73,
    "beef": 5.81,
    "pork": 21.39,
    "butter": 622.0,
    "vegetables": 168.98,
    "fruit": 70.74
  },
  "三重県": {
    "rice": 49.0,
    "bread": 44.4,
    "fish": 21.23,
    "beef": 7.73,
    "pork": 21.07,
    "butter": 614.0,
    "vegetables": 146.58,
    "fruit": 72.31
  },
  "滋賀県": {
    "rice": 61.65,
    "bread": 54.48,
    "fish": 20.15,
    "beef": 8.5,
    "pork": 20.57,
    "butter": 669.0,
    "vegetables": 177.49,
    "fruit": 66.51
  },
  "京都府": {
    "rice": 56.15,
    "bread": 51.98,
    "fish": 20.68,
    "beef": 8.46,
    "pork": 19.41,
    "butter": 834.0,
    "vegetables": 176.43,
    "fruit": 74.42
  },
  "大阪府": {
    "rice": 60.12,
    "bread": 49.32,
    "fish": 22.04,
    "beef": 9.19,
    "pork": 22.12,
    "butter": 607.0,
    "vegetables": 170.38,
    "fruit": 68.3
  },
  "兵庫県": {
    "rice": 51.58,
    "bread": 50.51,
    "fish": 20.37,
    "beef": 7.44,
    "pork": 18.85,
    "butter": 737.0,
    "vegetables": 164.34,
    "fruit": 73.38
  },
  "奈良県": {
    "rice": 55.59,
    "bread": 50.29,
    "fish": 20.99,
    "beef": 9.28,
    "pork": 21.58,
    "butter": 729.0,
    "vegetables": 168.72,
    "fruit": 76.25
  },
  "和歌山県": {
    "rice": 66.98,
    "bread": 50.48,
    "fish": 20.44,
    "beef": 8.64,
    "pork": 20.39,
    "butter": 517.0,
    "vegetables": 149.51,
    "fruit": 72.29
  },
  "鳥取県": {
    "rice": 63.87,
    "bread": 42.6,
    "fish": 27.72,
    "beef": 5.91,
    "pork": 19.83,
    "butter": 442.0,
    "vegetables": 151.19,
    "fruit": 73.39
  },
  "島根県": {
    "rice": 60.04,
    "bread": 40.93,
    "fish": 23.56,
    "beef": 6.13,
    "pork": 21.3,
    "butter": 554.0,
    "vegetables": 159.91,
    "fruit": 64.59
  },
  "岡山県": {
    "rice": 49.06,
    "bread": 48.87,
    "fish": 17.7,
    "beef": 7.22,
    "pork": 20.5,
    "butter": 547.0,
    "vegetables": 141.98,
    "fruit": 65.11
  },
  "広島県": {
    "rice": 55.32,
    "bread": 42.89,
    "fish": 21.58,
    "beef": 8.64,
    "pork": 18.36,
    "butter": 657.0,
    "vegetables": 134.75,
    "fruit": 60.62
  },
  "山口県": {
    "rice": 52.07,
    "bread": 43.48,
    "fish": 18.16,
    "beef": 6.87,
    "pork": 16.31,
    "butter": 584.0,
    "vegetables": 144.26,
    "fruit": 73.46
  },
  "徳島県": {
    "rice": 51.06,
    "bread": 43.84,
    "fish": 19.51,
    "beef": 7.16,
    "pork": 18.3,
    "butter": 449.0,
    "vegetables": 144.45,
    "fruit": 68.85
  },
  "香川県": {
    "rice": 48.24,
    "bread": 44.55,
    "fish": 22.05,
    "beef": 8.77,
    "pork": 20.4,
    "butter": 453.0,
    "vegetables": 141.09,
    "fruit": 74.88
  },
  "愛媛県": {
    "rice": 53.56,
    "bread": 38.57,
    "fish": 19.9,
    "beef": 6.69,
    "pork": 17.47,
    "butter": 405.0,
    "vegetables": 134.98,
    "fruit": 64.95
  },
  "高知県": {
    "rice": 54.05,
    "bread": 43.52,
    "fish": 18.85,
    "beef": 8.14,
    "pork": 20.88,
    "butter": 607.0,
    "vegetables": 155.25,
    "fruit": 60.44
  },
  "福岡県": {
    "rice": 57.33,
    "bread": 38.46,
    "fish": 21.23,
    "beef": 7.43,
    "pork": 20.8,
    "butter": 456.0,
    "vegetables": 153.56,
    "fruit": 56.6
  },
  "佐賀県": {
    "rice": 69.43,
    "bread": 46.14,
    "fish": 22.77,
    "beef": 6.13,
    "pork": 20.09,
    "butter": 498.0,
    "vegetables": 161.86,
    "fruit": 71.34
  },
  "長崎県": {
    "rice": 63.34,
    "bread": 38.78,
    "fish": 18.79,
    "beef": 7.85,
    "pork": 21.31,
    "butter": 649.0,
    "vegetables": 155.1,
    "fruit": 60.71
  },
  "熊本県": {
    "rice": 59.72,
    "bread": 36.09,
    "fish": 20.88,
    "beef": 7.78,
    "pork": 21.42,
    "butter": 465.0,
    "vegetables": 154.06,
    "fruit": 64.17
  },
  "大分県": {
    "rice": 54.62,
    "bread": 36.18,
    "fish": 19.26,
    "beef": 6.53,
    "pork": 20.66,
    "butter": 482.0,
    "vegetables": 147.25,
    "fruit": 67.04
  },
  "宮崎県": {
    "rice": 58.56,
    "bread": 40.92,
    "fish": 19.27,
    "beef": 5.42,
    "pork": 20.36,
    "butter": 467.0,
    "vegetables": 162.54,
    "fruit": 61.56
  },
  "鹿児島県": {
    "rice": 64.68,
    "bread": 37.12,
    "fish": 15.16,
    "beef": 6.35,
    "pork": 20.41,
    "butter": 468.0,
    "vegetables": 137.07,
    "fruit": 53.78
  },
  "沖縄県": {
    "rice": 58.28,
    "bread": 43.53,
    "fish": 20.32,
    "beef": 6.26,
    "pork": 22.3,
    "butter": 601.0,
    "vegetables": 162.06,
    "fruit": 67.85
  }
} ;