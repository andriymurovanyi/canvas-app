import Canvas from '../Canvas';

describe('Canvas', () => {
  describe('create', () => {
    it('should create a new canvas', () => {
      const width = 12;
      const height = 34;
      const canvas = Canvas.create(width, height);

      expect(canvas._height).toBe(height);
      expect(canvas._width).toBe(width);
    });

    it('should throw an exception when passed the invalid parameters', () => {
      expect(() => Canvas.create(12)).toThrow();
      expect(() => Canvas.create('12', 34)).toThrow();
      expect(() => Canvas.create(12, NaN)).toThrow();
      expect(() => Canvas.create(12, 34)).not.toThrow();
    });

    it('should initialize its matrix representation', () => {
      const width = 5;
      const height = 6;

      const result =
        '-------\n' +
        '|     |\n' +
        '|     |\n' +
        '|     |\n' +
        '|     |\n' +
        '|     |\n' +
        '|     |\n' +
        '-------';

      const canvas = Canvas.create(width, height);

      expect(canvas.print()).toEqual(result);
    });
  });

  describe('drawLine', () => {
    let canvas;
    const width = 5;
    const height = 6;
    beforeEach(() => {
      canvas = Canvas.create(width, height);
    });

    it('should throw an exception when passed the invalid parameters', () => {
      expect(() => canvas.drawLine(12, 23, 5, 9)).toThrow();
      expect(() => canvas.drawLine(12, 23)).toThrow();
      expect(() => canvas.drawLine(2, 3, 2, 6)).not.toThrow();
      expect(() => canvas.drawLine(1, 3, 2, 8)).toThrow();
      expect(() => canvas.drawLine(5, 6, 2, 6)).not.toThrow();
    });

    it('should draw a vertical line', () => {
      const result =
        '-------\n' +
        '|     |\n' +
        '|     |\n' +
        '|x    |\n' +
        '|x    |\n' +
        '|x    |\n' +
        '|x    |\n' +
        '-------';

      canvas.drawLine(1, 3, 1, 6);
      expect(canvas.print()).toEqual(result);
    });

    it('should draw a horizontal line', () => {
      const result =
        '-------\n' +
        '|     |\n' +
        '|     |\n' +
        '| xxxx|\n' +
        '|     |\n' +
        '|     |\n' +
        '|     |\n' +
        '-------';

      canvas.drawLine(2, 3, 5, 3);
      expect(canvas.print()).toEqual(result);
    });

    it('should draw different lines', () => {
      const result =
        '-------\n' +
        '|  x  |\n' +
        '|  x  |\n' +
        '| xxxx|\n' +
        '|  x  |\n' +
        '|  x  |\n' +
        '|x  xx|\n' +
        '-------';

      canvas.drawLine(2, 3, 5, 3);
      canvas.drawLine(3, 5, 3, 1);
      canvas.drawLine(1, 6, 1, 6);
      canvas.drawLine(4, 6, 5, 6);

      expect(canvas.print()).toEqual(result);
    });
  });

  describe('drawRectangle', () => {
    let canvas;
    const width = 5;
    const height = 6;
    beforeEach(() => {
      canvas = Canvas.create(width, height);
    });

    it('should throw an exception when passed the invalid parameters', () => {
      expect(() => canvas.drawRectangle(12, 23, 5, 9)).toThrow();
      expect(() => canvas.drawRectangle(12, 23)).toThrow();
      expect(() => canvas.drawRectangle(2, 3, 2, 6)).not.toThrow();
      expect(() => canvas.drawRectangle(1, 3, 2, 8)).toThrow();
      expect(() => canvas.drawRectangle(5, 6, 2, 6)).not.toThrow();
    });

    it('should draw different rectangles', () => {
      const result =
        '-------\n' +
        '|xxxx |\n' +
        '|x  x |\n' +
        '|x xxx|\n' +
        '|xxxxx|\n' +
        '|  x x|\n' +
        '|x xxx|\n' +
        '-------';

      canvas.drawRectangle(1, 1, 4, 4);
      canvas.drawRectangle(3, 3, 5, 6);
      canvas.drawRectangle(1, 6, 1, 6);

      expect(canvas.print()).toEqual(result);
    });
  });
});
